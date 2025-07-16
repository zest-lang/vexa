const fs = require('fs')
const path = require('path')

function extendResponse(res) {
  res.send = function (body) {
    if (typeof body === 'object') {
      this.setHeader('Content-Type', 'application/json')
      this.end(JSON.stringify(body))
    } else {
      this.end(body)
    }
  }

  res.json = function (obj) {
    this.setHeader('Content-Type', 'application/json')
    this.end(JSON.stringify(obj))
  }

  res.status = function (code) {
    this.statusCode = code
    return this
  }

  res.redirect = function (url) {
    this.statusCode = 302
    this.setHeader('Location', url)
    this.end()
  }

  res.sendFile = function (filePath) {
    const absolutePath = path.resolve(filePath)
    const stream = fs.createReadStream(absolutePath)

    stream.on('open', () => {
      stream.pipe(res)
    })

    stream.on('error', (err) => {
      this.statusCode = 404
      this.end('File not found')
    })
  }
}

module.exports = { extendResponse }