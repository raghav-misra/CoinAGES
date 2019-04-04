  //Settings script
var stage = 1
var items = []
var player = {
  money: 0,
  clickboost: 0.00,
  clickvalue: 0.01,
  icon: "./assets/img/1.png",
  endStage: false,
  end: false
  }
//Industry
var industry = {
  Zamazon: {
    value: 250000,
    futurevalue: 0,
    change: '+',
  },
  Sicromoft: {
    value: 200000,
    futurevalue: 0,
    change: '+',
  },
  Coinhype: {
    value: 100000,
    futurevalue: 0,
    change: '-',
  },
  Randomize: {
    value: 80000,
    futurevalue: 0,
    change: '+',
  },
  FlippyOnline: {
    value: 10000,
    futurevalue: 0,
    change: '+',
  },
  LuxFlip: {
    value: 1000,
    futurevalue: 0,
    change: '-',
  },
  CoinAGES: {
    value: 0,
    futurevalue: 0,
    change: '+',
  }
}
const iorignal = {
  Zamazon: {
    value: 250000,
    futurevalue: 0,
    change: '+',
  },
  Sicromoft: {
    value: 200000,
    futurevalue: 0,
    change: '+',
  },
  Coinhype: {
    value: 100000,
    futurevalue: 0,
    change: '-',
  },
  Randomize: {
    value: 80000,
    futurevalue: 0,
    change: '+',
  },
  FlippyOnline: {
    value: 10000,
    futurevalue: 0,
    change: '+',
  },
  LuxFlip: {
    value: 1000,
    futurevalue: 0,
    change: '-',
  },
  CoinAGES: {
    value: 0,
    futurevalue: 0,
    change: '+',
  }
}
var industryCompanies = ['Zamazon','Sicromoft','Coinhype','Randomize','FlippyOnline','LuxFlip','CoinAGES']
var leadingCompanies = ['Zamazon','Sicromoft','Coinhype','Randomize','FlippyOnline','LuxFlip','CoinAGES']
//Objects
var robot = {
  price: 1,
  unlock: 0,
  value: 0.01,
  max: 10,
  amount: 0,
  wakeup: 'managerobot',
  name: 'robot',
  code: ' <img class=" itemimg animated jello infinite" src="assets/img/robot.png">'
} 
var person = {
  price: 2,
  unlock: 0,
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
	 price: 700,
  value: 0.60,
  max: 4,
  amount: 0,
	unlock: 3,
  wakeup: 'manageMagnetFlipper',
  name: 'magnetFlipper',
  code:' <img class=" itemimg magnetflipper infinite" src="assets/img/magnet.png">',
	cardcode: "<div style='opacity:1'class='card'> <p>Magnet Flipper</p> <div class='bar' id='magnetFlipperbar'></div> <hr class='blu thin'> <div class='container' id='magnetFlipperinfo'> <p>Attach coins to magnets and use the Earth's magnetic field to flip coins.<br>Flip Time: 1 Second<br> Money Per Flip: $0.60</p> </div> <br> <button  onclick='buy(\"magnetFlipper\")' class='martophack buy-bot'>Buy one for $700</button> <p id='magnetFlipper-displaymax'>You are using 0/5</p> </div>"

} 
var superComputer = {
	 price: 200,
  value: 3,
  max: 4,
  amount: 0,
	unlock: 3,
  wakeup: 'managesuperComputer',
  name: 'superComputer',
  code:' <img class=" itemimg superComputer infinite" src="assets/img/superpc.png">',
	cardcode: "<div style='opacity:1'class='card'> <p>Super Computer</p> <div class='bar slow' id='superComputerbar'></div> <hr class='blu thin'> <div class='container' id='superComputerinfo'> <p>Build a cluster of ultra-advanced computer cluster to do the digitally impossible and generate truly random coin flip results.<br>Flip Time: 60 Seconds<br> Money Per Flip: $3.00</p> </div> <br> <button  onclick='buy(\"superComputer\")' class='martophack buy-bot'>Buy one for $200</button> <p id='superComputer-displaymax'>You are using 0/4</p> </div>"

} 
var ufo = {
	 price: 3000,
  value: 1,
  max: 2,
  amount: 0,
	unlock: 4,
  wakeup: 'manageUfo',
  name: 'ufo',
  code:' <img class=" itemimg ufo infinite" src="assets/img/ufoFlipper.png">',
	cardcode: "<div style='opacity:1'class='card'> <p>Alien Technology</p> <div class='bar slow' id='ufobar'></div> <hr class='blu thin'> <div class='container' id='ufoinfo'> <p>Borrow the technology from an intergalactic civilization to flip coins.<br>Flip Time: 1 Second<br> Money Per Flip: $1.00</p> </div> <br> <button  onclick='buy(\"ufo\")' class='martophack buy-bot'>Buy one for $3000</button> <p id='ufo-displaymax'>You are using 0/2</p> </div>"

} 
var antiGravity = {
	 price: 1000,
  value: 10,
  max: 1,
  amount: 0,
	unlock: 4,
  wakeup: 'manageantiGravity',
  name: 'antiGravity',
  code:' <img class=" itemimg antiGravity infinite" src="assets/img/antiGravityFlipper.png">',
	cardcode: "<div style='opacity:1'class='card'> <p>Anti-Gravity Flipper</p> <div class='bar slow' id='antiGravitybar'></div> <hr class='blu thin'> <div class='container' id='antiGravityinfo'> <p>Launch coins into space and let the nautral anti-gravity properties flip coins for you.<br>Flip Time: 60 Seconds<br> Money Per Flip: $10</p> </div> <br> <button  onclick='buy(\"antiGravity\")' class='martophack buy-bot'>Buy one for $1000 </button> <p id='antiGravity-displaymax'>You are using 0/1</p> </div>"

} 
var preFlipped = {
	 price: 20000,
  value: 3,
  max: 1,
  amount: 0,
	unlock: 5,
  wakeup: 'managepreFlipped',
  name: 'preFlipped',
  code:' <img class=" itemimg preFlipped infinite" src="assets/img/preFlipped.png">',
	cardcode: "<div style='opacity:1'class='card'> <p>Pre Flipped Coins</p> <div class='bar slow' id='preFlippedbar'></div> <hr class='blu thin'> <div class='container' id='preFlippedinfo'> <p>Create and flip coins with only one side for max efficiency. It's not cheating if you don't get caught<br>Flip Time: 1 Second<br> Money Per Flip: $3</p> </div> <br> <button  onclick='buy(\"preFlipped\")' class='martophack buy-bot'>Buy one for $20000</button> <p id='preFlipped-displaymax'>You are using 0/1</p> </div>"

}
var usMint = {
	 price: 12000,
  value: 5,
  max: 2,
  amount: 0,
	unlock: 5,
  wakeup: 'manageusMint',
  name: 'usMint',
  code:' <img class=" itemimg usMint infinite" src="assets/img/usMint.png">',
	cardcode: "<div style='opacity:1'class='card'> <p>Unified States Mint</p> <div class='bar slow' id='usMintbar'></div> <hr class='blu thin'> <div class='container' id='usMintinfo'> <p>Buy out the minting capacity of the Unified States and convert them into coin flipping facilities.<br>Flip Time: 60 Seconds<br> Money Per Flip: $5</p> </div> <br> <button  onclick='buy(\"usMint\")' class='martophack buy-bot'>Buy one for $12000</button> <p id='usMint-displaymax'>You are using 0/2</p> </div>"

} 
var infinity = {
	 price: 100000,
  value: 10,
  max: 1,
  amount: 0,
	unlock: 6,
  wakeup: 'manageinfinity',
  name: 'infinity',
  code:' <img class=" itemimg infinity infinite" src="assets/img/infinity.png">',
	cardcode: "<div style='opacity:1'class='card'> <p>Infinium Flipper</p> <div class='bar slow' id='infinitybar'></div> <hr class='blu thin'> <div class='container' id='infinityinfo'> <p>Break the laws of life, time, and the universe and develop a coin that flips itself.<br>Flip Time: 1 Second<br> Money Per Flip: $10</p> </div> <br> <button  onclick='buy(\"infinity\")' class='martophack buy-bot'>Buy one for $100000</button> <p id='infinity-displaymax'>You are using 0/1</p> </div>"

} 
var blockchain = {
	 price: 60000,
  value: 20,
  max: 4,
  amount: 0,
	unlock: 6,
  wakeup: 'manageblockchain',
  name: 'blockchain',
  code:' <img class=" itemimg blockchain infinite" src="assets/img/blockchain.png">',
	cardcode: "<div style='opacity:1'class='card'> <p>Blockchain Flipper</p> <div class='bar slow' id='blockchainbar'></div> <hr class='blu thin'> <div class='container' id='blockchaininfo'> <p>Create a blockchain system that allows people from around the world to submit and receive coinflips ... for a fee<br>Flip Time: 60 Seconds<br> Money Per Flip: $20</p> </div> <br> <button  onclick='buy(\"blockchain\")' class='martophack buy-bot'>Buy one for $60000</button> <p id='blockchain-displaymax'>You are using 0/4</p> </div>"

} 
var sicromoft = {
  price: 200000,
 value: 1000,
 max: 1,
 amount: 0,
 unlock: 7,
 wakeup: 'managesicromoft',
 name: 'sicromoft',
 code:' <img class=" itemimg company infinite" src="assets/img/sicromoft.png">',
 cardcode: "<div style='opacity:1'class='card'> <p>Sicromoft</p> <div class='bar slow' id='sicromoftbar'></div> <hr class='blu thin'> <div class='container' id='sicromoftinfo'> <p>Buy the technology company, Sicromoft, and drastically expand your capabilities <br>Flip Time: 1 Second<br> Money Per Flip: $1000</p> </div> <br> <button  onclick='buy(\"sicromoft\")' class='martophack buy-bot'>Buy one for $200000</button> <p id='sicromoft-displaymax'>You are using 0/1</p> </div>"

}
var zamazon = {
  price: 200000,
 value: 1000,
 max: 1,
 amount: 0,
 unlock: 7,
 wakeup: 'managezamazon',
 name: 'zamazon',
 code:' <img class=" itemimg company infinite" src="assets/img/zamazon.png">',
 cardcode: "<div style='opacity:1'class='card'> <p>Zamazon</p> <div class='bar slow' id='zamazonbar'></div> <hr class='blu thin'> <div class='container' id='zamazoninfo'> <p>Buy the technology company, Zamazon, and drastically expand your capabilities <br>Flip Time: 1 Second<br> Money Per Flip: $1000</p> </div> <br> <button  onclick='buy(\"zamazon\")' class='martophack buy-bot'>Buy one for $200000</button> <p id='zamazon-displaymax'>You are using 0/1</p> </div>"

}
items.push(robot,person,ecoflipper,bottleflip,magnetFlipper,superComputer,ufo,antiGravity,usMint,preFlipped,infinity,blockchain,sicromoft,zamazon)
