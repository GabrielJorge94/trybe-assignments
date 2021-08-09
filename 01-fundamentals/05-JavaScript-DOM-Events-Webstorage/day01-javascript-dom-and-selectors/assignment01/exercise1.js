document.getElementsByTagName("p")[1].innerText = "muda o texto do p"

document.querySelector(".main-content").style.backgroundColor = ("rgb(76,164,109");

document.querySelector(".main-content .center-content").style.backgroundColor = "white";

document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaScript";


let str = "texto maisculo"
let paragraph = document.getElementsByClassName("pa")

for(let i = 0; i < paragraph.length; i += 1) {
paragraph[i].innerText = "texto maisculo".toUpperCase();
}