const inpDec = document.getElementById("enterDecide");
const decidebutton = document.getElementById("decButton");
const addDec = document.getElementById("addDecide");

addDec.addEventListener('click', function(){
    console.log("ads")
});




event1 = "emo";
event2 = "erdal";


const decitions = [event1,event2];




const random = Math.floor(Math.random() * decitions.length);
console.log(random, decitions[random]);