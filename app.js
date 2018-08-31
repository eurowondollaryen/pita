var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
	console.log('Server is running on ' + port);
});

app.get("/", (req, res) => {
	fs.readFile('index.html', (error, data) => {
		if(error) {
			console.log(error);
		}
		else {
			res.writeHead(200, {'Content-Type' : 'text/html'});
			res.end(data);
		}
	});
});
