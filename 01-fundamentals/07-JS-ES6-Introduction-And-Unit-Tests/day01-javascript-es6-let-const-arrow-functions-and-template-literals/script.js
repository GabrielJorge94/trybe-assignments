// part1 - 1
// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
//     console.log(ifScope);
//   } else {
//     const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(true);

// part 1 - 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
oddsAndEvens.sort((a, b) => a - b);
// console.log(oddsAndEvens);

// part 2 - 1
const factoral = (number) => {
  let resultado = number;
  for (let i = 1; i < number; i += 1) {
    resultado *= i;
  }
  return resultado
}

// console.log(factoral(5));

// part 2 - 2
// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
const longestWord = (phrase) => {
  const getWords = phrase.split(' ');
  const getBiggerWord = getWords.sort((a,b) => b.length-a.length)[0];
  return getBiggerWord
}
// console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
// part 2 - 3

const getButton = document.getElementById('button');
const getP = document.getElementById('click-counter');
let clickCount = 0;
const countClicks = () => {
  clickCount += 1;
  getP.innerHTML = `O botao foi clickado ${clickCount} vezes`;
}
getButton.addEventListener('click', countClicks);