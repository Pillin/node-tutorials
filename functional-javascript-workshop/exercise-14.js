const repeat = (operation, num) => () => {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) return;
  operation();
  return repeat(operation, --num);
};

const trampoline = (fn) => {
  while (typeof fn === 'function') {
    fn = fn();
  }
  return fn;
};

const wrapperTrampoline = (operation, num) => {
  return trampoline(repeat(operation, num));
};
module.exports = wrapperTrampoline;