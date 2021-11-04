const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const upperCaseString = (string) => string.toUpperCase();

const getFirstLetterString = (string) => string.charAt(0);

const concatString = (str1, str2) => str1 + str2;

const fetchDogApi = () => fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)));

module.exports = {
  generateRandomNumber,
  upperCaseString,
  getFirstLetterString,
  concatString,
  fetchDogApi,
};
