// // Exercicio 1
// 1 - definir array numbers ;
// 2 - criar for para percorrer o array ;
// 3 - imprimir todos os valores do array com console.log;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 0; index < numbers.length ; index += 1) {
//   console.log (numbers[index]);
// }

// // Exercicio 2
// 1 - Definir o array ; 
// 2 - Criar variavel para armazenar a soma dos valores da array ;
// 3 - criar for para percorrer os numeros e somar os mesmos ;
// 4 - imprimir o resultado da soma com o console.log ;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sumNumbers = 0;
// for (let i = 0 ; i < numbers.length; i++) {
//   sumNumbers += numbers[i];
// }
// console.log (sumNumbers);

// Exercicio 3'
// 1 - Definir o array ;
// 2 - Definir variavel para guardar a soma dos valores do array ;
// 3 - criar for para percorrer o array ;
// 4 - Define variavel para armazenar a media da soma;
// 5 - Imprime a media; 

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sumNumbers = 0;
// for (let i = 0 ; i < numbers.length; i++) {
//  averageNumbers = ((sumNumbers += numbers[i])/numbers.length);
// }
// console.log (averageNumbers);

// Exercicio 4
// 1 - Definir o array ;
// 2 - Definir variavel para guardar a soma dos valores do array ;
// 3 - criar for para percorrer o array ;
// 4 - Define variavel para armazenar a media da soma;
// 5 - criar if para que se o valor for maior que 20 imprima a mensagem (valor maior que 20) ;
// 6 - Se nao , imprimir a mensagem (valor menor ou igual a 20) ;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sumNumbers = 0;
// for (let i = 0 ; i < numbers.length; i++) {
//  averageNumbers = ((sumNumbers += numbers[i])/numbers.length);
// }
// if (averageNumbers > 20) {
//   console.log ("Valor maior que 20");
// }
// else {
//   console.log("valor menor ou igual a 20")
// }

// // // Exercicio 5
// 1 - Definir array ;
// 2 - Criar variavel para armazenar o valor do maior numero ; 
// 3 - Criar for para percorrer o array ;
// 4 - Criar if para que se o valor da posicao no array for maior a variavel maiornumero, entao definir o maiornumero como esta variavel.
// 5 - Imprimir o valor da variavel maiornumero ; 

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let biggestNumber = 0;
// for (let i = 0 ; i < numbers.length; i++) {
//   if (numbers[i] > biggestNumber) {
//     biggestNumber = numbers [i]
//   }
// }
// console.log(biggestNumber);

// Exercicio 6

// let numbers = [2,4];
// let oddNumber = 0;
// for (index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 != 0) {
//     oddNumber += 1;
//   }
// }

// if (oddNumber === 0) {
//   console.log("Nenhum numero impar");
// }
// else {
//   console.log (oddNumber);
// }



// Exercicio 7

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let smallestNumber = numbers[0];
// for (let i = 1 ; i < numbers.length; i++) {
//   if (numbers[i] < smallestNumber) {
//     smallestNumber = numbers [i];
//   }
// }
// console.log(smallestNumber);

// Exercicio 8

// let numbers = [];

// for (index = 1; index <= 25; index += 1 ) {
//   numbers.push(index);
// }
// console.log (numbers);

// Exercicio 9

// let numbers = 0;
// let numbersHalf = [];
// for (index = 1; index <= 25; index += 1 ) {
//   numbers += 1;
//   numbersHalf.push(numbers*0.5);
// }
// console.log (numbersHalf);