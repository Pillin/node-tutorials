const zlib = require("zlib");
const tar = require("tar");
const crypto = require("crypto");
const concat = require("concat-stream");

const { stdin, stdout, argv } = process;
const [nodeProgram, fileName, cypherName, cypherPassphrase] = argv;
const CODE = "md5";

const parser = new tar.Parse();
parser.on("entry", entry => {
  const { type, path } = entry;
  if (type !== "File") return entry.resume();

  const h = crypto.createHash(CODE, { encoding: "hex" });
  entry.pipe(h).pipe(
    concat(hash => {
      console.log(hash + " " + path);
    })
  );
});

const stream = crypto.createDecipher(cypherName, cypherPassphrase);

stdin
  .pipe(stream)
  .pipe(zlib.createGunzip())
  .pipe(parser);
