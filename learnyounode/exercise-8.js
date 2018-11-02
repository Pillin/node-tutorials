var http =require('http');
var bl = require('bl');

const [language, programName, url] = process.argv;

const processData = (err, data) => {
	if (err) return console.error(err);
	const content = data.toString();
	console.log(content.length);
	console.log(content);
};

const callback = (response) => {
	response.setEncoding('utf8');
	response.pipe(bl(processData));
	response.on("error", (err) => console.log(err));
};

http.get(url, callback);