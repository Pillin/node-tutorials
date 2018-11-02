const net = require('net');
const strftime = require('strftime');

const [language, programName, TCP_Port] = process.argv;

const dateFormat = '%F %R';


const server = net.createServer((socket) => {
  const data = strftime(dateFormat, new Date());
  socket.write(`${data}\n`);
  socket.end();
});


server.listen(TCP_Port);
