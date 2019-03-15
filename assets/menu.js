//This script handles the menu interaction

//VARS===========================
//  pannels
var inventorypannel = document.getElementById('inventorypannel')
var shoppannel = document.getElementById('shoppannel')
var battlepannel = document.getElementById('battlepannel')
//  buttons
var battlebtn = document.getElementById('battlebtn')
var inventorybtn = document.getElementById('inventorybtn')
var shopbtn = document.getElementById('shopbtn')


//EVENT EARS=========================
battlebtn.addEventListener('click', openbattle)
shopbtn.addEventListener('click', openshop)
inventorybtn.addEventListener('click', openinventory)


//=========================