const Vexa = require('./core/server')
const { jsonParser, urlencodedParser } = require('./utils/parser')
const { createRouter } = require('./core/router')

function createVexa() {
  const app = new Vexa()
  app.use(jsonParser)
  app.use(urlencodedParser)
  return app
}

createVexa.Router = createRouter

module.exports = createVexa
