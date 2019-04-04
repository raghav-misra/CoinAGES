//Main game handler
function fadeIn(element) {
	var op = 0.1;  // initial opacity
	var timer = setInterval(function () {
		if (op >= 1) {
			clearInterval(timer);
		}
		element.style.opacity = op;
		op += 0.1;
	}, 10);
}



function fadeOut(element){
	var op = 1.1;  // initial opacity
	var timer = setInterval(function(){
		if (op <= 0.1) {
			clearInterval(timer);
			element.classList.add('hide')
		}
		element.style.opacity = op;
		op -= 0.1;
	}, 50);
}

//DEBUG
function m(){
	skipTutorial()
	player.money = 99999999;
	return 'no u'
}



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
  src: ['assets/audio/notif.mp3'],
  volume: 0.3
});
var coinSound = new Howl({
  src: ['assets/audio/coin.wav']
});
var robotBuySound = new Howl({
  src: ['assets/audio/robot.wav'],
  volume: 0.3
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
  src: ['assets/audio/purchased.wav'],
    volume: 0.2
});
var menuSound = new Howl({
  src: ['assets/audio/slide.mp3']
});
var magnetFlipperBuySound = new Howl({
  src: ['assets/audio/magnet.wav']
});
var superComputerBuySound = new Howl({
  src: ['assets/audio/superpc.mp3']
});
var ufoBuySound = new Howl({
  src: ['assets/audio/ufo.wav']
});
var antiGravityBuySound = new Howl({
  src: ['assets/audio/antigravity.wav']
});
var preFlippedBuySound = new Howl({
  src: ['assets/audio/preFlipped.mp3']
});
var usMintBuySound = new Howl({
  src: ['assets/audio/usMint.mp3']
});
var infinityBuySound = new Howl({
  src: ['assets/audio/infinity.wav']
});
var blockchainBuySound = new Howl({
  src: ['assets/audio/blockchain.wav']
});
var sicromoftBuySound = new Howl({
  src: ['assets/audio/buycomp.wav']
});
var zamazonBuySound = new Howl({
  src: ['assets/audio/buycomp.wav']
});
var investigationstart = new Howl({
  src: ['assets/audio/investigationstart.mp3']
});
var investigationdone = new Howl({
  src: ['assets/audio/investigationdone.mp3']
});
var soundtrack = new Howl({
  src: ['assets/audio/soundtrack.mp3'],
  loop: true,
  volume: 0.125
});

var investigationMusic = new Howl({
  src: ['assets/audio/invsoundtrack.mp3'],
  loop: true,
  volume: 0.125
});




//Non elements
var deg = 0 //stores amount of\ roation coin flips
var customers = 0 //Stores amount of clicks / customers

