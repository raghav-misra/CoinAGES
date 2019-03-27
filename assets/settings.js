//Settings script
var stage = 1
var items = []
var player = {
  money: 0.00,
  clickboost: 0.00,
  clickvalue: 0.01,
	icon: "./assets/img/1.png"
  }


var stage1 = {
  cost: 0,
  upgrade: 0

}

//Objects
var robot = {
  price: 1,
  value: 0.01,
  max: 10,
  amount: 0,
  wakeup: 'managerobot',
  name: 'robot',
  code: ' <img class=" itemimg animated jello infinite" src="assets/img/robot.png">'
} 
var person = {
  price: 2,
  value: 0.03,
  max: 5,
  amount: 0,
  wakeup: 'manageperson',
  name: 'person',
  code:' <img class=" itemimg personflip infinite" src="assets/img/person.png">'
}
// Objects that are not default
var ecoflipper = {
	 price: 20,
  value: 0.20,
  max: 5,
  amount: 0,
	unlock: 2,
  wakeup: 'manageecoflipper',
  name: 'ecoflipper',
  code:' <img class=" itemimg spin infinite" src="assets/img/ecoflipper.png">',
	cardcode: "<div style='opacity:1'class='card'> <p>Eco Flipper</p> <div class='bar' id='ecobar'></div> <hr class='blu thin'> <div class='container' id='ecoflipperinfo'> <p>Use the wind to flip coins, then charge more because it is environmentally friendly.<br>Flip Time: 1 Second<br> Money Per Flip: $0.20</p> </div> <br> <button id='buy-ecoflipper' onclick='buy(\"ecoflipper\")' class='martophack buy-bot'>Build one for $20.00</button> <p id='ecoflipper-displaymax'>You are using 0/5</p> </div>"

} 
var bottleflip = {
	 price: 80,
  value: 0.40,
  max: 2,
  amount: 0,
	unlock: 2,
  wakeup: 'managebottleflip',
  name: 'bottleflip',
  code:' <img class=" itemimg bottleflip infinite" src="assets/img/waterbottle.png">',
	cardcode: "<div style='opacity:1'class='card'> <p>Bottle Flipper</p> <div class='bar' id='bottleflipbar'></div> <hr class='blu thin'> <div class='container' id='bottleflipinfo'> <p>Flip Koka-Kola™ Bottles filled with coins for high efficiency.<br>Flip Time: 1 Second<br> Money Per Flip: $0.40</p> </div> <br> <button  onclick='buy(\"bottleflip\")' class='martophack buy-bot'>Buy one for $80.00</button> <p id='bottleflip-displaymax'>You are using 0/2</p> </div>"

} 
var magnetFlipper = {
	 price: 200,
  value: 0.60,
  max: 4,
  amount: 0,
	unlock: 3,
  wakeup: 'manageMagnetFlipper',
  name: 'magnetFlipper',
  code:' <img class=" itemimg magnetflipper infinite" src="assets/img/magnet.png">',
	cardcode: "<div style='opacity:1'class='card'> <p>Magnet Flipper</p> <div class='bar' id='magnetFlipperbar'></div> <hr class='blu thin'> <div class='container' id='magnetFlipperinfo'> <p>Attach coins to magnets and use the Earth's magnetic field to flip coins.<br>Flip Time: 1 Second<br> Money Per Flip: $0.60</p> </div> <br> <button  onclick='buy(\"magnetFlipper\")' class='martophack buy-bot'>Buy one for $200.00</button> <p id='magnetFlipper-displaymax'>You are using 0/5</p> </div>"

} 
var superComputer = {
	 price: 700,
  value: 1,
  max: 4,
  amount: 0,
	unlock: 3,
  wakeup: 'managesuperComputer',
  name: 'superComputer',
  code:' <img class=" itemimg superComputer infinite" src="assets/img/superpc.png">',
	cardcode: "<div style='opacity:1'class='card'> <p>Super Computer</p> <div class='bar slow' id='superComputerbar'></div> <hr class='blu thin'> <div class='container' id='superComputerinfo'> <p>Build a cluster of ultra-advanced computer cluster to do the digitally impossible and generate truly random coin flip results.<br>Flip Time: 60 Seconds<br> Money Per Flip: $1.00</p> </div> <br> <button  onclick='buy(\"superComputer\")' class='martophack buy-bot'>Buy one for $700</button> <p id='superComputer-displaymax'>You are using 0/4</p> </div>"

} 
var ufo = {
	 price: 2000,
  value: 1,
  max: 2,
  amount: 0,
	unlock: 4,
  wakeup: 'manageUfo',
  name: 'ufo',
  code:' <img class=" itemimg ufo infinite" src="assets/img/ufoFlipper.png">',
	cardcode: "<div style='opacity:1'class='card'> <p>Alien Technology</p> <div class='bar slow' id='ufobar'></div> <hr class='blu thin'> <div class='container' id='ufoinfo'> <p>Borrow the technology from an intergalactic civilization to flip coins.<br>Flip Time: 1 Second<br> Money Per Flip: $1.00</p> </div> <br> <button  onclick='buy(\"ufo\")' class='martophack buy-bot'>Buy one for $2000</button> <p id='ufo-displaymax'>You are using 0/2</p> </div>"

} 
var antiGravity = {
	 price: 5000,
  value: 10,
  max: 1,
  amount: 0,
	unlock: 4,
  wakeup: 'manageantiGravity',
  name: 'antiGravity',
  code:' <img class=" itemimg antiGravity infinite" src="assets/img/antiGravityFlipper.png">',
	cardcode: "<div style='opacity:1'class='card'> <p>Anti-Gravity Flipper</p> <div class='bar slow' id='antiGravitybar'></div> <hr class='blu thin'> <div class='container' id='antiGravityinfo'> <p>Launch coins into space and let the nautral anti-gravity properties flip coins for you.<br>Flip Time: 60 Seconds<br> Money Per Flip: $10</p> </div> <br> <button  onclick='buy(\"antiGravity\")' class='martophack buy-bot'>Buy one for $5000</button> <p id='antiGravity-displaymax'>You are using 0/1</p> </div>"

} 

items.push(ecoflipper,bottleflip,magnetFlipper,superComputer,ufo,antiGravity)
