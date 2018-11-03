const http = require('http');
const urlLibrary = require('url');

const [language, programName, port] = process.argv;

const getDate = (iso) => {
	return new Date(iso);
}

const getParseTime = (date) => {
	return  {
       "hour": date.getHours(),
       "minute": date.getMinutes(),
       "second": date.getSeconds()
    };
};

const getUnixTime = (date) => {
	return {
		"unixtime":  date.getTime()
	};
};

const getValue = {
	'/api/parsetime': getParseTime,
	'/api/unixtime': getUnixTime
}

const server = http.createServer((req, res) => {
	const { method, url } = req;
	res.writeHead(200, { 'Content-Type': 'application/json' });
	const {query, pathname} = urlLibrary.parse(url, true);
	const value = getValue[pathname](query.iso ? getDate(query.iso) : '');
	res.write(JSON.stringify(value));
	res.end();
});


server.listen(Number(port));