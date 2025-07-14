const routes = []

function addRoute(method, path, handler) {
  routes.push({ method, path, handler })
}

function matchRoute(method, url) {
  for (const route of routes) {
    if (route.method !== method) continue

    const routeParts = route.path.split('/').filter(Boolean)
    const urlParts = url.split('/').filter(Boolean)

    if (routeParts.length !== urlParts.length) continue

    const params = {}
    let matched = true

    for (let i = 0; i < routeParts.length; i++) {
      if (routeParts[i].startsWith(':')) {
        const name = routeParts[i].slice(1)
        params[name] = urlParts[i]
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

module.exports = { addRoute, matchRoute }
