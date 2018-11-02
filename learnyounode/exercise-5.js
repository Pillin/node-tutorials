var fs = require('fs');

const [language, programName, path, extension] = process.argv;

const readDirCallback = (err, data) => {
 	if (err) return;
 	const content = data.filter(elem => elem.indexOf('.') >=0 && elem.split('.').reverse()[0] === extension);
 	content.map((elem) => console.log(elem));
};

fs.readdir(path, readDirCallback);