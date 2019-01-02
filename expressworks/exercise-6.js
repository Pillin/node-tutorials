const express = require('express');
const crypto = require('crypto');
const [nodeName, programName, port] = process.argv;

const sha1 = crypto.createHash('sha1');


const app = express();

const updateMessageController = (req, res) => {
	const { id } = req.params;
	const newMessage = sha1.update(new Date().toDateString() + id).digest('hex');
	res.send(newMessage);
};

app.put('/message/:id', updateMessageController);
app.listen(port);