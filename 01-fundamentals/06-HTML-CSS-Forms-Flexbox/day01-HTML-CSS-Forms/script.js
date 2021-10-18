let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal']


function CreateStateOptions(array){
  let getSelect = document.getElementById('states');
  for (i = 0; i < array.length; i += 1){
    createState = document.createElement('option');
    getSelect.appendChild(createState);
    createState.innerHTML = array[i];
    createState.value = array[i];
  }
}

function nameValidation (){
  let name = document.querySelector('[name = enterName');
  if(name.value.length > 40 || name.value.length === 0){
    alert('Nome invalido');
  }
}

function emailValidation(){
  let email = document.querySelector('[name = enterEmail]')
  if (email.value.length > 50 || email.value.length === 0){
    alert('Email invalido');
  }
}

function cpfValidation(){
  let cpf = document.querySelector('[name = enterCPF]');
  if (cpf.value.length > 50 || cpf.value.length === 0){
    alert('CPF invalido');
  }
}
function addressValidation(){
  let address = document.querySelector('[name = enterAddress]');
  if (address.value.length > 200 || address.value.length === 0){
    alert('Endereco invalido');
  }
}
function cityValidation(){
  let city = document.querySelector('[name = enterCity]');
  if (city.value.length > 28 || city.value.length === 0){
    alert('Cidade invalida');
  }
}
function StateValidation(){
  let state = document.querySelectorAll('options.value');
  if (state.length !== 28){
    alert('Estado Invalido')
  }
}


function handleSubmition (event){
  event.preventDefault();

  // valida nome
  nameValidation();
  // valida email
  emailValidation();
  // valida CPF
  cpfValidation();
  // valida Endereco
  addressValidation();
  // valida Cidade
  cityValidation();
  // valida estado
  StateValidation();
}

window.onload = function (){
  CreateStateOptions(estados);
  
  document.getElementById('date').DatePickerX.init({
    format : 'dd/mm/yyyy',
    mondayFirst: false,
  });
  
  let getButton = document.querySelector('.button-submit')
  getButton.addEventListener('click', handleSubmition);
}