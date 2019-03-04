const http = require("http");
const fs = require("fs");
const through = require("through2");

const [nodeProgram, fileName, port] = process.argv;

const server = http.createServer((req, res) => {
  const { method, pipe } = req;

  function write(buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
  }

  req.pipe(through(write)).pipe(res);
});

server.listen(port);
