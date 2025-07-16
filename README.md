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
npm install vexa-http
```

---

### 🧪 Basic usage example

```js
const vexa = require('vexa-http')
const app = vexa()

// Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

// Basic routes
app.get('/user/:id', (req, res) => {
  res.json({ userId: req.params.id, query: req.query })
})

app.post('/user', (req, res) => {
  res.json({ received: req.body })
})

// File download
app.get('/download', (req, res) => {
  res.sendFile('./large-file.zip') // Streams the file!
})

// Redirect
app.get('/old-route', (req, res) => {
  res.redirect('/new-route') // 302 Redirect
})

// PUT method
app.put('/user/:id', (req, res) => {
  res.json({ updated: req.params.id })
})

// DELETE method
app.delete('/user/:id', (req, res) => {
  res.status(204).end()
})

// Start server
app.start(3000, () => {
  console.log('Vexa server running on port 3000')
})
```

---

### 📦 Router example

```js
const vexa = require('vexa-http')
const { Router } = vexa
const app = vexa()

const userRouter = Router()

userRouter.get('/profile', (req, res) => {
  res.json({ message: 'User profile' })
})

userRouter.get('/settings', (req, res) => {
  res.json({ message: 'User settings' })
})

app.use('/user', userRouter)

app.start(3000, () => {
  console.log('Vexa router example running on port 3000')
})
```

---

### 🔌 Features

- ✅ Lightweight and flexible middleware  
- ✅ Support for all HTTP methods (`GET`, `POST`, `PUT`, `DELETE`, etc.)  
- ✅ File download with `res.sendFile()`  
- ✅ Redirection with `res.redirect()`  
- ✅ `req.query`, `req.params`, `req.body`  
- ✅ Built-in `res.send`, `res.json`, `res.status`, `res.end`  
- ✅ Modular routing with `Router()`  
- ✅ Async optional – works with or without it  

---

### 🧠 Philosophy

> "Less magic. More control."  
> With Vexa, you write what you need, nothing more.

---

### 🛠️ Contribute

Feel free to open issues or PRs.  
This project is made by devs who love simplicity.

---

### 📄 License

MIT © AFK2 - TEAM
