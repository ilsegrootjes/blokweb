// JavaScript Document
var deButton = document.querySelector(".menuIcoon");
var menu = document.querySelector(".menu");


function doeMenuOpen(){
	menu.classList.toggle("menuOpen");
}

deButton.addEventListener("click", doeMenuOpen);