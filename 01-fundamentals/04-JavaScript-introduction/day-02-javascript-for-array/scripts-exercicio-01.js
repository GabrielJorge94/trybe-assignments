// // Exercicio 1  
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 0; index < numbers.length ; index += 1) {
//   console.log (numbers[index]);
// }

// // Exercicio 2 
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sumNumbers = 0;
// for (let i = 0 ; i < numbers.length; i++) {
//   sumNumbers += numbers[i];
// }
// console.log (sumNumbers);

// Exercicio 3
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sumNumbers = 0;
// for (let i = 0 ; i < numbers.length; i++) {
//  averageNumbers = ((sumNumbers += numbers[i])/numbers.length);
// }
// console.log (averageNumbers);

// Exercicio 4
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
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let biggestNumber = 0;
// for (let i = 0 ; i < numbers.length; i++) {
//   if (numbers[i] > biggestNumber) {
//     biggestNumber = numbers [i]
//   }
// }
// console.log(biggestNumber);

// Exercicio 6
let numbers = [2,4,5,7,9];
let oddNumber = [];
for (index = 0; index < numbers.length; index += 1) {
if (numbers[index] % 2 != 0) {
  oddNumber.push(numbers[index]);
} 
}
console.log(oddNumber.length);
