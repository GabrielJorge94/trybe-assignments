const generateRandomNumber = () => {
  return Math.floor(Math.random() * (100 - 0));
};

module.exports = { generateRandomNumber };