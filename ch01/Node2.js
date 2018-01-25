var express = require('express');
var app = express();
app.use(express.logger('dev')).use(function (req,res) {
    res.end('hello world \n')
})
.use(express.responseTime())
.listen(8080);