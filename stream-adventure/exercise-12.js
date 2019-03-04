const { spawn } = require("child_process");
const duplexer = require("duplexer2");
const through = require("through2").obj;

const counterd = counter => {
  let counts = {};
  const conf = {
    objectMode: true
  };
  function write(row, _, next) {
    const { country } = row;
    counts[country] = (counts[country] || 0) + 1;
    next();
  }
  function end(done) {
    counter.setCounts(counts);
    done();
  }
  return duplexer(conf, through(write, end), counter);
};

module.exports = counterd;
