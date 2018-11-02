var fs = require('fs');


const lsFilePerExtension = (path, extension, callback) => {
	const readDirCallback = (err, data) => {
	 	if (err) return callback(err, data);
	 	const content = data.filter(elem => elem.indexOf('.') >=0 && elem.split('.').reverse()[0] === extension);
	 	callback(null,content);
	};

	fs.readdir(path, readDirCallback);
};
module.exports = lsFilePerExtension;