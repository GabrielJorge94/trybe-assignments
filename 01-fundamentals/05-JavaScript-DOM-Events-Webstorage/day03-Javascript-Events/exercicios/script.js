function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysOfTheMonth(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  
  for(let i = 0; i < dezDaysList.length; i +=1){
    let monthDay = dezDaysList[i]
    let getUl = document.getElementById('days');
    let dayOfTheMonth = document.createElement('li');
    dayOfTheMonth.innerHTML = monthDay;
    if(monthDay === 24|| monthDay === 31 ){
      dayOfTheMonth.className ="day holiday"
    }
    else if(monthDay === 4|| monthDay === 11|| monthDay === 18) {
      dayOfTheMonth.className ="day friday"
    }
    else if(monthDay === 25){
      dayOfTheMonth.className ="day holiday friday"
    }
    else {
    dayOfTheMonth.className ="day"}
    getUl.appendChild(dayOfTheMonth)
    
    
  }
}
createDaysOfTheMonth();

function createButton(Feriados){
  let addButton = document.createElement('button');
  let getDiv = document.querySelector(".buttons-container");
  addButton.innerText = "Feriados";
  addButton.id = "btn-holiday";
  getDiv.appendChild(addButton);

}
createButton('Feriados');


let getButton = document.getElementById('btn-holiday');

function buttonClick (){
  let getUl = document.getElementById("days");
  let getLi = getUl.getElementsByClassName("holiday");
   
  for (let i = 0; i < getLi.length; i+= 1) {
  let holidays = getLi[i];
  
    if(holidays.style.backgroundColor === "red"){
      holidays.style.backgroundColor = "rgb(238, 238, 238)";
     }else{
      holidays.style.backgroundColor = "red";
     }
  }
}
getButton.addEventListener('click', buttonClick);

function fridayButton(){
  let addButtonFriday = document.createElement('button');
  let getDiv = document.querySelector(".buttons-container");
  addButtonFriday.innerText = "Sexta-Feira";
  addButtonFriday.id = "btn-friday";
  getDiv.appendChild(addButtonFriday);
}
fridayButton("Sexta-feira");

let getFridayButton = document.getElementById('btn-friday');
function fridayButtonClick (){
  let getUl = document.getElementById("days");
  let getLi = document.getElementsByClassName("friday");
  let newFriday = "SEXTOU!!!";
  let fridayArray = [4,11,18,25]


  
  for (let i = 0; i < getLi.length; i+= 1) {
  
    if(getLi[i].innerHTML !== newFriday ){
      getLi[i].innerHTML = newFriday;
      } else {
      getLi[i].innerHTML = fridayArray[i];
    }
  }
}
getFridayButton.addEventListener('click', fridayButtonClick);

let days = document.querySelector('#days')

function zoomIn (event){
event.target.style.fontSize = '30px'
}
function zoomOut (event){
  event.target.style.fontSize = '20px'
}

days.addEventListener('mouseover',zoomIn)
days.addEventListener('mouseout', zoomOut)

function addTask(string){
  let getDiv = document.querySelector('.my-tasks');
  let addSpan = document.createElement('span');
  addSpan.innerHTML = string;
  getDiv.appendChild(addSpan);
}
addTask('projeto');

function addColor(cor){
  let getDivPai = document.querySelector('.my-tasks');
  let addDiv = document.createElement('div');
  addDiv.style.backgroundColor = cor ;
  addDiv.id = "color";
  getDivPai.appendChild(addDiv);
}
addColor ('pink');

let getDivCor = document.getElementById('color');

function addNewClass(){
  console.log(getDivCor)
if(getDivCor.className !== "task selected"){
  getDivCor.className = "task selected";
} else {
  getDivCor.className = "task";
  }
}

getDivCor.addEventListener('click', addNewClass);


let nights = document.querySelector('#days')

function legendColor (event){
  if(event.target.style.color !== 'pink'){
  event.target.style.color = 'pink'
  } else {
    event.target.style.color = 'rgb(119,119,119)'
  }
}

days.addEventListener('click', legendColor)



// Escreva seu código abaixo.

