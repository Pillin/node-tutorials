const PHRASE_MAX_LENGTH = 50;

const getShortMessages = messages =>
  messages
    .filter(elem => elem.message.length < PHRASE_MAX_LENGTH)
    .map(elem => elem.message);

module.exports = getShortMessages;
