//@prepros-append jq-start.js
//@prepros-append script.js
//@prepros-append jq-end.js

let switchMode = document.getElementById("switchMod");

switchMode.onclick = function () {
	let theme = document.getElementById("theme");

	if(theme.getAttribute("href") == "css/light-mode.css"){
		theme.href = "css/dark-mode.css";
	}else{
		theme.href = "css/light-mode.css";
	}
}

function outputUpdate(speed) {
	var output = document.querySelector("#speed");
	output.value = speed;
	output.style.left = speed * 3.6 - 17 + 'px';
	if(output.value > 9) {
		output.style.left = speed * 3.6 - 25 + 'px';}
	if(output.value > 18) {
		output.style.left = speed * 3.6 - 26.5 + 'px';}
	if(output.value > 27) {
		output.style.left = speed * 3.6 - 28 + 'px';}
	if(output.value > 36) {
		output.style.left = speed * 3.6 - 29.5 + 'px';}
	if(output.value > 45) {
		output.style.left = speed * 3.6 - 31 + 'px';}
	if(output.value > 54) {
		output.style.left = speed * 3.6 - 32.5 + 'px';}
	if(output.value > 63) {
		output.style.left = speed * 3.6 - 34 + 'px';}
	if(output.value > 72) {
		output.style.left = speed * 3.6 - 35.5 + 'px';}
	if(output.value > 81) {
		output.style.left = speed * 3.6 - 37 + 'px';}
	if(output.value > 90) {
		output.style.left = speed * 3.6 - 38.5 + 'px';}
	if(output.value > 99) {
		output.style.left = speed * 3.6 - 47 + 'px';}
}