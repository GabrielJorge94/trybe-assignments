const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

console.log(generateRandomNumber());

const upperCaseString = (string) => string.toUpperCase();

const getFirstLetterString = (string) => string.charAt(0);

const concatString = (str1, str2) => str1 + str2;

module.exports = {
  generateRandomNumber,
  upperCaseString,
  getFirstLetterString,
  concatString,
};
