const spies = (target, method) => {
  const result = {
    count: 0
  };
  var oldFunction = target[method];
  target[method] = (...args) => {
    result.count += 1;
    return oldFunction.apply(target, args);
  };

  return result;
};

module.exports = spies;
