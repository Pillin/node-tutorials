const fs = require("fs");

const { argv, stdout } = process;
const [program, name, file] = argv;
fs.createReadStream(file).pipe(stdout);
