let total = 0;
const longDelay = value => {
  if (typeof value === "undefined") return total;
  total += value;
  return longDelay;
};

module.exports = longDelay;
