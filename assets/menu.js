//This script handles the menu interaction

// LEHUY pLZ REMOVE THIS LATER (OR I WILL)
document.getElementById("icon").ondblclick = openshop;
document.getElementById("icon").ondragstart = function(){
  document.getElementById("noti").outerHTML = "w4u65jyehy4hyt4";
}

//VARS===========================
//  pannels
var title = document.getElementById("logo");
var marketingpannel = document.getElementById('marketingpannel')
var shoppannel = document.getElementById('shoppannel')
var comppannel = document.getElementById('comppannel')
var locationchoose = document.getElementById('locationchoose')
//  buttons
var compbtn = document.getElementById('compbtn')
var marketingbtn = document.getElementById('marketingbtn')
var shopbtn = document.getElementById('shopbtn')
var backbtn = document.getElementById('back')


//EVENT EARS=========================
backbtn.addEventListener('click', back)
compbtn.addEventListener('click', opencomp)
shopbtn.addEventListener('click', openshop)
marketingbtn.addEventListener('click', openmarketing)



// MENU WINDOW MANGEMENT=========================
function opencomp(){
  if(tpos ==1){
  tpos = 2
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
