//Main game handler

//VARS====
var coin = document.getElementById('coin')//The only game play in tis project 
var moneydisplay = document.getElementById('money')// Displays the player's current cash
var robotbar = document.getElementById('robotbar')

//Non elements
var deg = 0 //stores amount of\ roation coin flips


//INIT

  managerobot()//DEBUG
 coin.style.animationPlayState = "paused"
//EVENTEARS====
coin.addEventListener('click', addmoney)

//FUNCTIONS====


//Update Function
window.setInterval(update,30)
function update(){
  moneydisplay.innerText = player.money / 100;
  
 
}

//Player click handler
function addmoney(){
  player.money = Math.round(parseFloat(player.money) + parseFloat(player.clickvalue) * 100);
deg += 360
coin.style.transform = "rotateX(" + deg + "deg)"
 
  setTimeout(reset,2000)
}
 
//Reset Coin Styleing
function reset(){ 
   coin.src = "./assets/img/1.png"
   
}

//DEBUG
function managerobot(){
   robotbar.style.transition = "width 0.9s ease-in-out"
  robotbar.style.display = "inline-block"
  robotbar.style.width = "90%"
  setTimeout(managerobot2,900)
}
function managerobot2(){
  player.money += Math.round(parseFloat(0.01) * 100);
   robotbar.style.transition = "none"
  robotbar.style.width = "0%"
  setTimeout(managerobot,100)
}
