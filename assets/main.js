//Main game handler

//VARS====
var coin = document.getElementById('coin')//The only game play in tis project 
var moneydisplay = document.getElementById('money')// Displays the player's current cash
var noti = document.getElementById('noti')// notificaion
var ndescription = document.getElementById('ndescription')// description for notificaion
var nheader = document.getElementById('nheader')//header for notificaion


//Bars for objects
var robotbar = document.getElementById('robotbar')
var personbar = document.getElementById('personbar')



//Non elements
var deg = 0 //stores amount of\ roation coin flips


//INIT

 
 coin.style.animationPlayState = "paused"
//EVENTEARS====
coin.addEventListener('click', addmoney)

//FUNCTIONS====


//Update Function
window.setInterval(update,30)
function update(){
  moneydisplay.innerText = player.money / 100;
  
 
}
// Open notificaion
function notify(header,description){
  noti.style.left = 'calc(100% + 200px)'

  nheader.innerText = header
  ndescription.innerText = description
  noti.style.left = 'calc(100% - 200px)'
setTimeout(closenotify,3000)
}
function closenotify(){
  noti.style.left = 'calc(100% + 200px)'
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

//Buy function
function buy(obj){
  var price = eval( 'parseInt(' +obj + '.price)')
  var value = eval( obj + '.value')
  var name = eval( obj + '.name')
  var wakeup = eval( obj + '.wakeup')
  var max = eval(  'parseInt(' +obj + '.max)')
  var amount = eval(  'parseInt(' +obj + '.amount)') 
  var code = eval( obj + '.code')
  if( player.money >= price * 100){
  

    if(amount == max){
      notify('Cannot Buy','You have reached the limit')
      document.getElementById("buy-bot").style.display = "none !important";
    }else{
      document.getElementById("buy-bot").style.display = "inline-block !important";
    eval(wakeup + "()") 
    player.money = player.money - price * 100
    eval( obj + '.amount += 1') 
    if(amount == 0){
      
      eval(' document.getElementById("' + obj + 'info").innerHTML = ""')
      eval(' document.getElementById("' + obj + 'info").innerHTML =  document.getElementById("' + obj + 'info").innerHTML + ' +"'" + code + "' + '</div>' ")

    } else{
      eval(' document.getElementById("' + obj + 'info").innerHTML =  document.getElementById("' + obj + 'info").innerHTML + ' +"'" + code + "' + '</div>' ")


    }





    }

  }else{
    notify('Cannot Buy','You do not have enough money.')
  }

}

//ONJECT WAKE UPS ======
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
function manageperson(){
   personbar.style.transition = "width 0.9s ease-in-out"
  personbar.style.display = "inline-block"
  personbar.style.width = "90%"
  setTimeout(manageperson2,900)
}
function manageperson2(){
  player.money += Math.round(parseFloat(0.03) * 100);
   personbar.style.transition = "none"
  personbar.style.width = "0%"
  setTimeout(manageperson,100)
}