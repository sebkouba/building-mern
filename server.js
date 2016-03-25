var express = require('express');
var app = express();

// when a get request ist sent to '/' return "Hello World"
//app.get('/hello', (req, res) => {
//  res.send("Hello Express World");
//});

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
