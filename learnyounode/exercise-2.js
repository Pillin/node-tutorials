const [language, programName, ...numbers] = process.argv;
const sumCallback = ( acc, cur ) => parseInt(acc)+parseInt(cur);
const total = numbers.reduce(sumCallback);
console.log(total);