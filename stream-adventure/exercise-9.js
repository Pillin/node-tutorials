const PORT = 8099;
const URL = 'ws://localhost';
const PHRASE = "hello\n";

const ws = require('websocket-stream');
const stream = ws(`${URL}:${PORT}`);

stream.write(PHRASE);
