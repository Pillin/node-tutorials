const express = require('express');
const fs = require('fs-extra');

const [nodeName, programName, port, fileName] = process.argv;

const app = express();

const readFile = async (name) => {
	let data = '';
	let error = null;
	try {
		data = await fs.readFile(name);
	} catch (err) {
		error = err;
	}
	return { error, data };
};

const readContent = (data) => {
	let content = '';
	let error = null;
	try {
		content = JSON.parse(data);
	} catch (err) {
		error = err;
	}
	return { error, content };
};


const BookController = async (req, res) => {
	let { error, data } = await readFile(fileName);
	if (error) {
		return res.sendStatus(500);
	}
	const value = readContent(data);
	if (value.error) {
		return res.sendStatus(500);
	}
	res.json(value.content);
};

app.get('/books', BookController);
app.listen(port);
