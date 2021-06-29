var express = require('express');
var app = express();

var currentTime = function (req, res, next) {
    req.currentTime = new Date();
    next()
}

app.use(currentTime);

app.get('/', function (req, res) {
    var text = '<h1>Welcome to MyApp</h1>' + '<small>requested at: ' + req.currentTime.toString() + '</small>';
    res.send(text);
});

app.get('/home', function (req, res) {
    var text = '<h2>Welcome to home</h2>' + '<small>requested at: ' + req.currentTime.toString() + '</small>';
    res.send(text);
});

app.get('/details', function (req, res) {
    var text = '<h3>Welcome to details</h3>' + '<small>requested at: ' + req.currentTime.toString() + '</small>';
    res.send(text);
});

app.listen(3000, function () {
    console.log('server is listening at port 3000...');
})