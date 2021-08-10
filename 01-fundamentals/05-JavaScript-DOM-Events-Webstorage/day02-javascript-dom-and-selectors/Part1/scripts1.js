// Acesse o elemento elementoOndeVoceEsta .
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'red'


// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.querySelector('#elementoOndeVoceEsta').firstElementChild.innerText = "Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?";


// Acesse o primeiroFilho a partir de pai .
document.querySelector('#pai').firstElementChild

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .

document.querySelector('#elementoOndeVoceEsta').previousElementSibling

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .

document.querySelector('#elementoOndeVoceEsta').parentElement

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .

document.querySelector('#elementoOndeVoceEsta').nextElementSibling

// Agora acesse o terceiroFilho a partir de pai .

document.querySelector('#pai').children[2]

// Crie um irmão para elementoOndeVoceEsta .
document.querySelector('#elementoOndeVoceEsta').nextElementSibling.parentNode.insertBefore(document.createElement('section'),document.querySelector('#elementoOndeVoceEsta'));

// Crie um filho para elementoOndeVoceEsta .
let elementoOnde = document.querySelector('#elementoOndeVoceEsta')
let elemento = document.createElement('section');

elementoOnde.appendChild(elemento);

// Crie um filho para primeiroFilhoDoFilho .
let elementoprimeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho')
let elemento2 = document.createElement('section');

elementoprimeiroFilhoDoFilho.appendChild(elemento2);

// A partir desse filho criado, acesse terceiroFilho .

let filho = elementoprimeiroFilhoDoFilho.firstElementChild

filho.parentNode.parentNode.nextElementSibling



// document.querySelector('#segundoEUltimoFilhoDoFilho').previousElementSibling.insertBefore(document.createElement('section'),document.querySelector('#segundoEUltimoFilhoDoFilho'.previousElementSibling));
