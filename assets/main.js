//Main game handler

//VARS====
var coin = document.getElementById('coin')//The only game play in tis project 
var moneydisplay = document.getElementById('money')// Displays the player's current cash
var moneydisplayshop = document.getElementById('moneyshop')// Displays the player's current cash in the RDC
var noti = document.getElementById('noti')// notificaion
var ndescription = document.getElementById('ndescription')// description for notificaion
var nheader = document.getElementById('nheader')
var itemdivs = document.getElementById('itemdivs')//Rev management items
var subtractWallet = document.getElementById('subtractWallet') // Shop message under wallet
var clicks = document.getElementById('clicks') // Displays how many times you clicked/flips
//header for notificaion
//AUDIO VARS ========
var notifSound = new Howl({
  src: ['assets/audio/notif.wav']
});
var coinSound = new Howl({
  src: ['assets/audio/coin.wav']
});
var robotBuySound = new Howl({
  src: ['assets/audio/robot.wav']
});
var personBuySound = new Howl({
  src: ['assets/audio/people.mp3']
});
var bottleflipBuySound = new Howl({
  src: ['assets/audio/bottleflip.mp3']
});
var ecoflipperBuySound = new Howl({
  src: ['assets/audio/ecoflipper.mp3']
});
var upgradeBuySound = new Howl({
  src: ['assets/audio/purchased.wav']
});
var menuSound = new Howl({
  src: ['assets/audio/slide.mp3']
});





//DEBUG
function m(){
	skipTutorial()
	player.money = 999999;
	return 'no u'
}



//Non elements
var deg = 0 //stores amount of\ roation coin flips
var customers = 0 //Stores amount of clicks / customers

// Other VARS
var buy_mk2 = true;
var nickel_upgrade = false;
var buy_workers_mk2 = true;
var eco_mk2 = false;
var bottle_mk2 = false;

//Tutorial============
var rev_tut_0 = true;
var rev_tut = true;
var rev_tut2 = true;
var rev_tut3 = true;
var rev_tut4 = true;
var rev_tut5 = true;
var rev_tut6 = true;
var rev_tut7 = true;

function skipTutorial(){
	rev_tut_0 = false;
	rev_tut = false;
	rev_tut2 = false;
	rev_tut3 = false;
	rev_tut4 = false;
	rev_tut5 = false;
	rev_tut6 = false;
	rev_tut7 = false;
	shopbtn.disabled = false
	shopbtn.classList.remove('disabled')
	compbtn.disabled = false
	compbtn.classList.remove('disabled')
	document.getElementById("skip-tut").style.display = "none";
	fadeIn(document.getElementById('robotcard'))
	fadeIn(document.getElementById('personcard'))
	closenotify()
}

//EVENTEARS====
coin.addEventListener('click', function(){
	if(rev_tut2){
		rev_tut2 = false;
		setTimeout(function(){
			notify('Tutorial', 'Keep flipping coins until you reach $1.')
		}, 2000)
	}
	addmoney();
	var temp = Math.floor(Math.random() * 4) + 1  
	coinSound.rate(temp)
	coinSound.play()
})

coin.addEventListener('contextmenu', function(){ coin.click() })

//FUNCTIONS====

// Next Stage Function
function nextstage(newMoney){
	stage += 1
	player.clickvalue = newMoney;
	items.forEach(function(item){
		if(item.unlock == stage){
			itemdivs.innerHTML = itemdivs.innerHTML + item.cardcode
		player.icon = "./assets/img/" + stage + ".png"
		reset()
	
		}
	}
	
	)}
//Update Function
window.setInterval(update,200)
function update(){
  moneydisplay.innerText = '$' + player.money / 100;
  moneydisplayshop.innerText = '$' + player.money / 100;
  clicks.innerText = customers



  //TUTORIAL 
	if(player.money > 99 && rev_tut3 == true){
		rev_tut3 = false;
		setTimeout(function(){
			notify('Tutorial', 'Now, buy a robot to flip for you!')
			fadeIn(document.getElementById('robotcard'))
		}, 1000)
	}
	if(player.money > 199 && rev_tut5 == true){
		rev_tut5 = false;
		setTimeout(function(){
			notify('Tutorial', 'Now, hire a person!')
			fadeIn(document.getElementById('personcard'))
			setTimeout(function(){
				notify('Tutorial', 'People cost more but are better.')
			}, 4000)
		}, 1000)
	}
	if(ecoflipper.amount > 0 && eco_mk2){
		eco_mk2 = false;
		createShopItem("eco-mk-2", "Giant Fans", "Buy mega-fans to", "manipulate the wind", "so that eco-flippers", "flip more coins.", 50);
	}
  if(person.amount > 0 && bottle_mk2){
		bottle_mk2 = false;
		createShopItem("bottle-mk2", "Bigger Bottles", "Koka-Kola™ bottles are", "bigger, resulting in", "lots of free space", "to hold more coins.", 100)
	}
	if(robot.amount > 0 && buy_mk2){
		buy_mk2 = false;
		createRobotMk2()
	}

	if(person.amount > 0 && buy_workers_mk2){
		buy_workers_mk2 = false;
		createShopItem("one-man-army", "Efficient Workers", "Better salaries lead", "to better workers.", "Workers can flip", "5¢ every second.", 12);
	}

	if(person.amount > 0 && robot.amount > 0  && rev_tut6){
		rev_tut6 = false;
		setTimeout(function(){
			notify('Tutorial', 'Great! You can hire up to 5 workers.')
			setTimeout(function(){
				notify('Tutorial', 'You\'ve unlocked the R&D Center!')
				setTimeout(function(){
					notify('Tutorial', 'Press \'Go Back\' to view it!')
						document.getElementById("skip-tut").style.display = "none";
					shopbtn.disabled = false
  				shopbtn.classList.remove('disabled')
				}, 3000)
			}, 5000)
		}, 3000)
	}

	noti.style.zIndex = "100 !important";
}
// Open notificaion
function notify(header,description,flip = true, shop = false){
  noti.style.right = 'calc(100% + 300px)'
  nheader.innerText = header
  ndescription.innerText = description
  noti.style.left = 'calc(100% - 300px)'
	setTimeout(function(){
		if(shop){ upgradeBuySound.play(); }
		else{ notifSound.play(); }
	},1000)
  if(flip == true){
setTimeout(closenotify,2000)
  }
}
function closenotify(){
  noti.style.left = 'calc(100% + 300px)'
}
//Player click handler
function addmoney(){
  customers += 1
  player.money = Math.round(parseFloat(player.money) + parseFloat(player.clickvalue) * 100);
	deg += 360
	coin.style.transform = "rotateX(" + deg + "deg)"
  setTimeout(reset,2000)
}

