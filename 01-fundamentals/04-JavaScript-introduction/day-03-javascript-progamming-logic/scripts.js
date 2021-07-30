// criar valor para n
// n maior que 1
// imprimir um quadrado feito de * de lado = n

// criar variavel n

let n = 5;
let asterico = "*";
// verificar condicao n maior que 1

if (n > 1) {

// cria for para repeticao lados do quadrado

  for (i = 1 ; i <= n; i += 1) {
    asterico = '*'.repeat(n);
    console.log(asterico);
  }
}




