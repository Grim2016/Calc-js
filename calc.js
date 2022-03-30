const root = document.querySelector(":root");
const fargeVelger = document.getElementById("fVelger");
const fargeBekrefter = document.getElementById("fBekrefter");
fargeBekrefter.onclick = () => {
    console.log("Farge")
    root.style.setProperty("--hoved-farge", fargeVelger.value)
}
const fargeReset = document.getElementById("fReset");
fargeReset.onclick = () => {
    root.style.setProperty("--hoved-farge", "#d4c8ff")
}
const tekst = document.getElementById("tallVisningsDiv");
var html = {
    tall1: document.getElementById("tall1"),
    tall2: document.getElementById("tall2")
};
var tall = {tall1: "0", tall2: "0"}
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
            tall.tall2 = 0;
            tall.tall1 = String(tall.tall1) + this.innerHTML;
            console.log("1")
            if(String(tall.tall1)[0] == 0 && String(tall.tall2).length != 0 && String(tall.tall1)[1] != ".") {
                let tall1String = String(tall.tall1);
                console.log("Boi1");
                tall1String = tall1String.substring(1);
                console.log(tall1String);
                console.log(tall.tall2.length)
                tall.tall1 = tall1String;
            }
        }
        else {
            console.log("tall2");
            tall.tall2 = String(tall.tall2) + this.innerHTML;
            if(String(tall.tall2)[0] == 0 && String(tall.tall2).length != 0 && String(tall.tall2)[1] != ".") {
                let tall2String = String(tall.tall2);
                console.log("Boi2");
                tall2String = tall2String.substring(1);
                console.log(tall2String);
                console.log(tall.tall2.length)
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

function eksponentRegning() {
    //Sjekker om tall1 inneholder eksponent
    if(String(tall.tall1).includes("^")) {
        let tall1String = String(tall.tall1)
        let tall1Eksponent = Number(tall1String.split("^")[1])
        tall.tall1 = Number(tall1String.split("^")[0])**tall1Eksponent
    }
    //Sjekker om tall2 inneholder eksponent
    if(String(tall.tall2).includes("^")) {
        let tall1String = String(tall.tall1)
        let tall1Eksponent = Number(tall1String.split("^")[1])
        tall.tall2 = Number(tall1String.split("^")[0])**tall1Eksponent
    }
}

function regneUt() {
    eksponentRegning();
    //Sikrer at tallene er tall
    tall.tall1 = Number(tall.tall1);
    tall.tall2 = Number(tall.tall2);
    
    //Utfører matematisk operasjon ut i fra hvilken operator som er valgt
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
    settIndreTall();
    log();
}

//Lager standard klasse for operatorknappene
class OperatorKnapp {
    constructor(Navn) {
        //Henter html elementet ut i fra navnet du har satt inn
        this.html = document.getElementById("k"+Navn)

        this.html.onclick = function () {
            operator = Navn;
            tallSomSkalVises = 2;
            tall.tall2 = "0";
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

//Lager standard klasse for alle de andre knappene som utfører funksjonen ut i fra hvilket tall som skal vises
class AnnenKnapp {
    constructor (Navn, Funksjon) {
        //Henter html elementet ut i fra navnet du har satt inn
        this.html = document.getElementById("k"+Navn);
        this.html.onclick = function () {
            
            eksponentRegning();

            if(tallSomSkalVises == 1) {
                Funksjon("tall1");
            }
            else {
                Funksjon("tall2");
            }
            settIndreTall()
        }
        console.log(this.html)
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

const rotKnapp = new AnnenKnapp("Rot", function (index) {
    tall[index] = tall[index]**(1/document.getElementById("RotInn").value);
    tekst.innerHTML = String(tall[index]).replace(".",",");
    if(index == 0) {
        tall[tall2] = 0;
    }
})
const slettEnKnapp = new AnnenKnapp("SlettEn", function (index) {
    tall[index] = String(tall[index]).substring(0,String(tall[index]).length-1);
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