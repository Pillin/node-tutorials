const express = require('express')
const [nodeName, programName, port, staticPath] = process.argv;

const app = express();
app.use(express.static(staticPath || path.join(__dirname, 'public')));

app.listen(port);
