const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function addClass () {
  secondLi.className = "tech";
  if(secondLi.className = "tech"){
    firstLi.className = "";
    thirdLi.className = "";
  }
}

secondLi.addEventListener('dblclick', addClass);

function changeText () {
  let classTech = document.querySelector(".tech")

  classTech.innerText = "TESTE";
  
}

input.addEventListener('input', changeText);

function redirect () {
  window.location.href = "https://gabrieljorge94.github.io/"
}
myWebpage.addEventListener('dblclick',redirect);

function changeColor (){
  myWebpage.style.color = "red";
}
myWebpage.addEventListener('mouseover',changeColor)

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.