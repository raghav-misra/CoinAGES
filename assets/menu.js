//This script handles the menu interaction


//VARS===========================
//  pannels
var title = document.getElementById("logo");
var logo = document.getElementById("icon");
var marketingpannel = document.getElementById('marketingpannel')
var shoppannel = document.getElementById('shoppannel')
var comppannel = document.getElementById('comppannel')
var marketpanne = document.getElementById('marketpannel')
var locationchoose = document.getElementById('locationchoose')
var saveCard = document.getElementById('saveCard')
var buttonContainer = document.getElementById('buttonContainer') //div with menu btns
//  buttons
var compbtn = document.getElementById('compbtn')
var marketingbtn = document.getElementById('marketingbtn')
var shopbtn = document.getElementById('shopbtn')
var marketbtn = document.getElementById('marketbtn')
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
marketbtn.addEventListener('click', openindustry)
    //For division description

compbtn.addEventListener('mouseenter', showInfo)
shopbtn.addEventListener('mouseenter', showInfo)
marketingbtn.addEventListener('mouseenter', showInfo)
marketbtn.addEventListener('mouseenter', showInfo)

compbtn.addEventListener('mouseleave', closeInfo)
shopbtn.addEventListener('mouseleave', closeInfo)
marketingbtn.addEventListener('mouseleave', closeInfo)
marketbtn.addEventListener('mouseleave', closeInfo)
//Info function
function showInfo(){
  fadeIn(document.getElementById('info'))
}
function closeInfo(){
  fadeOut(document.getElementById('info'), false)}
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
      document.getElementById('coin').scrollIntoView()
             clickMe(document.getElementById('coin'))
             createAlert('Secretary', "This is where you manage your revenue flow. To make money, <b class='bold'>flip the coin by clicking on it </b>", alertImages.info,true)

		}, 1000)
	}

	title.innerText = "Manage Company Revenue";
  locationchoose.style.height = "0%"
  locationchoose.style.width = "0%"
  comppannel.classList.remove('hide')
  compbtn.classList.add('hide')
  shopbtn.classList.add('hide')
  marketingbtn.classList.add('hide')
  marketpannel.classList.add('hide')
  buttonContainer.classList.add('hide')
  marketbtn.classList.add('hide')
  backbtn.classList.remove('hide')

}
function openshop(){
  buttonContainer.classList.add('hide')
  menuSound.play()
	if(rev_tut7){
		rev_tut7 = false;
        marketbtn.disabled = false
  marketbtn.classList.remove('disabled')
    createAlert('Secretary', "This is where you can upgrade the performance of your coin flippers.", alertImages.info, true)
    createAlert('Secretary', "<b class='bold'>However, the most important thing you can do here is new research coin types!</b> If you do this, more types of coin flippers and features will become available", alertImages.info, false)
    createAlert('Secretary', "We should make <b class='bold'>researching the nickel </b> our priority, but we should also look into upgrading our coin flippers to get the resources to do so. ", alertImages.info, false)
    createAlert('Secretary', "I will lend you some money to upgrade our robot flipper capacity!", alertImages.info, false)
    createFreeGift()
    clickMe(document.getElementById('buyGift'))
	
  }

	title.innerText = "R&D Laboratory";
  locationchoose.style.height = "0%"
  locationchoose.style.width = "0%"
  shoppannel.classList.remove('hide')
  shopbtn.classList.add('hide')
  compbtn.classList.add('hide')
  marketingbtn.classList.add('hide')
  marketpannel.classList.add('hide')
  marketbtn.classList.add('hide')
  backbtn.classList.remove('hide')

}
function openindustry(){
  buttonContainer.classList.add('hide')
  if(rev_tut9){
    rev_tut9 = false
    createAlert('Secretary', "Here you can view the key players in the coin-flipping industry. As you can tell, it is a growing industry with alot of companies battleling for the top spot", alertImages.info, true)
    createAlert('Secretary', "Hey look! We are in 7th place with a value of about $" + industry.CoinAGES.value + "! Not bad for a company that just started!" , alertImages.info, false)
    createAlert('Secretary', "As our company moves up the ranks, other ones will inevitably stop growing or even fail! That's when I advise you to <b class='bold'>buy out their company</b> to give us a boost!  " , alertImages.info, false)
    createAlert('Secretary', "I have no doubt that you will bring CoinAGES to the top spot one day! For now, we should focus on <b class='bold'>researching the Nickel </b> and overtaking LuxCoin <br><i class='small'>(they have such a stupid management, this will be easy)</i>" , alertImages.info, false)
    createAlert('Secretary', "Well, that should be everything you need to know! I will see you later!" , alertImages.info, false)
    document.getElementById('CoinAGESd').scrollIntoView()
  }
	menuSound.play()
	title.innerText = "Industry Analysis";
  locationchoose.style.height = "0%"
  locationchoose.style.width = "0%"
  marketingpannel.classList.add('hide')
  marketingbtn.classList.add('hide')
  marketpannel.classList.remove('hide')
	shopbtn.classList.add('hide')
	compbtn.classList.add('hide')
  backbtn.classList.remove('hide')
  marketbtn.classList.add('hide')
}
function openmarketing(){
  if(stage >= 3){
  menuSound.play()
  buttonContainer.classList.add('hide')
	title.innerText = "Marketing";
  locationchoose.style.height = "0%"
  locationchoose.style.width = "0%"
  marketingpannel.classList.remove('hide')
  marketingbtn.classList.add('hide')
  marketpannel.classList.add('hide')
	shopbtn.classList.add('hide')
	compbtn.classList.add('hide')
  backbtn.classList.remove('hide')
  marketbtn.classList.add('hide')
  }else{
    createAlert('Secretary', "We don't have the resources to create a marketing division yet. When we have a larger profit margin, I will begin work on creating a marketing team! " , alertImages.info, true)
  }
}
function back(){
  buttonContainer.classList.remove('hide')
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
  marketpannel.classList.add('hide')
  marketbtn.classList.remove('hide')
  backbtn.classList.add('hide')
  deg = 0
  coin.style.transform = "rotateX(0deg)"
}
var clickElement = marketbtn
function clickMe(element){
element.addEventListener('click' , clickGlow)
element.classList.add('clickme')
clickElement = element
}

function clickGlow(element){
    
    clickElement.classList.remove('clickme')

}