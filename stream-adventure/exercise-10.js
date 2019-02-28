const trumpet = require('trumpet');
const through = require('through2');
const fs = require('fs');
const tr = trumpet();
const { stdout, stdin } = process;


const stream = tr.select('.loud').createStream();

function write (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
}

stream.pipe(through(write)).pipe(stream);
stdin.pipe(tr).pipe(stdout);