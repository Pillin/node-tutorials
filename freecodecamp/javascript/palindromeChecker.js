const clean = value => value.toLowerCase().replace(/[^a-z0-9]/g, "");

const palindrome = str => {
  const cleanStr = clean(str);
  for (let index = 0; index < cleanStr.length / 2; ++index) {
    if (cleanStr[index] !== cleanStr[cleanStr.length - 1 - index]) {
      return false;
    }
  }
  return true;
};
