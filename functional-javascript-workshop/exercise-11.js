const arrayMap = (arr, fn) =>
  arr.reduce((acc, value) => {
    acc.push(fn(value));
    return acc;
  }, []);

module.exports = arrayMap;
