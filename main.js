var dieImgs = [
  "die1.png",
  "die2.png",
  "die3.png",
  "die4.png",
  "die5.png",
  "die6.png",
];

const clickk=new Audio('diceroll.wav')

alert("HELLO PLAYERS WELCOME !!!");
var promp1 = prompt("Enter the name of player 1 :)");
var promp2 = prompt("Enter the name of player 2 :)");

var p1Name = document.getElementById("prName");
p1Name.innerHTML = "<br />" + "( " + promp1.toUpperCase() + " )";

var p2Name = document.getElementById("prrName");
p2Name.innerHTML = "<br />" + "( " + promp2.toUpperCase() + " )";

var die1Img = document.getElementById("die1Img");
var die2Img = document.getElementById("die2Img");
var msg = document.getElementById("msg");

if(promp1!='')msg.innerHTML=(promp1+' START THE GAME :)').toUpperCase();

var btn = document.getElementById("btn");

function randd() {
  var i = Math.floor(Math.random() * 6);
  return i;
}
var k = 0;
var d = 0;
var ind = 0;
var scr1=0;
var scr2=0;
btn.addEventListener("click", () => {
    clickk.play();
  if (k % 2 == 0) {
    ind = randd() + 1;
    die1Img.src = dieImgs[ind - 1];
    if(promp1!='')msg.innerHTML = ("" + promp1 + " : 0" + ind).toUpperCase();
    if(promp1=='')msg.innerHTML = ("" + "PLAYER 1 : 0" + ind).toUpperCase();
  }
  if (k % 2 != 0) {
    d = randd() + 1;
    if(promp2!='')msg.innerHTML += ("<br /> " + promp2 + " : 0" + d).toUpperCase();
    if(promp2=='')msg.innerHTML += ("<br />" + "player 2 : 0" + d).toUpperCase();
    die2Img.src = dieImgs[d - 1];
    if (ind > d){
        if(promp1!='')
            msg.innerHTML += (" <br />" + promp1 + " is the winner ").toUpperCase();
        if(promp1=='')  msg.innerHTML += (" <br />" + "player 1 is the winner ").toUpperCase();
        scr1++;
    }
    if (ind < d){
      if(promp2!='')msg.innerHTML += (" <br /> " + promp2 + " is the winner ").toUpperCase();
      if(promp2=='') msg.innerHTML += (" <br />" + "player 2 is the winner ").toUpperCase();
      scr2++
    }
    if (ind == d) 
      msg.innerHTML += ("<br />" + "game draw !!!").toUpperCase();
  }
  k++;
});

var bte = document.getElementById('bte')
bte.addEventListener('click',()=>{
  btn.style.display='none'
  msg.innerHTML="RESULT : <br /> ";
  if(promp1!='')msg.innerHTML += ("" + promp1 + " : 0" + ind).toUpperCase();
  if(promp1=='')msg.innerHTML += ("" + "PLAYER 1 : 0" + ind).toUpperCase();
  if(promp2!='')msg.innerHTML += ("<br /> " + promp2 + " : 0" + d).toUpperCase();
  if(promp2=='')msg.innerHTML += ("<br />" + "player 2 : 0" + d).toUpperCase();
  if(scr1>scr2){
    if(promp1!='') msg.innerHTML += (" <br />" + promp1 + " is the LUCKIEST ").toUpperCase();
    if(promp1=='')  msg.innerHTML += (" <br />" + "player 1 is the LUCKIEST ").toUpperCase();
  }
  else if(scr2>scr1){
    if(promp2!='')msg.innerHTML += (" <br /> " + promp2 + " is the LUCKIEST ").toUpperCase();
    if(promp2=='') msg.innerHTML += (" <br />" + "player 2 is the LUCKIEST ").toUpperCase();
  }
  else msg.innerHTML += ("<br />" +"BOTH ARE EQUALLY LUCKY !!!").toUpperCase();

  bte.innerText='PLAY AGAIN BY RELOADING THE PAGE :)'
  bte.style.background='none'
  bte.style.border='none'

})
