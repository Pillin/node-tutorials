const fs = require("fs");

const run = generator => {
  const go = (err, result) => {
    if (err) return it.throw(err);
    it.next(result);
  };

  const it = generator(go);

  go();
};

run(function*(done) {
  const firstFile;
  try {
    const dirFiles = yield fs.readdir("NoNoNoNo", done); // No such dir
    firstFile = dirFiles[0];
  } catch (err) {
    firstFile = null;
  }

  console.log(firstFile);
});
