const express = require('express');
require('dotenv').config();
const compression = require('compression');
const router = require('./router');

const PORT = process.env.PORT || 3000;

const app = express();
app.set('port', PORT);
app.disable('x-powered-by');

app.use([
  express.json(),
  express.urlencoded({ extended: false }),
  compression()
]);

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: "Hello World!"
  })
});

app.use('/api/v1', router)

module.exports = app;