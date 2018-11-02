var http =require('http');

const [language, programName, url] = process.argv;

const callback = (response) => {
	response.setEncoding('utf8');
	response.on("data", (data) => {
		console.log(data.toString());
	});
	response.on("error", (err) => console.log(err));
	response.on("end", (data) => console.log(data ? data : ''));
};


http.get(url, callback);