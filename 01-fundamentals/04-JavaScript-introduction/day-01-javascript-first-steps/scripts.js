// let a = 5;
// let b = 10; 

// console.log ('Soma: ' + (a+b));
// console.log ('Subtracao: ' + (a-b));
// console.log ('Multiplicacao: ' + (a*b));
// console.log ('Divisao: ' + (a/b));
// console.log ('Modulo: ' + (a%b));


// // refatora usando funcoes
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(10,8));

// function sub(a, b) {
//   return a - b;
// }

// console.log(sub(10,8));

// function mult(a, b) {
//   return a * b;
// }

// console.log(mult(10,8));

// function div(a, b) {
//   return a / b;
// }

// console.log(div(10,8));

// function mod(a, b) {
//   return a % b;
// }

// console.log(mod(10,8));

// let a = 5;
// let b = 5;

// if (a>b) {
//   console.log (a);
// }
// else if (a === b) {
//   console.log ("Valores iguais")
// }
// else {
//   console.log (b);
// }

// let a = 8;
// let b = 9;
// let c = 7;

// if (a>b && a>c) {
//   console.log ("O maior numero e: " + a + " a");
// }

// else if (b>a && b>c) {
//   console.log ("O maior numero e: " + b + " b");
// }

// else {
//   console.log ("O maior numero e: " + c + " c")
// }

// let a = 0;

// if (a >0) {
//   console.log ("positive");
// }
// else if (a <0) {
//   console.log ("negative");
// }
// else {
//   console.log ("zero");
// }

// let angleA = -2;
// let angleB = 25;
// let angleC = 130;

// let sumAngles = angleA + angleB + angleC;
// let anglesPositive = angleA > 0 && angleB > 0 && angleC > 0;

// if (anglesPositive) {
//   if (sumAngles === 180) {
//     console.log ("true");
//   } 
//   else {
//     console.log ("false");
//   }
// }
// else {
//   console.log ("erro")
// }

// let chessPiece = "pawn"

// switch (chessPiece.toLocaleLowerCase()) {
//   case 'king':
//     console.log ("The King moves from its square to a neighboring square");
//     break;
//   case 'rokk':
//     console.log ("the Rook can move in its line or row");
//     break;
//   case 'bishop':
//     console.log ("the Bishop moves diagonally");
//     break;
//   case 'queen':
//     console.log ("the Queen may move like a Rook or a Bishop");
//     break;
//   case 'knight':
//     console.log ("the Knight jumps in making the shortest move that is not a straight one")
//     break;
//   case 'pawn':
//     console.log ('the Pawn moves one square straight ahead')
//     break;
//   default:
//     console.log ("Error - invalid piece");
// }


// let notaDada = 1;
// let notaValida = notaDada < 100 && notaDada >0; 

// if (notaValida) {
// if (notaDada >= 90) {
//   console.log ("conceito A");
// }
// else if (notaDada >= 80 && notaDada < 90) {
//   console.log ("conceito B");
// }
// else if (notaDada >= 70 && notaDada < 80) {
//   console.log ("conceito C");
// }
// else if (notaDada >= 60 && notaDada < 70) {
//   console.log ("conceito D");
// }
// else if (notaDada >= 50 && notaDada <60) {
//   console.log ("conceito E");
// }
// else if (notaDada <50) {
//   console.log ("conceito F");
// }
// }
// else {
//   console.log ("Erro - nota invalida");
// }

// let num1 = 3;
// let num2 = 7;
// let num3 = 9;

// if ((num1 % 2 ===0) || (num2% 2 ===0) || (num3% 2 ===0) ) {
//   console.log ("True");
// }
// else {
//   console.log ("False");
// }

// let custoProduto = 100;
// let valorVendaProduto = 200;

// let lucro = (valorVendaProduto - (custoProduto*(120/100)))

// if (custoProduto < 0 || valorVendaProduto <0) {
//   console.log ("Erro - valor invalido");
// }
// else {
//   console.log (lucro);
// }

// let salarioBruto = 16000;
// let descontaInss;
// let descontaIr;

// // INSS
// let inss8 = (8/100);
// let inss9 = (9/100);
// let inss11 = (11/100);
// let inssMax = 570.88;
// // IR
// let ir0 = 0;
// let ir75 = (7.5/100);
// let ir15 = (15/100);
// let ir225 = (22.5/100);
// let ir275 = (27.5/100);



// if (salarioBruto <= 1556.94) {
//   descontaInss = (salarioBruto*inss8);
//   console.log ("O valor de Inss a descontar e: " + descontaInss);
// }
// else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
//   descontaInss = (salarioBruto*inss9);
//   console.log("O valor de Inss a descontar e: " + descontaInss);
// }
// else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
//   descontaInss = (salarioBruto*inss11);
//   console.log("O valor de Inss a descontar e: " + descontaInss);
// }
// else {
//   descontaInss = inssMax;
//   console.log("O valor de Inss a descontar e: " + descontaInss);
// }

// let salarioBase = salarioBruto - descontaInss;

// console.log("O salario base e: " + salarioBase);

// if (salarioBase <= 1903.98) {
//   descontaIr = 0;
//   console.log ("O valor de IR a descontar e: " + descontaIr);
// }
// else if (salarioBase >= 1903.99 && salarioBase <= 2826.65 ) {
//   descontaIr = (salarioBase*ir75)- 142.80;
//   console.log ("O valor de IR a descontar e: " + descontaIr);
// }
// else if (salarioBase >= 2826.66 && salarioBase <= 3751.05 ) {
//   descontaIr = (salarioBase*ir15)- 354.80;
//   console.log ("O valor de IR a descontar e: " + descontaIr);
// }
// else if (salarioBase >= 3751.06 && salarioBase <= 4664.68 ) {
//   descontaIr = (salarioBase*ir225)- 636.13;
//   console.log ("O valor de IR a descontar e: " + descontaIr);
// }
// else {
//   descontaIr = (salarioBase*ir275)- 869.36;
//   console.log ("O valor de IR a descontar e: " + descontaIr);
// }

// let salarioLiquido = salarioBase - descontaIr;
// console.log ("O salario liquido e: " + salarioLiquido);
