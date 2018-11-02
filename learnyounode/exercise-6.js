const lsFilePerExtension = require('./exercise-6-module');
const [language, programName, path, extension] = process.argv;

const printValues = (err,data) => {
	if (err) return console.log(err);
	data.map((elem) => console.log(elem));
};

lsFilePerExtension(path, extension, printValues);