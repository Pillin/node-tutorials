var fs = require('fs');


const [language, programName, fileName] = process.argv;
const content = fs.readFileSync(fileName);
console.log(content.toString().split('\n').length -1);