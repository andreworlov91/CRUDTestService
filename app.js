const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const index = require('./routes/index')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', index)

app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!')
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(process.env.PORT, function(){
    console.log('Application listening!')
})