const resolve = require('resolve');

const aleatoryNumbers = () => {
  const numbers = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50) ** 2
  );
  return numbers.reduce((acc, number) => acc + number );
};

const promise = new Promise((resolve, reject) => {
  const numbers = aleatoryNumbers();
  if (numbers < 8000) {
    const divide = [2, 3, 5, 10];
    const arrayDivision = divide.map((number) => numbers / number);
    return resolve(arrayDivision);
  }
  return reject('É mais de oito mil! Essa promise deve estar quebrada!');
})
  .then((resolve) => resolve)
  .then((array) => console.log(array.reduce((acc, number) => acc + number)))
  .catch((reject) => console.log(reject));
