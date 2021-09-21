const resolve = require('resolve');

const aleatoryNumbers = async () => {
  const numbers = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50) ** 2
  );

  const sum = numbers.reduce((acc, number) => acc + number);

  if (sum >= 8000) {
    throw new Error();
  }
  return sum;
};

const arrayDivision = async (sum) => {
  const divide = [2, 3, 5, 10];
  const arrayDivided = divide.map((number) => sum / number);
  return arrayDivided.reduce((acc, number) => acc + number);
};

const xyz = async () => {
  try {
    const sum =  await aleatoryNumbers();
    const sumFromSum = await arrayDivision(sum);
    console.log(sumFromSum);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
};

xyz();