function addmoneyhoverflip2(){
   customers += 1
  player.money = Math.round(parseFloat(player.money) + parseFloat(player.clickvalue) * 125);
	deg += 360
	coin.style.transform = "rotateX(" + deg + "deg)"
  setTimeout(reset,2000)
}
 
//Reset Coin Styleing
function reset(){ 
document.getElementById('coin').src = player.icon;
   
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
    if(amount == max){//Reached Limit
      notify('Cannot Buy','You have reached the limit', true)
      document.getElementById("buy-bot").style.display = "none !important";
    }
		else{
				document.getElementById("buy-bot").style.display = "inline-block !important"; //Purchase successful
			eval(wakeup + "()") 
			player.money = player.money - price * 100
			eval( obj + '.amount += 1') 
			//Init if they never bought it before
			if(amount == 0){
				
				eval(' document.getElementById("' + obj + 'info").innerHTML = ""')
				eval(' document.getElementById("' + obj + 'info").innerHTML =  document.getElementById("' + obj + 'info").innerHTML + ' +"'" + code + "' + '</div>' ")
        var updatedamount = eval(  'parseInt(' +obj + '.amount)') 
        updateusage("document.getElementById('" +name +"-displaymax')",updatedamount,max)
				eval(name + 'BuySound.play()')

			} 
			else{
				eval(' document.getElementById("' + obj + 'info").innerHTML =  document.getElementById("' + obj + 'info").innerHTML + ' +"'" + code + "' + '</div>' ")
        var updatedamount = eval(  'parseInt(' +obj + '.amount)') 
        updateusage("document.getElementById('" +name +"-displaymax')",updatedamount,max)
				eval(name + 'BuySound.play()')

			}
    }
  }
	else{//Not enough money
    notify('Cannot Buy','You cannot afford that..')
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
	
   document.getElementById('robotbar').style.transition = "width 0.9s ease-in-out"
  document.getElementById('robotbar').style.display = "inline-block"
  document.getElementById('robotbar').style.width = "90%"
  setTimeout(managerobot2,900)
}
function managerobot2(){
  customers +=1
  player.money += Math.round(parseFloat(robot.value) * 100);
   document.getElementById('robotbar').style.transition = "none"
  document.getElementById('robotbar').style.width = "0%"
  setTimeout(managerobot,100)
}
//ECOFLIPPER
function manageecoflipper(){
	document.getElementById("ecobar").style.transition = "width 0.9s ease-in-out"
  document.getElementById("ecobar").style.display = "inline-block"
  document.getElementById("ecobar").style.width = "90%"
  setTimeout(manageecoflipper2,900)
	
}
function manageecoflipper2(){
    customers +=1
	player.money += Math.round(parseFloat(ecoflipper.value) * 100);
  document.getElementById("ecobar").style.transition = "width 0.9s ease-in-out"
  document.getElementById("ecobar").style.display = "inline-block"
  document.getElementById("ecobar").style.width = "90%"
  setTimeout(manageecoflipper,900)
}
//PERSON
function manageperson(){
   document.getElementById('personbar').style.transition = "width 0.9s ease-in-out"
  document.getElementById('personbar').style.display = "inline-block"
  document.getElementById('personbar').style.width = "90%"
  setTimeout(manageperson2,900)
}
function manageperson2(){
    customers +=1
  player.money += Math.round(parseFloat(person.value) * 100);
   document.getElementById('personbar').style.transition = "none"
  document.getElementById('personbar').style.width = "0%"
  setTimeout(manageperson,100)
}
//Bottle
function managebottleflip(){
   document.getElementById('bottleflipbar').style.transition = "width 0.9s ease-in-out"
  document.getElementById('bottleflipbar').style.display = "inline-block"
  document.getElementById('bottleflipbar').style.width = "90%"
  setTimeout(managebottleflip2,900)
}
function managebottleflip2(){
    customers +=1
  player.money += Math.round(parseFloat(bottleflip.value) * 100);
   document.getElementById('bottleflipbar').style.transition = "none"
  document.getElementById('bottleflipbar').style.width = "0%"
  setTimeout(managebottleflip,100)
}

notify('Tutorial', 'Welcome to the CEO Dashboard', true)
setTimeout(function(){
	if(rev_tut_0){
		compbtn.disabled = false
		compbtn.classList.remove('disabled')
		notify('Tutorial', 'First, click on Revenue Management')
	}
}, 4000)
