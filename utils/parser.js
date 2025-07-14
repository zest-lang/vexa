function jsonParser(req, res, next) {
  if (req.headers['content-type']?.includes('application/json')) {
    let body = ''
    req.on('data', chunk => { body += chunk })
    req.on('end', () => {
      try {
        req.body = JSON.parse(body)
        next()
      } catch (err) {
        res.statusCode = 400
        res.end('Invalid JSON')
      }
    })
  } else {
    next()
  }
}

function urlencodedParser(req, res, next) {
  if (req.headers['content-type']?.includes('application/x-www-form-urlencoded')) {
    let body = ''
    req.on('data', chunk => { body += chunk })
    req.on('end', () => {
      req.body = Object.fromEntries(new URLSearchParams(body))
      next()
    })
  } else {
    next()
  }
}

module.exports = { jsonParser, urlencodedParser }
