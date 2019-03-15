//This script handles the menu interaction

//VARS===========================
//  pannels
var inventorypannel = document.getElementById('inventorypannel')
var shoppannel = document.getElementById('shoppannel')
var battlepannel = document.getElementById('battlepannel')
var locationchoose = document.getElementById('locationchoose')
//  buttons
var battlebtn = document.getElementById('battlebtn')
var inventorybtn = document.getElementById('inventorybtn')
var shopbtn = document.getElementById('shopbtn')
var backbtn = document.getElementById('back')


//EVENT EARS=========================
backbtn.addEventListener('click', back)
battlebtn.addEventListener('click', openbattle)
shopbtn.addEventListener('click', openshop)
inventorybtn.addEventListener('click', openinventory)



// MENU WINDOW MANGEMENT=========================
function openbattle(){
  locationchoose.style.height = "0%"
  locationchoose.style.width = "0%"
  battlepannel.classList.remove('hide')
  battlebtn.classList.add('hide')
  shopbtn.classList.add('hide')
inventorybtn.classList.add('hide')
backbtn.classList.remove('hide')

}
function openshop(){
  locationchoose.style.height = "0%"
  locationchoose.style.width = "0%"
  shoppannel.classList.remove('hide')
  shopbtn.classList.add('hide')
  battlebtn.classList.add('hide')
  inventorybtn.classList.add('hide')
  backbtn.classList.remove('hide')



}
function openinventory(){
  locationchoose.style.height = "0%"
  locationchoose.style.width = "0%"
  inventorypannel.classList.remove('hide')
inventorybtn.classList.add('hide')
shopbtn.classList.add('hide')
battlebtn.classList.add('hide')
backbtn.classList.remove('hide')


}
function back(){

  inventorypannel.classList.add('hide')
  battlepannel.classList.add('hide')
  shoppannel.classList.add('hide')
 locationchoose.style.height = "100%"
  locationchoose.style.width = "100%"
  shopbtn.classList.remove('hide')
  inventorybtn.classList.remove('hide')
  battlebtn.classList.remove('hide')
  backbtn.classList.add('hide')

}
