// cor de fundo da tela
window.onload = function(){
let getSelector = document.querySelector('select')
getSelector.addEventListener('change', function(){
  let selected = getSelector.selectedOptions[0];
  document.body.style.backgroundColor = selected.value;
})


}



// getp.addEventListener('click', changeColor);



// cor do texto

// tamanho da fonte 

// espacamento entre as linhas 

// tipo da fonte 
