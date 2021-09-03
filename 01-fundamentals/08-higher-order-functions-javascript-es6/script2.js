const newDraw = (number, func) => {
  let numbers = Math.floor(Math.random() * (5 - 1) + 1);
  return callback(numbers, number);
}

const callback = (number1, number2) => {
  return number1 === number2 ? "Parabéns você ganhou" : "Tente novamente"
}

console.log(newDraw(3, callback));