var fs = require('fs');

const [language, programName, fileName] = process.argv;

const callback = (err, data) => {
 	if (err) return;
 	const content = data.toString();
 	console.log(content.split('\n').length -1);
};

fs.readFile(fileName, callback);