require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dhruv', (req, res) => {
    res.send('Hello World!')
  })

app.get('/login', (req, res) => {
    res.send('You are at login page')
})

app.get('/youtube',(req,res) => {
    res.send('<h2>Dhruv Sonani</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)

})