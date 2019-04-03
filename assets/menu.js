//This script handles the menu interaction


//VARS===========================
//  pannels
var title = document.getElementById("logo");
var logo = document.getElementById("icon");
var marketingpannel = document.getElementById('marketingpannel')
var shoppannel = document.getElementById('shoppannel')
var comppannel = document.getElementById('comppannel')
var locationchoose = document.getElementById('locationchoose')
var saveCard = document.getElementById('saveCard')
//  buttons
var compbtn = document.getElementById('compbtn')
var marketingbtn = document.getElementById('marketingbtn')
var shopbtn = document.getElementById('shopbtn')
var backbtn = document.getElementById('back')
//  Item usage displays
var itemsbought = [] //Stores these elements and flags them for update
//var robotdisplay = document.getElementById('robot-displaymax')
//var persondisplay = document.getElementById('person-displaymax')



//EVENT EARS=========================
backbtn.addEventListener('click', back)
compbtn.addEventListener('click', opencomp)
shopbtn.addEventListener('click', openshop)
marketingbtn.addEventListener('click', openmarketing)


// Update Item Usage display
function updateusage(name,amount,max,obj){
  eval(name +'.innerHTML = "You are using ' + amount + '/' + max + '<br>' +'  Each one is making you $' + obj +'"')
}

// MENU WINDOW MANGEMENT=========================
function opencomp(){
  menuSound.play()
  if(rev_tut){

		rev_tut = false;
		setTimeout(function(){
             createAlert('Secretary', "This is where you manage your revenue flow. To make money, flip the coin by clicking on it", alertImages.info,true)

		}, 1000)
	}

	title.innerText = "Manage Company Revenue";
  locationchoose.style.height = "0%"
  locationchoose.style.width = "0%"
  comppannel.classList.remove('hide')
  compbtn.classList.add('hide')
  shopbtn.classList.add('hide')
	marketingbtn.classList.add('hide')
	backbtn.classList.remove('hide')
}
function openshop(){
  menuSound.play()
	if(rev_tut7){
		rev_tut7 = false;
		createAlert('Secretary', "This is where you can upgrade your coin flippers and most importantly, upgrade the entire company to the next technological stage (In this case it is nickel).", alertImages.info, true)
		setTimeout(function(){
			createAlert('Secretary', "That should be everything you need to know. You can pick up a free gift from me in the R&D center! I have no doubt that you will bring this company to success. ", alertImages.info, false)
			setTimeout(createFreeGift, 1000)
		}, 4000)
	}

	title.innerText = "R&D Laboratory";
  locationchoose.style.height = "0%"
  locationchoose.style.width = "0%"
  shoppannel.classList.remove('hide')
  shopbtn.classList.add('hide')
  compbtn.classList.add('hide')
  marketingbtn.classList.add('hide')
  backbtn.classList.remove('hide')
}
function openmarketing(){
	menuSound.play()
	title.innerText = "Marketing";
  locationchoose.style.height = "0%"
  locationchoose.style.width = "0%"
  marketingpannel.classList.remove('hide')
	marketingbtn.classList.add('hide')
	shopbtn.classList.add('hide')
	compbtn.classList.add('hide')
	backbtn.classList.remove('hide')
}
function back(){
	menuSound.play()
	title.innerText = "CEO Dashboard";
  marketingpannel.classList.add('hide')
  comppannel.classList.add('hide')
  shoppannel.classList.add('hide')
 	locationchoose.style.height = "100%"
  locationchoose.style.width = "100%"
  shopbtn.classList.remove('hide')
  marketingbtn.classList.remove('hide')
  compbtn.classList.remove('hide')
  backbtn.classList.add('hide')
  deg = 0
  coin.style.transform = "rotateX(0deg)"
}
