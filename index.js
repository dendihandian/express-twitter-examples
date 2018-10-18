const express = require('express');
const app = express()
const port = 3000
const router = require('./app/router')

const bodyParser = require('body-parser')
app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}))

router(app)

app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
)
