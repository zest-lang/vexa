async function runHandler(fn, req, res, next) {
  try {
    const result = fn(req, res, next)
    if (result && typeof result.then === 'function') {
      await result
    }
  } catch (err) {
    res.statusCode = 500
    res.end('Internal Server Error')
    console.error(err)
  }
}

module.exports = { runHandler }