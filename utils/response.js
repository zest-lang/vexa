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
}

module.exports = { extendResponse }
