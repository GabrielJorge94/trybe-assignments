// Exercicio 01 - 

// let palindrome = "arara";
// let joinArray = "";
// function verificaPalindrome(string) {
//   var splitString = string.split (""); 
//   var reverseArray = splitString.reverse();
//   var joinArray = reverseArray.join("")

//   if (joinArray === string) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// console.log(verificaPalindrome("arara"));
// console.log(verificaPalindrome("desenvolvimento"));


// Exercicio 02 - 

// let teste = [2, 3, 6, 7, 10, 1];
// 
// function maiorIndice () {
  // let maior = 0;
  // for ( i = 0 ; i < teste.length ; i += 1) {
    // if (teste[i] > teste[maior]) {
      // maior = i;
    // }
    // 
  // }
  // return maior
// }
// console.log(maiorIndice (teste));

// Exercicio 03 - 

let teste = [2, 4, 6, 7, 10, 0, -3];

function menorIndice () {
  let menor = 0;
  for ( i = 0 ; i < teste.length ; i += 1) {
    if (teste[i] < teste[menor]) {
      menor = i;
    }
    
  }
  return menor
}
console.log(menorIndice (teste));