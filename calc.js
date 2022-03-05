var tekst = document.getElementById("tallVisningsDiv");
var html = {
    tall1: document.getElementById("tall1"),
    tall2: document.getElementById("tall2")
};
var tall = {tall1: 0, tall2: 0}
var operator;
var tallKnappArray = [];
var tallSomSkalVises = 1;

function log() {
    console.log(`Operator: ${operator}\nTall 1: ${tall.tall1}\nTall 2: ${tall.tall2}`);
}

function settIndreTall () {
    html.tall1.innerHTML = String(tall.tall1).replace(".",",");
    html.tall2.innerHTML = String(tall.tall2).replace(".",",");
}

//Setter alle tall knappene i en array og binder en funksjon til dem
for (i = 0; i < 10; i++) {
    tallKnappArray[i] = document.getElementById("k"+String(i));
    tallKnappArray[i].onclick = function () {
        if(tallSomSkalVises == 1) {
            //TODO gjør slik at den autom
            tall.tall2 = 0;
            tall.tall1 = String(tall.tall1) + this.innerHTML;
            if(String(tall.tall1)[0] == 0 && String(tall.tall1)[1] != ".") {
                let tall1String = String(tall.tall1);
                tall1String[0] = "";
                tall.tall1 = tall1String;
            }
        }
        else {
            tall.tall2 = String(tall.tall2) + this.innerHTML;
            if(String(tall.tall2)[0] == 0 && String(tall.tall2)[1] != ".") {
                let tall2String = String(tall.tall2);
                console.log("Boi")
                tall2String[0] = "";
                tall.tall2 = tall2String;
            }
        }
        if(tallSomSkalVises == 1) {
            tekst.innerHTML = String(tall.tall1).replace(".",",");
        }
        else {
            tekst.innerHTML = String(tall.tall2).replace(".",",");
        }
        settIndreTall()
        log();
    }
}



function regneUt() {
    if(String(tall.tall1).includes("^")) {
        let tall1String = String(tall.tall1)
        let tall1Eksponent = Number(tall1String.split("^")[1])
        tall.tall1 = Number(tall1String.split("^")[0])**tall1Eksponent
    }
    if(String(tall.tall2).includes("^")) {
        let tall1String = String(tall.tall1)
        let tall1Eksponent = Number(tall1String.split("^")[1])
        tall.tall2 = Number(tall1String.split("^")[0])**tall1Eksponent
    }
    tall.tall1 = Number(tall.tall1)
    tall.tall2 = Number(tall.tall2)
    switch (operator) {
        case "Pluss":
            tall.tall1 += Number(tall.tall2);
            break;
        case "Minus":
            tall.tall1 -= tall.tall2;
            break;
        case "Gange":
            tall.tall1 = tall.tall1 * tall.tall2;
            break;
        case "Dele":
            tall.tall1 /= tall.tall2;
            break;
    }
    tallSomSkalVises = 1;
    tekst.innerHTML = String(tall.tall1).replace(".",",");
    settIndreTall()
    log();
}


class OperatorKnapp {
    constructor(Navn) {
        this.html = document.getElementById("k"+Navn)
        this.html.onclick = function () {
            operator = Navn;
            tallSomSkalVises = 2;
            tall.tall2 = "";
            log();
        }
    }
}

const plussKnapp = new OperatorKnapp("Pluss");

const minusKnapp = new OperatorKnapp("Minus");

const gangeKnapp = new OperatorKnapp("Gange");

const delingKnapp = new OperatorKnapp("Dele");

const erLikKnapp = document.getElementById("kErLik");
erLikKnapp.onclick = regneUt;

class AnnenKnapp {
    constructor (Navn, Funksjon) {
        this.html = document.getElementById("k"+Navn);
        this.html.onclick = function () {
            
            if(String(tall.tall1).includes("^")) {
                let tall1String = String(tall.tall1)
                let tall1Eksponent = Number(tall1String.split("^")[1])
                tall.tall1 = Number(tall1String.split("^")[0])**tall1Eksponent
            }
            if(String(tall.tall2).includes("^")) {
                let tall1String = String(tall.tall1)
                let tall1Eksponent = Number(tall1String.split("^")[1])
                tall.tall2 = Number(tall1String.split("^")[0])**tall1Eksponent
            }
            if(tallSomSkalVises == 1) {
                Funksjon("tall1");
            }
            else {
                Funksjon("tall2");
            }
            settIndreTall()
        }
    }
}

const slettAltKnapp = new AnnenKnapp("SlettAlt", function () {
    tallSomSkalVises = 1;
    tall.tall2 = 0;
    tall.tall1 = 0;
    tekst.innerHTML = tall.tall1;
    operator = "";
    console.log("Slett alt");
    log();
})

const kvadratrotKnapp = new AnnenKnapp("Kvadratrot", function (index) {
    tall[index] = Math.sqrt(tall[index]);
    tekst.innerHTML = String(tall[index]).replace(".",",");
    if(index == 0) {
        tall[tall2] = 0;
    }
})

const slettEnKnapp = new AnnenKnapp("SlettEn", function (index) {
    tall[index] = Number(String(tall[index]).substring(0,String(tall[index]).length-1));
    tekst.innerHTML = String(tall[index]).replace(".",",");
})

const slettNåverende = new AnnenKnapp("SlettNåverende", function (index) {
    tall[index] = 0;
    tekst.innerHTML = tall[index]
})

const kommaKnapp = new AnnenKnapp("Komma", function (index) {
    if(String(tall[index]).includes(".")) {
        return;
    }
    else {
        tall[index] = String(tall[index])+".";
        tekst.innerHTML = String(tall[index]).replace(".",",");
    }
})

const invertererKnapp = new AnnenKnapp("Inverterer", function (index) {
    tall[index] = Number(tall[index]);
    tall[index] = tall[index] - tall[index]*2;
    tekst.innerHTML = String(tall[index]).replace(".",",");
})
const eksponentKnapp = new AnnenKnapp("Potens", function (index) {
    tall[index] = String(tall[index]) +"^"
})

console.log(tallKnappArray);