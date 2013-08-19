var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.logger());

var context_file = "index.html";
var context_buf = fs.readFileSync(context_file);
var context = context_buf.toString();


app.get('/', function(request, response) {
  response.send(context);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
