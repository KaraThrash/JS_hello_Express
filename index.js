const express = require('express')
const app = express()
const port = process.env.PORT || '3000'
app.set('view engine', 'hbs')

app.get('/', function (req, res) {
  res.render('hello', { name: "Viking" })
})


app.listen(port, function () {
  console.log('Odin is listening on port 3000!')
})
