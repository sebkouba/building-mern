var express = require('express');
var app = express();

// when a get request ist sent to '/' return "Hello World"
app.get('/', (req, res) => {
  res.send("Hello World");
});

// start the server on port 3000
var server = app.listen(3000, () => {
  console.log("Listening on Port " + server.address().port);
});
