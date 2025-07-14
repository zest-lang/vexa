<p align="center">
  <img src="https://files.catbox.moe/m23qjv.png" width="250" alt="Vexa Logo" />
</p>

<h1 align="center">Vexa</h1>

<p align="center">
  A minimalist and expressive web framework for Node.js, inspired by Express — but lighter, more modular, and modern.
</p>

---

### 🚀 Installation

```bash
npm install vexa
```

---

### 🧪 Usage example

```js
const vexa = require('vexa')
const app = vexa()

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

app.get('/user/:id', (req, res) => {
  res.json({ userId: req.params.id, query: req.query })
})

app.post('/user', (req, res) => {
  res.json({ received: req.body })
})

app.start(3000, () => {
  console.log('Vexa server running on port 3000')
})
```

---

### 🔌 Resources

- ✅ Lightweight and flexible middleware

- ✅ Support for routes with parameters (`/user/:id`)

- ✅ `req.query`, `req.params` e `req.body`

- ✅ `res.send`, `res.json`, `res.status`

- ✅ Modular (with `.Router()`)

- ✅ Optional async: use if you want

---

### 🧠 Philosophy

> "Less magic. More control."  
> With Vexa, you write what you need, nothing more.

---

### 🛠️ Contribute

Feel free to open issues or PRs. This project is made by devs who love simplicity.

---

### 📄 License

MIT © AFK2 - TEAM
