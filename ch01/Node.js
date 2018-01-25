var express = require('express');
var connect = require('connect');

var app = express();
app.use(connect.compress());
app.use(express.logger());
app.use(express.bodyParser());
app.get('/', function (req, res) {
    res.end('hello world');
});
app.listen(8080);