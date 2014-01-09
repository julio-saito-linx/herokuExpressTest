// web.js
var express = require("express");
var mongo = require('mongodb');
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

//MONGO-DB
var mongoUri =  process.env.MONGOLAB_URI  ||
                process.env.MONGOHQ_URL   ||
  'mongodb://admin:admin@ds061198.mongolab.com:61198/heroku_app21107224';

mongo.Db.connect(mongoUri, function (err, db) {
  db.collection('mydocs', function(er, collection) {
    collection.insert({'mykey': 'myvalue'}, {safe: true}, function(er,rs) {
    });
  });
});  