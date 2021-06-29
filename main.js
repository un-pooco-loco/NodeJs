var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
	var url = req.url;
	var current = new Date();
	// current.toString();
	res.writeHead(200, { 'Content-Type': 'text/html' });

	if (url === '/Monday') {
		// console.log(current.getTime());
		res.write('Monday ' + current.toLocaleTimeString().toString());
		res.end();
	}
	else 	if (url === '/Tuesday') {
		// console.log(current.getTime());
		res.write('Tuesday ' + current.toLocaleTimeString().toString());
		res.end();
	}
	else 	if (url === '/Wednesday') {
		// console.log(current.getTime());
		res.write('Wednesday ' + current.toLocaleTimeString().toString());
		res.end();
	}
	else 	if (url === '/Thursday') {
		// console.log(current.getTime());
		res.write('Thursday ' + current.toLocaleTimeString().toString());
		res.end();
	}
	else 	if (url === '/Friday') {
		// console.log(current.getTime());
		res.write('Friday ' + current.toLocaleTimeString().toString());
		res.end();
	}
	else {
		var filename = __dirname + '/index.html';
		fs.readFile(filename, function (err, data) {
			if (err) {
				res.writeHead(404, { 'Content-Type': 'text/html' });
				res.end("404 Not Found");
			}
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			res.end();
		});
	}
}).listen(8080, function () {
	console.log('server is listening on port 8080');
});

