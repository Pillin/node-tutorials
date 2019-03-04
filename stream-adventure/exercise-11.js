const { spawn } = require("child_process");
const duplexer = require("duplexer2");

const duplexPipe = (cmd, args) => {
  const proccess = spawn(cmd, args);
  const { stdin, stdout } = proccess;
  return duplexer(stdin, stdout);
};

module.exports = duplexPipe;
