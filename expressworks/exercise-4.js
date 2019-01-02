const express = require('express');
const bodyparser = require('body-parser');

const [nodeName, programName, port] = process.argv;

const app = express();
app.use(bodyparser.urlencoded({extended: false}));

const formPostController = (req, res) => {
	const { str } = req.body;
	const value = str.split('').reverse().join('');
	res.end(value);
};

app.post('/form', formPostController);
app.listen(port);
