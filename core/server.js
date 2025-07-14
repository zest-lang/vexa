const http = require('http')
const { addRoute, matchRoute } = require('./router-core')
const { runHandler } = require('./middleware')
const { extendResponse } = require('../utils/response')
const { extendRequest } = require('../utils/request')

class Vexa {
  constructor() {
    this.middlewares = []
  }

  use(middleware) {
    if (typeof middleware.handle === 'function') {
      this.middlewares.push(middleware.handle.bind(middleware))
    } else {
      this.middlewares.push(middleware)
    }
    return this
  }

  get(path, handler) {
    addRoute('GET', path, handler)
    return this
  }

  post(path, handler) {
    addRoute('POST', path, handler)
    return this
  }

  async handleRequest(req, res) {
    extendRequest(req)
    extendResponse(res)

    let i = 0
    const next = async () => {
      if (i < this.middlewares.length) {
        await runHandler(this.middlewares[i++], req, res, next)
      }
    }

    await next()

    const matched = matchRoute(req.method, req.path)
    if (!matched) {
      res.statusCode = 404
      return res.end('Not Found')
    }

    req.params = matched.params || {}

    await runHandler(matched.handler, req, res)
  }

  start(port, callback) {
    const server = http.createServer(this.handleRequest.bind(this))
    server.listen(port, callback)
    return server
  }
}

module.exports = Vexa
