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
CreateStateOptions(estados);