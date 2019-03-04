const through = require("through2");
const { argv, stdout, stdin } = process;

const write = function(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
};

const end = function(done) {
  done();
};

const stream = through(write, end);

stdin.pipe(stream).pipe(stdout);
