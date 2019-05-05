const crypto = require("crypto");

const ALGORITHM = "aes256";
const { stdin, stdout, argv } = process;
const [nodeProgram, fileName, passphrase] = argv;

const stream = crypto.createDecipher(ALGORITHM, passphrase);
stdin.pipe(stream).pipe(stdout);
