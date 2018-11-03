const http = require('http');
const fs = require('fs');

const [language, programName, port] = process.argv;


const server = http.createServer((req, res) => {
	const { method, url } = req;
	if (method !== 'POST') return res.end('Invalid request');

	req.on('data', (chunk) => {
		const word = chunk.toString().toUpperCase();
		res.write(word);
	});
	req.on('end', () => {
		res.end();
	});

});


server.listen(Number(port));