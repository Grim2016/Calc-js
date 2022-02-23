var text = document.getElementById("tallVisning");
text.innerHTML = "Halla";

var num1;
var num2;
var operator;
var button_array = [];

function concatinateNumber(number) {}
for(i = 0; i < 10; i++) {
    button_array[i] = document.getElementById("b"+String(i))
    button_array[i].addEventListener("click", concatinateNumber(i))
}
console.log(button_array)