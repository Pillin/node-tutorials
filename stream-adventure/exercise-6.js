const concat = require("concat-stream");

const { stdout, stdin } = process;

const reverseWords = body => {
  console.log([...body.toString()].reverse().join(""));
};

stdin.pipe(concat(reverseWords));
