const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const index = require('./routes/index')
require('dotenv').config()

// NOTE: set
app.set('port', process.env.PORT || 3000)

// NOTE: use
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', index)

app.listen(app.get('port'), () => {
  console.log('Listening on port'+app.get('port'));
})