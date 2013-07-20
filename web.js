var express = require('express');

var app = express.createServer(express.logger());

var fs = require ('fs');

var Buff = new Buffer('');

Buff = fs.readFileSync("index.html");


app.get('/', function(request, response) {
  //response.send('Hello Isi y N3!');
    response.send(Buff.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
