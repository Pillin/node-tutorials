const streamCombiner = require("stream-combiner");
const through = require("through2");
const split = require("split");
const zlib = require("zlib");

const dicLength = dictionary => Object.keys(dictionary).length;

const bookGroup = () => {
  let grouperBooks = {};
  function end(next) {
    if (dicLength(grouperBooks)) {
      this.push(JSON.stringify(grouperBooks) + "\n");
    }
    next();
  }
  function write(buf, _, next) {
    if (buf.length === 0) return next();
    const data = JSON.parse(buf);
    const { type, name } = data;

    if (type === "genre") {
      if (dicLength(grouperBooks)) {
        this.push(JSON.stringify(grouperBooks) + "\n");
      }

      grouperBooks = { name, books: [] };
    } else if (type === "book") {
      grouperBooks.books.push(name);
    }
    next();
  }

  const grouper = through(write, end);
  return streamCombiner(split(), grouper, zlib.createGzip());
};

module.exports = bookGroup;
