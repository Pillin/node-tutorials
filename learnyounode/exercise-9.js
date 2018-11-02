const async = require("async");
require('isomorphic-fetch');

const [language, programName, ...urls] = process.argv;

async.mapLimit(urls, 1, async function(url) {
	const response = await fetch(url);
    return await response.text();
}, (err, results) => {
    if (err) throw err;
    results.map(value => console.log(value));
})