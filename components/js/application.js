const inpDec = document.getElementById("enterDecide");
const decidebutton = document.getElementById("decButton");
const addDec = document.getElementById("addDecide");
var deger = inpDec.value;

eventListeners();







function eventListeners(){
    addDec.addEventListener('click', addDecide);
}







function addDecide() {

        inputlar = document.querySelector(".inputlar")
        dec = document.createElement("input");
        inputlar.appendChild(dec);
        value = inpDec.value;
        dec.value = value;
        console.log(typeof dec);
        inpDec.value = "";
}



event1 = "emo";
event2 = "erdal";
event3 = "arda"





const decitions = [event1,event2,event3];
const random = Math.floor(Math.random() * decitions.length);
console.log(random, decitions[random]);