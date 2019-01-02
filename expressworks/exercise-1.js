const express = require('express')
const [nodeName, programName, port] = process.argv;

const app = express();
const HomeController = (req, res) => {
  res.end('Hello World!')
};
app.get('/home', HomeController);
app.listen(port);
