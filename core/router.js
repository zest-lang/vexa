const { runHandler } = require('./middleware')

function createRouter() {
  const routes = []

  const router = {
    get(path, handler) {
      routes.push({ method: 'GET', path, handler })
      return router
    },
    post(path, handler) {
      routes.push({ method: 'POST', path, handler })
      return router
    },
    handle: async function (req, res, next) {
      const matched = matchRouteFrom(routes, req.method, req.url)
      if (matched) {
        req.params = matched.params
        await runHandler(matched.handler, req, res, next)
      } else {
        await next()
      }
    },
  }

  return router
}

function matchRouteFrom(routes, method, url) {
  for (const route of routes) {
    if (route.method !== method) continue

    const routeParts = route.path.split('/').filter(Boolean)
    const urlParts = url.split('/').filter(Boolean)

    if (routeParts.length !== urlParts.length) continue

    const params = {}
    let matched = true

    for (let i = 0; i < routeParts.length; i++) {
      if (routeParts[i].startsWith(':')) {
        params[routeParts[i].slice(1)] = urlParts[i]
      } else if (routeParts[i] !== urlParts[i]) {
        matched = false
        break
      }
    }

    if (matched) {
      return { handler: route.handler, params }
    }
  }

  return null
}

module.exports = { createRouter }
