const inpDec = document.getElementById("enterDecide");
const decidebutton = document.getElementById("decButton");
const addDec = document.getElementById("addDecide");
var decisionlist = document.querySelector(".inputlar");
var deger = inpDec.value;

eventListeners();







function eventListeners(){
    addDec.addEventListener('click', countClicks);
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





function addDecide() {

        inputlar = document.querySelector(".inputlar")
        dec = document.createElement("input");
        inputlar.appendChild(dec);
        value = inpDec.value;
        dec.value = value;
        console.log(typeof dec);
        
        
        dec.className = `Karar${defid}`



        inpDec.value = "";
}



event1 = "emo";
event2 = "erdal";
event3 = "arda"





const decitions = [event1,event2,event3];
const random = Math.floor(Math.random() * decitions.length);
console.log(random, decitions[random]);