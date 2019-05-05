const logger = namespace => (...args) => {
  console.log.apply(null, [namespace].concat(args));
};

module.exports = logger;
