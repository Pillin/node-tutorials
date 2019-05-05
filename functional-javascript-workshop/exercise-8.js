const duckCount = (...args) =>
  args.filter(elem => Object.prototype.hasOwnProperty.call(elem, "quack"))
    .length;

module.exports = duckCount;
