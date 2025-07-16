function extendRequest(req) {
  const parsedUrl = new URL(req.url, 'http://dummy-base.com') // Base dummy para parsing
  req.path = parsedUrl.pathname
  req.query = Object.fromEntries(parsedUrl.searchParams)
}

module.exports = { extendRequest }