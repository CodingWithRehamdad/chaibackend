const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("RaheemDotCom")
})

app.get('/login', (req, res) => {
    res.send("<h1>Please login at chai aur code<h1/>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})