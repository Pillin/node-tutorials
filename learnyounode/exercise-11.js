const http = require('http');
const fs = require('fs');

const [language, programName, port, pathfile] = process.argv;

const server = http.createServer((req, res) => {
	const readStream = fs.createReadStream(pathfile);
	readStream.on('open', () => {
		readStream.pipe(res);
	});

	readStream.on('error', (err) => {
		res.end(err);
	});

});

server.listen(port);