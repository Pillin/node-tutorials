const countWords = inputWords =>
  inputWords.reduce((acc, val) => {
    acc[val] = !acc[val] ? 0 : acc[val];
    acc[val] += 1;
    return acc;
  }, {});

module.exports = countWords;
