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


//Tutorial
var rev_tut = true;
var rev_tut2 = true;
var rev_tut3 = true;
var rev_tut4 = true;
var rev_tut5 = true;
var rev_tut6 = true;



//EVENTEARS====
coin.addEventListener('click', function(){
	if(rev_tut2){
		rev_tut2 = false;
		setTimeout(function(){
			notify('Tutorial', 'Keep flipping coins until you reach $1.')
		}, 2000)
	}
	addmoney();
})

coin.addEventListener('contextmenu', function(){
	if(rev_tut2){
		rev_tut2 = false;
		setTimeout(function(){
			notify('Tutorial', 'Keep flipping coins until you reach $1.')
		}, 2000)
	}
	addmoney();
})

//FUNCTIONS====


//Update Function
window.setInterval(update,30)
function update(){
  moneydisplay.innerText = player.money / 100;
	if(player.money > 99 && rev_tut3 == true){
		rev_tut3 = false;
		setTimeout(function(){
			notify('Tutorial', 'Now, buy a robot to flip for you!')
		}, 1000)
	}
	if(player.money > 199 && rev_tut5 == true && rev_tut3){
		rev_tut5 = false;
		setTimeout(function(){
			notify('Tutorial', 'Now, hire a person!')
			setTimeout(function(){
				notify('Tutorial', 'People cost more but are better.')
			}, 1000)
		}, 1000)
		
	}
	if(person.amount > 0 && robot.amount > 0  && rev_tut6){
		rev_tut6 = false;
		setTimeout(function(){
			notify('Tutorial', 'Great! 5 humans is the max.')
			setTimeout(function(){
				notify('Tutorial', 'You\'ve unlocked the R&D Center!')
				setTimeout(function(){
					notify('Tutorial', 'Press \'Go Back\' to view it!')
					shopbtn.disabled = false
  				shopbtn.classList.remove('disabled')
				}, 2000)
			}, 2000)
		}, 1000)
	}
}
// Open notificaion
function notify(header,description,flip = true){
  noti.style.right = 'calc(100% + 300px)'

  nheader.innerText = header
  ndescription.innerText = description
  noti.style.left = 'calc(100% - 300px)'
  if(flip == true){
setTimeout(closenotify,3000)
  }
}
function closenotify(){
  noti.style.left = 'calc(100% + 300px)'
}
//Player click handler
function addmoney(){
  player.money = Math.round(parseFloat(player.money) + parseFloat(player.clickvalue) * 100);
	deg += 360
	coin.style.transform = "rotateX(" + deg + "deg)"
  setTimeout(reset,2000)
	return false;
}
 
//Reset Coin Styleing
function reset(){ 
   coin.src = player.icon;
   
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
      notify('Cannot Buy','You have reached the limit', true)
      document.getElementById("buy-bot").style.display = "none !important";
    }
		else{
				document.getElementById("buy-bot").style.display = "inline-block !important";
			eval(wakeup + "()") 
			player.money = player.money - price * 100
			eval( obj + '.amount += 1') 
			if(amount == 0){
				
				eval(' document.getElementById("' + obj + 'info").innerHTML = ""')
				eval(' document.getElementById("' + obj + 'info").innerHTML =  document.getElementById("' + obj + 'info").innerHTML + ' +"'" + code + "' + '</div>' ")

			} 
			else{
				eval(' document.getElementById("' + obj + 'info").innerHTML =  document.getElementById("' + obj + 'info").innerHTML + ' +"'" + code + "' + '</div>' ")


			}
    }
  }
	else{
    notify('Cannot Buy','You do not have enough money.')
		return;
  }
	if(rev_tut4){
		rev_tut4 = false;
		setTimeout(function(){
			notify('Tutorial', 'Great! 10 robots is the max.')
			setTimeout(function(){
				notify('Tutorial', 'Now, flip until you are at $2.')
			}, 1000)
		}, 1000)
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

notify('Tutorial', 'Welcome to the CEO Dashboard', true)
setTimeout(function(){
	compbtn.disabled = false
  compbtn.classList.remove('disabled')
	notify('Tutorial', 'First, click on Revenue Management')
}, 4000)