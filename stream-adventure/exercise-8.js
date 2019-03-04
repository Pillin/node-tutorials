const URL = "http://localhost";
const PORT = "8099";
const request = require("request");

const { argv, stdin, stdout } = process;

const req = request.post(`${URL}:${PORT}`);

stdin.pipe(req).pipe(stdout);
