var tekst = document.getElementById("tallVisning");
tekst.innerHTML = "Halla";

var num1;
var num2;
var operator;
var tallKnappArray = [];

//Setter alle tall knappene i en array og binder en funksjon til dem
for(i = 0; i < 10; i++) {
    tallKnappArray[i] = document.getElementById("k"+String(i))
    tallKnappArray[i].onclick = function () {
        console.log(this.innerHTML)
    }
}

var plussKnapp = document.getElementById("kPluss")

var minusKnapp = document.getElementById("kMinus")

var gangeKnapp = document.getElementById("kGange")

var delingKnapp = document.getElementById("kDeling")

console.log(tallKnappArray)