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
var buttonContainer = document.getElementById('buttonContainer') //div w
var tooltip = document.getElementById('info') // tooltipith menu btns
var acquireCard = document.getElementById('acquireCard') // for industry
var offerQuestion = document.getElementById('offerQuestion') // for industry
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



function updateusage(name, amount, max, obj) {
  eval(name + '.innerHTML = "You are using ' + amount + '/' + max + '<br>' + '  Each one is making you $' + obj + '"')
}

//EVENT EARS=========================
backbtn.addEventListener('click', back)
compbtn.addEventListener('click', opencomp)
shopbtn.addEventListener('click', openshop)
marketingbtn.addEventListener('click', openmarketing)
marketbtn.addEventListener('click', openindustry)
//For division description


// MENU WINDOW MANGEMENT=========================
function opencomp() {
  menuSound.play()
  if (rev_tut) {

    rev_tut = false;
    setTimeout(function () {
      document.getElementById('coin').scrollIntoView()
      clickMe(document.getElementById('coin'))
      createAlert('Secretary', "This is where you manage your revenue flow. To make money, <b class='bold'>flip the coin by clicking on it </b>", alertImages.info, true)

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

  marketbtn.classList.add('hide')
  backbtn.classList.remove('hide')

}
function openshop() {

  menuSound.play()
  if (rev_tut7) {
    rev_tut7 = false;
    marketbtn.disabled = false
    marketbtn.classList.remove('disabled')
    createAlert('Secretary', "This is where you can upgrade the performance of your coin flippers.", alertImages.info, true)
    createAlert('Secretary', "<b class='bold'>However, the most important thing you can do here is new research coin types!</b> If you do this, more types of coin flippers and features will become available", alertImages.info, false)
    createAlert('Secretary', "We should make <b class='bold'>researching the nickel </b> our priority, but we should also look into upgrading our coin flippers to get the resources to do so. ", alertImages.info, false)
    createAlert('Secretary', "I will lend you some money to upgrade our robot flipper capacity!", alertImages.info, false)
    createFreeGift()
    clickMe(document.getElementById('buyGift'))
    setTimeout(function(){
      document.getElementById('buyGift').scrollIntoView();
    }, 1000)
    

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
function openindustry() {


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
  if (tutorialaquire && stage == 4) {
    tutorialaquire = false;
    createAlert('Secretary', "When you are ready, you can make an offer to aquire LuxCoin. Make your offer carefully, as if you offer something <b class='bold'>too low the recommended price they will reject</b>. You have once chance at this.", alertImages.info, true)
    setTimeout(function () {
      document.getElementById('LuxFlipOffer').scrollIntoView()
    }, 1000)




  }
  if (rev_tut9) {
    rev_tut9 = false
    document.getElementById('CoinAGESd').scrollIntoView()
    createAlert('Secretary', "Here you can view the key players in the coin-flipping industry. As you can tell, it is a growing industry with alot of companies battleling for the top spot", alertImages.info, true)
    createAlert('Secretary', "Hey look! We are in 7th place with a value of about $" + industry.CoinAGES.value + "! Not bad for a company that just started!", alertImages.info, false)
    createAlert('Secretary', "As our company moves up the ranks, other ones will inevitably stop growing or even fail! That's when I advise you to <b class='bold'>buy out their company</b> to give us a boost!  ", alertImages.info, false)
    createAlert('Secretary', "I have no doubt that you will bring CoinAGES to the top spot one day! For now, we should focus on <b class='bold'>researching the Nickel </b> and overtaking LuxCoin <br><i class='small'>(they have such a stupid management, this will be easy)</i>", alertImages.info, false)
    createAlert('Secretary', "Well, that should be everything you need to know! I will see you later!", alertImages.info, false)

  }
}
function openmarketing() {
  if (stage >= 3) {
    menuSound.play()
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
    if (tutorial) {
      tutorial = false
      createAlert('Secretary', "Here is the brand new marketing team! Here you can <b class='bold'>launch marketing campaigns to get a manual click boost!</b>", alertImages.info, true)
      createAlert('Secretary', "Normal campaigns <b class='bold'>last temporarily</b>, but they can be <b class='bold'>re-launched</b> after the time has passed.", alertImages.info, false)
      createAlert('Secretary', "Even so, the team is constantly coming up with <b class='bold'>special campaign ideas that could benefit us endlessly</b>. Right now, the team claims that they can make a deal with the <b class='bold'>NFA!</b> This could really give us an edge over our competitors!", alertImages.info, false)
    }
  } else {
    createAlert('Secretary', "We don't have the resources to create a marketing division yet. When we have a larger profit margin, I will begin work on creating a marketing team! ", alertImages.info, true)
  }

}
function back() {

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
function clickMe(element) {
  element.addEventListener('click', clickGlow)
  element.classList.add('clickme')
  clickElement = element
}

function clickGlow(element) {

  clickElement.classList.remove('clickme')

}