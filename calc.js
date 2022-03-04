var tekst = document.getElementById("tallVisning");
tekst.innerHTML = " ";
var tall1 = 0;
var tall2 = 0;
var operator;
var tallKnappArray = [];

var nåværendeOperator;
var gamleOperator;

var tallSomSkalVises = 1;

function log() {
    console.log(`Nåværende Operator: ${nåværendeOperator}\nGamle Operator: ${gamleOperator}\nTall 1: ${tall1}\nTall 2: ${tall2}`);
}

//Setter alle tall knappene i en array og binder en funksjon til dem
for (i = 0; i < 10; i++) {
    tallKnappArray[i] = document.getElementById("k"+String(i));
    tallKnappArray[i].onclick = function () {
        if(tallSomSkalVises == 1) {
            tall2 = 0;
            tall1 = Number(String(tall1) + this.innerHTML);
            if(String(tall1)[0] == 0 && String(tall1)[1] != ".") {
                let tall1String = String(tall1);
                tall1String[0] = "";
                tall2 = Number(tall1String);
            }
        }
        else {
            tall2 = Number(String(tall2) + this.innerHTML);
            if(String(tall2)[0] == 0 && String(tall2)[1] != ".") {
                let tall2String = String(tall2);
                tall2String[0] = "";
                tall2 = Number(tall2String);
            }
        }
        if(tallSomSkalVises == 1) {
            tekst.innerHTML = String(tall1).replace(".",",");
        }
        else {
            tekst.innerHTML = String(tall2).replace(".",",");
        }
        log();
    }
}



function regneUt() {
    log()
    switch (gamleOperator) {
        case "Pluss":
            tall1 += Number(tall2);
            break;
        case "Minus":
            tall1 -= tall2;
            break;
        case "Gange":
            tall1 = tall1 * tall2;
            break;
        case "Dele":
            tall1 /= tall2;
            break;
    }
    tallSomSkalVises = 1;
    tekst.innerHTML = String(tall1).replace(".",",");
    log();
}

function operatorFunc () {
    if(nåværendeOperator == gamleOperator) {
        regneUt();
        tallSomSkalVises = 2;
        tall2 = "";
    }
        tallSomSkalVises = 2;
        tall2 = "";

    gamleOperator = nåværendeOperator;
    log();
}

const plussKnapp = document.getElementById("kPluss")
plussKnapp.onclick = function () {
    nåværendeOperator = "Pluss";
    operatorFunc();
}


const minusKnapp = document.getElementById("kMinus");
minusKnapp.onclick = function () {
    nåværendeOperator = "Minus";
    operatorFunc();
}

const gangeKnapp = document.getElementById("kGange");
gangeKnapp.onclick = function () {
    nåværendeOperator = "Gange";
    operatorFunc();
}

const delingKnapp = document.getElementById("kDele");
delingKnapp.onclick = function () {
    nåværendeOperator = "Dele";
    operatorFunc();
}
const erLikKnapp = document.getElementById("kErLik");
erLikKnapp.onclick = function () {
    regneUt();
}

const slettAltKnapp = document.getElementById("kSlettAlt");
slettAltKnapp.onclick = function () {
    tallSomSkalVises = 1;
    tall2 = 0;
    tall1 = 0;
    tekst.innerHTML = " ";
    nåværendeOperator = "";
    gamleOperator = "";
    console.log("Slett alt");
    log();
}
const kvadratrotKnapp = document.getElementById("kKvadratrot");
kvadratrotKnapp.onclick = function () {
    if(tallSomSkalVises == 1) {
        tall1 = Math.sqrt(tall1);
        tekst.innerHTML = String(tall1).replace(".",",");
        tall2 = 0;
    }
    else {
        tall2 = Math.sqrt(tall2);
        tekst.innerHTML = String(tall2).replace(".",",");
    }
    log();
}
const slettEnKnapp = document.getElementById("kSlettEn");
slettEnKnapp.onclick = function () {
    if(tallSomSkalVises == 1) {
        tall1 = Number(String(tall1).substring(0,String(tall1).length-1));
        tekst.innerHTML = String(tall1).replace(".",",");
    }
    else {
        tall2 = Number(String(tall2).substring(0,String(tall2).length-1));
        tekst.innerHTML = String(tall2).replace(".",",");
    }
    log();
}
const kommaKnapp = document.getElementById("kKomma");
kommaKnapp.onclick = function () {
    if(tallSomSkalVises == 1) {
        if(String(tall1).includes(".")) {
            return;
        }
        else {
            tall1 = String(tall1)+".";
            tekst.innerHTML = String(tall1).replace(".",",");
        }
    }
    else {
        if(String(tall2).includes(".")) {
            return;
        }
        else {
            tall2 = String(tall2)+".";
            tekst.innerHTML = String(tall2).replace(".",",");
        }
    }
}
const invertererKnapp = document.getElementById("kInverterer");
invertererKnapp.onclick = function () {
    if(tallSomSkalVises == 1) {
        tall1 = tall1 - tall1*2
        tekst.innerHTML = tall1
    }
    else {
        tall2 = tall2 - tall2*2
        tekst.innerHTML = tall2
    }
    log()
}
console.log(tallKnappArray);