const vexa = require('../index')
const app = vexa()

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})//Optional

app.get('/user/:id', (req, res) => {
  res.json({ userId: req.params.id, query: req.query })
})

app.post('/user', (req, res) => {
  res.json({ received: req.body })
})

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' })
})

app.get('/dashboard', (req, res) => {
    res.sendFile('./index.html');
});

app.start(3000, () => {
  console.log('Vexa server running on port 3000')
})
