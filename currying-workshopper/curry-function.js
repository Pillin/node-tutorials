const curryFunc = fn => {
  const f = (...args) => {
    const arity = args.length >= fn.length;
    return arity
      ? fn.apply(this, args)
      : (...arr) => f.apply(this, args.concat(arr));
  };
  return f;
};
module.exports = curryFunc;
