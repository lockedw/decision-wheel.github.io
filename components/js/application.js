const inpDec = document.getElementById("enterDecide");
const decidebutton = document.getElementById("decButton");
const addDec = document.getElementById("addDecide");
let decisionlist = document.querySelector(".inputlar");
let remitem = document.getElementById("removeitem")






let deger = inpDec.value;
let decision1 = document.querySelector(".Karar1")
let decision2 = document.querySelector(".Karar2")
let decision3 = document.querySelector(".Karar3")
let decision4 = document.querySelector(".Karar4")







defid = 1;

eventListeners();
function eventListeners(){
    addDec.addEventListener('click', countClicks);
    remitem.addEventListener('click', remove);
    decidebutton.addEventListener('click', random);
 
}

let clickLimit = 5;



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
        dec.className = `Karar${defid}`
        decision1 = dec;
        decision1.addEventListener("input", function(e){
          console.log(e.target.value);
        })
        defid += 1;
        inpDec.value = "";
}
function remove() {
    
}
const decitions = [decision1,decision2,decision3,decision4];

function random(e) {
    const random = Math.floor(Math.random() * decitions.length);
    console.log(random, decitions[random]);
    let result = document.querySelector(".resultbox").innerHTML=random;
    document.querySelector(".resultbox").innerHTML = decision1
    return(e);
}
