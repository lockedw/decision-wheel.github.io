const inpDec = document.getElementById("enterDecide");
const decidebutton = document.getElementById("decButton");
const addDec = document.getElementById("addDecide");
var decisionlist = document.querySelector(".inputlar");
var remitem = document.getElementById("removeitem")






var deger = inpDec.value;
var decision1 = document.querySelector("#Karar1")
var decision2 = document.querySelector("#Karar2")
var decision3 = document.querySelector("#Karar3")
var decision4 = document.querySelector("#Karar4")







defid = 1;

eventListeners();
function eventListeners(){
    addDec.addEventListener('click', countClicks);
    remitem.addEventListener('click', remove);
    decidebutton.addEventListener('click', random)
}

var clickLimit = 5;



function countClicks() {
  if (decisionlist.children.length < clickLimit) {
    addDecide();
  }
  else {
    alert('daha fazla ekleyemezsiniz')
  }
}

function plus(){
    console.log("ads")
}




function addDecide() {

        inputlar = document.querySelector(".inputlar")
        dec = document.createElement("input");
        inputlar.appendChild(dec);
        value = inpDec.value;
        dec.value = value;
        console.log(typeof dec);
        dec.className = `Karar${defid}`
        defid += 1;
        inpDec.value = "";
}
function remove() {
    
}
const decitions = [decision1,decision2,decision3,decision4];

function random(e) {
    const random = Math.floor(Math.random() * decitions.length);
    console.log(random, decitions[random]);
    var result = document.querySelector(".resultbox").innerHTML=random;
    return(e);
}

/* const random = Math.floor(Math.random() * decitions.length);
console.log(random, decitions[random]); */