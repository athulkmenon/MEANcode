var express = require('express');

var indexRouter = express.Router();

// GET method route
indexRouter.get('/', function (req, res) {
    res.send('GET request to the index page')
  })
  
  // POST method route
  indexRouter.post('/', function (req, res) {
    res.send('POST request to the index page')
  })

  // DELETE method route
  indexRouter.delete('/', function (req, res) {
    res.send('DELETE request to the index page')
  })

  module.exports = indexRouter;
