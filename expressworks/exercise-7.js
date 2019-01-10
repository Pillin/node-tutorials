const express = require('express')

const [nodeName, programName, port] = process.argv;

const app = express();

const SearchController = (req, res) => {
	const { results, type, page } = req.query;
	res.send({ results, type, page });
};

app.get('/search', SearchController);
app.listen(port);