// Create Upgrade Shop Item on buy Var
var buy_mk2 = true;
var nickel_upgrade = false;
var buy_workers_mk2 = true;
var eco_mk2 = false;
var bottle_mk2 = false;
var bottle_max_increase = false;
var magnetFlipper_mk2 = false;
var superComputer_mk2 = false;
var ufo_mk2 = false;
var antiGravity_mk2 = false;
var preFlipped_mk2 = false;
var usMint_mk2 = false;
var infinity_mk2 = false;
var blockchain_mk2 = false;

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
  marketbtn.disabled = false
  marketbtn.classList.remove('disabled')
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
			createAlert('Secretary', 'There are more people waiting in line for a coin flip! Keep flipping coins until you make $1', alertImages.info, false)
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
function nextstage(newMoney,headless = true){
  stage += 1
  window.localStorage.setItem('s', stage)
	player.clickvalue = newMoney;

  if(headless){
	items.forEach(function(item){
		if(item.unlock == stage){
			itemdivs.innerHTML = itemdivs.innerHTML + item.cardcode

      }
	}
  )}
	player.icon = "./assets/img/" + stage + ".png"
		reset()
}
//Update Function
window.setInterval(update,200)
function update(){
  moneydisplay.innerText = '$' + player.money / 100;
  moneydisplayshop.innerText = '$' + player.money / 100;
  clicks.innerText = customers
  //UNLOCK UPGRADE AS ITEM ARE BOUGHT AND TUTORIAL
	if(player.money > 99 && rev_tut3 == true){
		rev_tut3 = false;
		setTimeout(function(){
				createAlert('Secretary', 'Now that you have $1, I recommend that you buy a robot to automate this process! You can buy coin flippers at the bottom of this page', alertImages.info, true)
			fadeIn(document.getElementById('robotcard'))
		}, 1000)
	}
	if(player.money > 199 && rev_tut5 == true){
		rev_tut5 = false;
		setTimeout(function(){
			createAlert('Secretary', 'As you grow the company, more coin flippers will become available. Hire a person! ', alertImages.info, true)
			fadeIn(document.getElementById('personcard'))
		}, 1000)
	}
	if(ecoflipper.amount > 0 && eco_mk2 && itemLimits.eco_mk2 !== 1){
		eco_mk2 = false;
		createShopItem("eco_mk2", "Giant Fans", "Buy mega-fans to", "manipulate the wind", "so that eco-flippers", "flip more coins.", 50);
	}
  if(bottleflip.amount > 0 && bottle_mk2 && itemLimits.bottle_mk2 !== 1){
		bottle_mk2 = false;
		createShopItem("bottle_mk2", "Bigger Bottles", "Koka-Kola™ bottles are", "bigger, resulting in", "space for more coins", "adds +2¢/flip.", 100)
	}
  if(bottleflip.amount > 0 && itemLimits.bottle_max_increase < 2 && bottle_max_increase){
    bottle_max_increase = false;
		createShopItem("bottle_max_increase", "Extra Bottles", "Koka-Kola™ has agreed", "to increase the", "limit on bottles", "you can purchase.", 100);
	}
	if(robot.amount > 0 && buy_mk2){
		buy_mk2 = false;
		createRobotMk2()
	}
	if(person.amount > 0 && buy_workers_mk2){
		buy_workers_mk2 = false;
		createShopItem("one-man-army", "Efficient Workers", "Better salaries lead", "to better workers.", "Workers can flip", "5¢ every second.", 12);
	}
  if(magnetFlipper.amount > 0 && magnetFlipper_mk2 && itemLimits.magnetFlipper_mk2 !== 1 ){
		magnetFlipper_mk2 = false;
		createShopItem("magnetFlipper_mk2", "Electromagnets", "Create custom", "Electromagnets", "to create stronger magnets", " adds +5¢/flip.", 200)
	}
  if(superComputer.amount > 0 && superComputer_mk2 && itemLimits.superComputer_mk2 !== 1){
	  superComputer_mk2 = false;
		createShopItem("superComputer_mk2", "Nvidian GPU's", "Equip your supercomputers", "with the latest Nvidian GPU's", "to make them more powerful", " adds +$2/flip.", 100)
	}
  if(ufo.amount > 0 && ufo_mk2 && itemLimits.ufo_mk2 !== 1){
	  ufo_mk2 = false;
		createShopItem("ufo_mk2", "Alien Negotiations", "Make a deal with the", "Aliens to receive", "more technological aid", "increases limit by 1", 300)
	}
  if(antiGravity.amount > 0 && antiGravity_mk2 && itemLimits.antiGravity_mk2 !== 1){
	  antiGravity_mk2 = false;
		createShopItem("antiGravity_mk2", "Second Cargo Ship", "Get permission to", "build and launch", "another Anti-Gravity flipper", "increases limit by 1", 250)
	}
   if(usMint.amount > 0 && usMint_mk2 && itemLimits.usMint_mk2 !== 1){
	  usMint_mk2 = false;
		createShopItem("usMint_mk2", "Build Mints", "Why just buy mints", "when you can also", "build them too? ", "increases limit by 1", 500)
	}
   if(preFlipped.amount > 0 && preFlipped_mk2 && itemLimits.preFlipped_mk2 !== 1){
	  preFlipped_mk2 = false;
		createShopItem("preFlipped_mk2", "Pre-flipped Breakthrough", "Since the coins only have", "one side, you can serve", "multiple customers at once.", "adds +50¢/flip.", 300)
	}
  if(infinity.amount > 0 && infinity_mk2 && itemLimits.infinity_mk2 !== 1){
	  infinity_mk2 = false;
		createShopItem("infinity_mk2", "Infinity Stone", "Fuse the already powerful", "infinity coin with an", "infinity stone", "adds +$10/flip.", 1000)
	}
   if(blockchain.amount > 0 && blockchain_mk2 && itemLimits.blockchain_mk2 !== 1){
	  blockchain_mk2 = false;
		createShopItem("blockchain_mk2", "CryptoCurrency", "Create a CryptoCurrency", "to promote your blockchain", "to more people", "adds +$20/flip.", 1500)
	}

	if(person.amount > 0 && robot.amount > 0  && rev_tut6){
		rev_tut6 = false;
		setTimeout(function(){
			createAlert('Secretary', 'Hiring a person is more expensive but will eventually make more money than a robot. ', alertImages.info, true)
			setTimeout(function(){
				createAlert('Secretary', "It's about time I show you the research and development center", alertImages.info, true)
				setTimeout(function(){
					createAlert('Secretary', "To go back to the main menu, click the <i class='fas fa-chevron-left'></i> button on the left. ", alertImages.info, false)
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
function notify(header,description,flip = true, sound = true){
  noti.style.right = 'calc(100% + 300px)'
  nheader.innerText = header
  ndescription.innerText = description
  noti.style.left = 'calc(100% - 300px)'
	setTimeout(function(){
    if(sound){
    notifSound.play();
    }
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
	var clickHund = Math.round(player.clickvalue * 100)
	var boostHund = Math.round(player.clickboost)
  player.money = parseFloat(player.money) + parseFloat(clickHund) + parseFloat(boostHund);
	deg += 360
	coin.style.transform = "rotateX(" + deg + "deg)"
  setTimeout(reset,2000)
}

//Reset Coin Styling
function reset(){
document.getElementById('coin').src = player.icon;

}

//Buy function
function buy(obj, headless = false){
  var price = eval( 'parseInt(' +obj + '.price)')
  var value = eval( obj + '.value')
  var name = eval( obj + '.name')
  var wakeup = eval( obj + '.wakeup')
  var max = eval(  'parseInt(' +obj + '.max)')
  var amount = eval(  'parseInt(' +obj + '.amount)')
  var code = eval( obj + '.code')
  if(headless){
    document.getElementById("buy-bot").style.display = "inline-block !important";
    eval(wakeup + "()")
    eval(' document.getElementById("' + obj + 'info").innerHTML =  document.getElementById("' + obj + 'info").innerHTML + ' +"'" + code + "' + '</div>' ")
        var updatedamount = eval(  'parseInt(' +obj + '.amount)')
        updateusage("document.getElementById('" +name +"-displaymax')",updatedamount,max,value)

  }else{
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
        updateusage("document.getElementById('" +name +"-displaymax')",updatedamount,max,value)
        eval(name + 'BuySound.play()')
        industry.CoinAGES.futurevalue += price * 100

			}
			else{
				eval(' document.getElementById("' + obj + 'info").innerHTML =  document.getElementById("' + obj + 'info").innerHTML + ' +"'" + code + "' + '</div>' ")
        var updatedamount = eval(  'parseInt(' +obj + '.amount)')
        updateusage("document.getElementById('" +name +"-displaymax')",updatedamount,max,value)
        eval(name + 'BuySound.play()')
        industry.CoinAGES.futurevalue += price * 100

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
			createAlert('Secretary', 'Each flipper has a certain maximum amount. For robots, the max is 10', alertImages.info, true)
			setTimeout(function(){
				createAlert('Secretary', 'Keep flipping coins with your robot to reach $2!', alertImages.info, false)
			}, 1000)
		}, 1000)
  }
}
}

//ONJECT WAKE UPS ======
function managerobot(){

   document.getElementById('robotbar').style.animation = "barframes 1s infinite"
  document.getElementById('robotbar').style.display = "inline-block"

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
	document.getElementById("ecobar").style.animation = "barframes 1s infinite"
  document.getElementById("ecobar").style.display = "inline-block"

  setTimeout(manageecoflipper2,900)

}
function manageecoflipper2(){
    customers +=1
	player.money += Math.round(parseFloat(ecoflipper.value) * 100);
  document.getElementById("ecobar").style.display = "inline-block"
  document.getElementById("ecobar").style.width = "0%"
  setTimeout(manageecoflipper,900)
}
//PERSON
function manageperson(){
   document.getElementById('personbar').style.animation = "barframes 1s infinite"
  document.getElementById('personbar').style.display = "inline-block"

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
   document.getElementById('bottleflipbar').style.animation = "barframes 1s infinite"
  document.getElementById('bottleflipbar').style.display = "inline-block"
  setTimeout(managebottleflip2,900)
}
function managebottleflip2(){
    customers +=1
  player.money += Math.round(parseFloat(bottleflip.value) * 100);
   document.getElementById('bottleflipbar').style.transition = "none"
  document.getElementById('bottleflipbar').style.width = "0%"
  setTimeout(managebottleflip,100)
}
//Magnet
function manageMagnetFlipper(){
   document.getElementById('magnetFlipperbar').style.animation = "barframes 1s infinite"
  document.getElementById('magnetFlipperbar').style.display = "inline-block"
  setTimeout(manageMagnetFlipper2,900)
}
function manageMagnetFlipper2(){
    customers +=1
  player.money += Math.round(parseFloat(magnetFlipper.value) * 100);
   document.getElementById('magnetFlipperbar').style.transition = "none"
  document.getElementById('magnetFlipperbar').style.width = "0%"
  setTimeout(manageMagnetFlipper,100)
}
//Super Computer
function managesuperComputer(){
   document.getElementById('superComputerbar').style.animation = "barframes 60s infinite"
  document.getElementById('superComputerbar').style.display = "inline-block"
  setTimeout(managesuperComputer2,59000)
}
function managesuperComputer2(){
    customers +=1
  player.money += Math.round(parseFloat(superComputer.value) * 100);
   document.getElementById('superComputerbar').style.transition = "none"
  document.getElementById('superComputerbar').style.width = "0%"
  setTimeout(managesuperComputer,100)
}
//Ufo
function manageUfo(){
   document.getElementById('ufobar').style.animation = "barframes 1s infinite"
  document.getElementById('ufobar').style.display = "inline-block"
  setTimeout(manageUfo2,900)
}
function manageUfo2(){
    customers +=1
  player.money += Math.round(parseFloat(ufo.value) * 100);
   document.getElementById('ufobar').style.transition = "none"
  document.getElementById('ufobar').style.width = "0%"
  setTimeout(manageUfo,100)
}

//AntiGravity
function manageantiGravity(){
   document.getElementById('antiGravitybar').style.animation = "barframes 60s infinite"
  document.getElementById('antiGravitybar').style.display = "inline-block"
  setTimeout(manageantiGravity2,59000)
}
function manageantiGravity2(){
    customers +=1
  player.money += Math.round(parseFloat(antiGravity.value) * 100);
   document.getElementById('antiGravitybar').style.transition = "none"
  document.getElementById('antiGravitybar').style.width = "0%"
  setTimeout(manageantiGravity,100)
}
//preFlipped
function managepreFlipped(){
   document.getElementById('preFlippedbar').style.animation = "barframes 1s infinite"
  document.getElementById('preFlippedbar').style.display = "inline-block"
  setTimeout(managepreFlipped2,900)
}
function managepreFlipped2(){
    customers +=1
  player.money += Math.round(parseFloat(preFlipped.value) * 100);
   document.getElementById('preFlippedbar').style.transition = "none"
  document.getElementById('preFlippedbar').style.width = "0%"
  setTimeout(managepreFlipped ,100)
}
//usMint
function manageusMint(){
   document.getElementById('usMintbar').style.animation = "barframes 60s infinite"
  document.getElementById('usMintbar').style.display = "inline-block"
  setTimeout(manageusMint2,59000)
}
function manageusMint2(){
    customers +=1
  player.money += Math.round(parseFloat(usMint.value) * 100);
   document.getElementById('usMintbar').style.transition = "none"
  document.getElementById('usMintbar').style.width = "0%"
  setTimeout(manageusMint,100)
}
//infinity
function manageinfinity(){
   document.getElementById('infinitybar').style.animation = "barframes 1s infinite"
  document.getElementById('infinitybar').style.display = "inline-block"
  setTimeout(manageinfinity2,900)
}
function manageinfinity2(){
    customers +=1
  player.money += Math.round(parseFloat(infinity.value) * 100);
   document.getElementById('infinitybar').style.transition = "none"
  document.getElementById('infinitybar').style.width = "0%"
  setTimeout(manageinfinity,100)
}
//blockchain
function manageblockchain(){
  document.getElementById('blockchainbar').style.animation = "barframes 60s infinite"
 document.getElementById('blockchainbar').style.display = "inline-block"
 setTimeout(manageblockchain2,59000)
}
function manageblockchain2(){
   customers +=1
 player.money += Math.round(parseFloat(blockchain.value) * 100);
  document.getElementById('blockchainbar').style.transition = "none"
 document.getElementById('blockchainbar').style.width = "0%"
 setTimeout(manageblockchain,100)
}
//sicromoft
function managesicromoft(){
  document.getElementById('sicromoftbar').style.animation = "barframes 1s infinite"
 document.getElementById('sicromoftbar').style.display = "inline-block"
 setTimeout(managesicromoft2,900)
}
function managesicromoft2(){
   customers +=1
 player.money += Math.round(parseFloat(sicromoft.value) * 100);
  document.getElementById('sicromoftbar').style.transition = "none"
 document.getElementById('sicromoftbar').style.width = "0%"
 setTimeout(managesicromoft,100)
}
//zamazon
function managezamazon(){
  document.getElementById('zamazonbar').style.animation = "barframes 1s infinite"
 document.getElementById('zamazonbar').style.display = "inline-block"
 setTimeout(managezamazon2,900)
}
function managezamazon2(){
   customers +=1
 player.money += Math.round(parseFloat(zamazon.value) * 100);
  document.getElementById('zamazonbar').style.transition = "none"
 document.getElementById('zamazonbar').style.width = "0%"
 setTimeout(managezamazon,100)
}
//End game
function endGame(){
  createAlert("Investigation!", "The government has started an investigation on your company's recent business practices.", alertImages.usoaFlag);
  soundtrack.fade(0.125, 0, 1000)
  setTimeout(function(){
    investigationMusic.play()
      investigationstart.play();
      player.endStage = true

  },1000)
  setTimeout(function(){
    player.end = true
end()


  }, 5000)
}
function end(){
  document.getElementById('alertBtn').classList.add('hide')
  document.getElementById('alert').style.backgroundColor = '#ff7675'
  investigationMusic.fade(0.125, 0, 200)
  investigationdone.play()
  back()
  document.getElementById('locationchoose').classList.add('hide')
  createAlert("Investigation!", "The government has uncovered your plans to buy out your rival corporations and has looked over recent business practices that give you an unfair advantage over other potential business. The goverment demands that CoinAGES be dissolved <br><br> <button id='alertBtn'onclick='destroyAlert()' class='reg'>OK</button>", alertImages.usoaFlag, true)
  createAlert("Investigation!", "The fine/bail for a crime on such a scale is $" + player.money/100 + ". The decision is yours to make. Pay up and..<br><br> <button id='alertBtn'onclick='rebirth()' class='widebutton'>Rebirth The Company (resets company but keeps manual click value)</button><br> <button id='alertBtn'onclick='retire()' class='reg'>Retire</button><br>", alertImages.usoaFlag, false);

}
function rebirth(){
  window.localStorage.clear()
  window.localStorage.setItem('p', '{ "money": 0, "clickboost": 10000, "clickvalue": 0.01, "icon": "./assets/img/1.png", "endStage": false, "end": false }')
  window.localStorage.setItem('c', 0)
  window.location.reload()
}
function retire(){
  window.location.href='retire.html'
}
//Begin Tutorial and INIT

//TUTORIAL START



//INIT AND SAVE/RESTORE
function init(){ // Restore Save
  var save = JSON.parse(window.localStorage.getItem('p'))

  if (save == 0 || save == null){
    setTimeout(autoSave, 3000)
    runIndustry()
    soundtrack.play()
    createAlert('Secretary', 'Hello Boss! I am your new secretary and it is my job to help you learn about your role here.', alertImages.info)
    createAlert('Secretary', 'What you see here is the CEO dashboard. This is the central hub of the company', alertImages.info)
    createAlert('Secretary', "Let's begin by clicking on Revenue Management", alertImages.info)
    compbtn.disabled = false
    compbtn.classList.remove('disabled')


    return
  }else{
    closenotify()
    skipTutorial()
    document.getElementById('lastMoney').innerText = "Money: $" + save.money / 100
    document.body.style.overflow = "hidden";
    saveCard.classList.remove('hide')
    fadeIn(saveCard)

  }

}

init()
function autoSave(){
  var temp = []
  temp.push(robot,person,ecoflipper,bottleflip,magnetFlipper,superComputer,ufo,antiGravity,usMint,preFlipped,infinity,blockchain,sicromoft,zamazon)
  window.localStorage.setItem('p', JSON.stringify(player))
  window.localStorage.setItem('c', customers)
  window.localStorage.setItem('i', JSON.stringify(temp))
  window.localStorage.setItem("itemz", JSON.stringify(itemLimits));
  window.localStorage.setItem("s", stage.toString());


  setTimeout(autoSave, 3000)
}


function restore(){

  document.body.style.overflow = "visible";



  setTimeout(autoSave, 3000)
  fadeOut(saveCard)

  var tempStag = parseInt(window.localStorage.getItem('s')) // Restore stage

  var stagei = 1
  if(stage >= 3){
    marketingbtn.disabled = false;
  }
  while(stagei < tempStag){
    stagei++;
    items.forEach(function(item){
        if(item.unlock == stagei){
          itemdivs.innerHTML = itemdivs.innerHTML + item.cardcode
        }
    });
  }
  player = JSON.parse(window.localStorage.getItem('p')) //Restore Player Object
  industry = JSON.parse(window.localStorage.getItem('v')) //Restore industry Object
  if(player.endStage == false){
    soundtrack.play()
  }
  reset()
  customers = parseInt(window.localStorage.getItem('c')) //Restore customers
  if(window.localStorage.getItem('i') == null){
    return //Restore Bought Items
  }else{
   var itemsrestore = JSON.parse(window.localStorage.getItem('i'))
    itemsrestore.forEach(function(item){
      if(item.amount >= 1){
        var i = 0
        eval(item.name + '=' + JSON.stringify((item)))
        while(i < item.amount){
          i++
          if(i == 1){
            eval(' document.getElementById("' + item.name + 'info").innerHTML = ""')
          }
          buy(item.name, true)
        }
      }
    })
  }
  runIndustry()
  //RESTORE SHOP
   var tempSt = parseInt(window.localStorage.getItem("s").trim()) - 1;
  var marker = 0;
  setTimeout(function(){
while(marker <= tempSt){
    eval(stageFuncs[marker])
    marker++
  }
  itemLimits = JSON.parse(window.localStorage.getItem('itemz'));
  for (var propX in itemLimits) {
    if (itemLimits.hasOwnProperty(propX)) {
        try{
          if(itemLimits[propX] >= maxLimits[propX]){
            deleteShopItem(propX)
          }
        }
        catch(err){
          console.log(err);
        }
    }
}
  }, 1000)




}





function resetSave(){
 window.localStorage.clear()
 createAlert('Reset','Resetting your save please wait...',alertImages.cancelX)
 window.location.reload(true);

}
