const split = require("split");
const through2 = require("through2");

const { stdout, stdin } = process;
let value = false;
const func = function(line, encoding, next) {
  const newValue = value
    ? line.toString().toUpperCase()
    : line.toString().toLowerCase();
  this.push(newValue + "\n");
  value = !value;
  next();
};

stdin
  .pipe(split())
  .pipe(through2(func))
  .pipe(stdout);
