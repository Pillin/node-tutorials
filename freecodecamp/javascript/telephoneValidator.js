const regex = /^[0-9]{0,1}[\s]?\([0-9]{3}\)|[0-9]{3}\s?[-]?[0-9]{3}\s?[|-]?[0-9]{4}$/;

const telephoneCheck = str => {
  return regex.test(str);
};
