const url = require('url')

function extendRequest(req) {
  const parsedUrl = url.parse(req.url, true)
  req.path = parsedUrl.pathname
  req.query = parsedUrl.query
}

module.exports = { extendRequest }
