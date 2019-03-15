const PHRASE_MAX_LENGTH = 50;

const getShortMessages = messages =>
  messages.filter(elem => elem.length > PHRASE_MAX_LENGTH);

module.exports = getShortMessages;
