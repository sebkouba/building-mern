var express = require('express');
var app = express();
import entryCtrl from './controllers/entry.server.controller.js';
import recordWeightCtrl from './controllers/recordWeight.server.controller';
import Bodyweight from './models/recordWeight.server.model';

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI);

// when a get request ist sent to '/' return "Hello World"
app.get('/hello', (req, res) => {
  res.send("Hello Express World");
});

// send request data to the entryController which saves it in the db
app.post('/entry', (req, res) => {
  return entryCtrl(req, res);
});

app.post('/weight', (req, res) => {
  return recordWeightCtrl(req, res);
});

app.get('/weight', (req, res) => {
  // return the data that was retrieved from the db
  Bodyweight.find({}, null, {sort: 'date'}, (err, weights) => {
    //console.log(weights);
    res.send(weights);
  });
});

// forward requests to the hot server. Seems to fix my F5 bug...
var request = require('request');
app.use('/*', function (req, res) {
  var url = "http://localhost:3001" + req.url;
  req.pipe(request(url)).pipe(res);
});

// start the server on port 3000
var server = app.listen(3000, () => {
  console.log("Listening on Port " + server.address().port);
});

// we start a webpack-dev-server with our config
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
  hot: true,
  // this did it!
  noInfo: true,
  historyApiFallback: true,
  proxy: {
    "*": "http://localhost:3000"
  }
}).listen(3001, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Dev Server Listening at localhost:3001');
});
