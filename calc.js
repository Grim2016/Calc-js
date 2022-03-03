var tekst = document.getElementById("tallVisning");
tekst.innerHTML = "Halla";

var num1;
var num2;
var operator;
var tallKnappArray = [];

//Setter alle tall knappene i en array og binder en funksjon til dem
for (i = 0; i < 10; i++) {
    tallKnappArray[i] = document.getElementById("k"+String(i))
    tallKnappArray[i].onclick = function () {
        console.log(this.innerHTML)
    }
}

const plussKnapp = document.getElementById("kPluss")
plussKnapp.onclick = function () {
    operator = "Pluss"
}

const minusKnapp = document.getElementById("kMinus")
plussKnapp.onclick = function () {
    operator = "Minus"
}

const gangeKnapp = document.getElementById("kGange")
gangeKnapp.onclick = function () {
    operator = "Gange"
}

const delingKnapp = document.getElementById("kDeling")
delingKnapp.onclick = function () {
    operator = "Deling"
}

console.log(tallKnappArray)