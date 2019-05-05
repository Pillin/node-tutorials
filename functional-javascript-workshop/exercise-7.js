const reduce = (arr, fn, initial) => {
  const newArr = [...arr];
  if (newArr.length === 0) return initial;
  const val = newArr.shift();
  return reduce(newArr, fn, fn(initial, val));
};

module.exports = reduce;
