const express = require('express')
const [nodeName, programName, port, templatePath] = process.argv;

const app = express();
app.set('view engine', 'pug');
app.set('views', templatePath);

const HomeController = (req, res) => {
	const date = new Date().toDateString();
	res.render('index', { date });
};

app.get('/home', HomeController);
app.listen(port);
