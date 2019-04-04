function statusUpdate(obj){
  updateusage("document.getElementById('" + obj.name + "-displaymax')", obj.amount, obj.max,obj.value)
}

function createShopItem(name, title, desc1, desc2, desc3, desc4, price, bigUpgrade = false) {
	var num1 = shopCode.first + name + shopCode.second + title + shopCode.third;
	if(bigUpgrade){
		num1 = shopCode.first + name + shopCode.secondAlt + title + shopCode.third;
	}
	var num2 = desc1 + shopCode.fourth + desc2 + shopCode.fifth + desc3;
	var num3 = shopCode.sixth + desc4 + shopCode.seventh + name + shopCode.eighth;
	var num4 = price.toString() + shopCode.nineth + price.toString() + shopCode.tenth;
	var div = num1 + num2 + num3 + num4;
	container.innerHTML = container.innerHTML + div;
	fadeIn(document.getElementById(name));
}

//Random VARS
var dimeAllMaxIncreaseCost = 650;

var container = document.getElementById("shop-item-container");

var itemLimits = {
	"hover-flip": 0, // 1 Max
	"tutorial-gift": 0, // 1 Max
	"robot-max-increase": 0, // 5 Max
	"robo-mk2": 0, // 1 Max
	"human-max-increase": 0, // 5 Max
	"one-man-army": 0, // 1 Max
	"nickelupgrade": 0, // 1 Max
	"eco_max_increase": 0, // 2 Max
	"eco_mk2": 0, // 1 Max
	"bottle_max_increase": 0, // 2 Max
  "bottle_mk2": 0, // 1 Max
  "magnetFlipper_mk2" : 0, //Upgrades are all 0 max
  "superComputer_mk2" : 0,
  "ufo_mk2" : 0,
  "antiGravity_mk2" : 0,
  "preFlipped_mk2" : 0,
  "usMint_mk2" : 0,
  "infinity_mk2" : 0,
  "blockchain_mk2" : 0,
	"nickel-limit-increase": 0, // 1 Max
	"dime-dev": 0, // 1 Max
	"dime-all-max-increase": 0, // Infinite
  "quarter-upgrade": 0,
	"halfDollar-upgrade": 0,
  "Dollar-upgrade" : 0,
  "world-upgrade" : 0
}

var maxLimits = {
	"hover-flip": 1, // 1 Max
	"tutorial-gift": 1, // 1 Max
	"robot-max-increase": 5, // 5 Max
	"robo-mk2": 1, // 1 Max
	"human-max-increase": 5, // 5 Max
	"one-man-army": 1, // 1 Max
	"nickelupgrade": 1, // 1 Max
	"eco_max_increase": 2, // 2 Max
	"eco_mk2": 1, // 1 Max
	"bottle_max_increase": 2, // 2 Max
  "bottle_mk2": 1, // 1 Max
  "magnetFlipper_mk2" : 1, //Upgrades are all 1 max
  "superComputer_mk2" : 1,
  "ufo_mk2" : 1,
  "antiGravity_mk2" : 1,
  "preFlipped_mk2" : 1,
  "usMint_mk2" : 1,
  "infinity_mk2" : 1,
  "blockchain_mk2" : 1,
	"nickel-limit-increase": 1, // 1 Max
	"dime-dev": 1, // 1 Max
	"dime-all-max-increase": 90071992547409918, // Infinite
  "quarter-upgrade": 1, // 1 Max
	"halfDollar-upgrade": 1, // 1 Max
  "Dollar-upgrade" : 1,
  "world-upgrade" : 1
}

var shopCode = {
	first: "<div id='",
	// Item Codename
	second: "' class=\"shopcard-inline\"><h4 class=\"ttl\">",
	secondAlt: "' class=\"shopcard-inline big-upgrade\"><h4 class=\"ttl\">",
	// Item Title
	third: "</h4><hr class=\"blu thin\"><p class=\"desc\">",
	// Description Line 1
	fourth: "<br>",
	// Description Line 2
	fifth: "<br>",
	// Description Line 3
	sixth: "<br>",
	// Description Line 4
	seventh: "</p><button class=\"buy-now\" onclick=\"buyShopItem(\'",
	// Item Codename
	eighth: "', ",
	// Price
	nineth: ")\">Buy Now! ($",
	// ** price.toString() **
	tenth: ")</button></div>"
}

function deleteShopItem(id)
{

  document.getElementById(id).classList.add('hide')

}

function buyShopItem(id, price) {	//Not enough money
	id = id.trim();
	priceHund = price * 100
	if (player.money < priceHund) {
		notify("R&D Labs", "You can't afford that.")
		var idx = document.getElementById(id);
		idx.style.animation = "skew-no-shop 1s";
		setTimeout(function () {
			idx.style.animation = "none";
		}, 1000)
		return
	}
	// show confirm message
	document.getElementById('shopIcon').classList.remove('fa-wallet')
	document.getElementById('shopIcon').classList.add('fa-check')
	document.getElementById('shopIcon').classList.add('fa-check')
	document.getElementById('shopIcon').style.color = '#55efc4'
  document.getElementById('confirm').style.color = "#55efc4"
  document.getElementById('confirm').innerText = "Purchase Confirmed"
	player.money = player.money - priceHund;
	subtractWallet.style.background = "white"

setTimeout(function(){
		document.getElementById('shopIcon').classList.add('fa-wallet')
    document.getElementById('confirm').style.color = "white"
	document.getElementById('shopIcon').classList.remove('fa-check')
	document.getElementById('shopIcon').style.color = 'white'
  document.getElementById('confirm').innerText = "PayBud Balance"
	subtractWallet.style.background = "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)"

	}, 2000)
	upgradeBuySound.play();
  window.localStorage.setItem("itemz", JSON.stringify(itemLimits));
	switch (id) {
		case "hover-flip":
			deleteShopItem(id)
			coin.onmouseover = function () { coin.click() }
			itemLimits["hover-flip"]++
			hover_flip2 = true;
			return
		case "tutorial-gift":
			deleteShopItem(id)
			player.money = player.money + 100
			itemLimits["tutorial-gift"]++
			return
		case "robot-max-increase":
			itemLimits["robot-max-increase"]++
			if (itemLimits["robot-max-increase"] == 5) {
				deleteShopItem(id);
			}
			robot.max++
			statusUpdate(robot)
			return
		case "human-max-increase":
			itemLimits["human-max-increase"]++
			if (itemLimits["human-max-increase"] == 5) {
				deleteShopItem(id);
			}
			person.max++
			statusUpdate(person)
			return
		case "robo-mk2":
			itemLimits["robo-mk2"]++
			deleteShopItem(id);
			robot.value = 0.03;
      statusUpdate(robot)
			return
		case "one-man-army":
			itemLimits["one-man-army"]++
			deleteShopItem(id);
			person.value = 0.05;
      statusUpdate(person)
			return
		case "nickelupgrade":
			itemLimits["nickelupgrade"]++
			createNickelShop();
			return
		case "eco_max_increase":
			itemLimits["eco_max_increase"]++
			if (itemLimits["eco_max_increase"] == 2) {
				deleteShopItem(id);
			}
			ecoflipper.max++
			statusUpdate(ecoflipper)
			return
		case "eco_mk2":
			itemLimits["eco_mk2"]++
			deleteShopItem(id);
			ecoflipper.value = 0.22;
      statusUpdate(ecoflipper)
			return
    case "bottle_max_increase":
			itemLimits["bottle_max_increase"]++
			if (itemLimits["bottle_max_increase"] == 2) {
				deleteShopItem(id);
			}
			bottleflip.max++
			statusUpdate(bottleflip)
			return
    case "bottle_mk2":
			itemLimits["bottle_mk2"]++
			deleteShopItem(id);
			bottleflip.value = 0.42;
      statusUpdate(bottleflip)
      return
    case "magnetFlipper_mk2":
			itemLimits["magnetFlipper_mk2"]++
			deleteShopItem(id);
			magnetFlipper.value = 0.65;
      statusUpdate(magnetFlipper)
      return
    case "superComputer_mk2":
			itemLimits["superComputer_mk2"]++
			deleteShopItem(id);
			superComputer.value = 5;
      statusUpdate(superComputer)
      return
    case "ufo_mk2":
			itemLimits["ufo_mk2"]++
			deleteShopItem(id);
			ufo_mk2.max++
      statusUpdate(ufo)
      return
    case "antiGravity_mk2":
			itemLimits["antiGravity_mk2"]++
			deleteShopItem(id);
			antiGravity.max++
      statusUpdate(antiGravity)
      return
    case "usMint_mk2":
			itemLimits["usMint_mk2"]++
			deleteShopItem(id);
			usMint.max++
      statusUpdate(usMint)
      return
    case "preFlipped_mk2":
			itemLimits["preFlipped_mk2"]++
			deleteShopItem(id);
			preFlipped.value = 3.5;
      statusUpdate(preFlipped)
      return
    case "blockchain_mk2":
			itemLimits["blockchain_mk2"]++
			deleteShopItem(id);
			blockchain.value = 40;
      statusUpdate(blockchain)
      return
    case "infinity_mk2":
			itemLimits["infinity_mk2"]++
			deleteShopItem(id);
			infinity.value = 20;
      statusUpdate(infinity)
      return
		case "dime-dev":
			itemLimits["dime-dev"]++
			createDimeShop()
			return
		case "halfDollar-upgrade":
			itemLimits["halfDollar-upgrade"]++
			createHalfDollarShop()
			return
    case "Dollar-upgrade":
			itemLimits["Dollar-upgrade"]++
			createDollarShop()
			return
    case "world-upgrade":
			itemLimits["world-upgrade"]++
			createWorldShop()
			return
		case "dime-all-max-increase":
			itemLimits["dime-all-max-increase"]++
			bottleflip.max++
			statusUpdate(bottleflip)
			ecoflipper.max++
			statusUpdate(ecoflipper)
			person.max++
			statusUpdate(person)
			robot.max++
			statusUpdate(robot)
			magnetFlipper.max++
			statusUpdate(magnetFlipper)
			superComputer.max++
			statusUpdate(superComputer)
			var xd = dimeAllMaxIncreaseCost;
			document.getElementById(id).getElementsByClassName("buy-now")[0].onclick = function(){
				buyShopItem(id, dimeAllMaxIncreaseCost);
			}
			document.getElementById(id).getElementsByClassName("buy-now")[0].innerText = "Buy Now! ($" + dimeAllMaxIncreaseCost.toString() + ")";
			return
    case "quarter-upgrade":
      itemLimits["quarter-upgrade"]++
      createQuarterShop();

	}
}

var stageFuncs = ["console.log('Game Restored')", "setTimeout(function(){createNickelShop(false)},500)", "setTimeout(function(){createDimeShop(false)},600)", "setTimeout(function(){createQuarterShop(false)},700)", "setTimeout(function(){createHalfDollarShop(false)},800)", "setTimeout(function(){createDollarShop(false)},900)", "setTimeout(function(){createWorldShop(false)},1000)"];
// Functions for stage upgrade ^^

// Creating Shop Items

function createFreeGift() {
	createShopItem("tutorial-gift", "Free Gift", "A free gift from", "the secretary", "To jumpstart the ", "company!", 0);
}
function createWorldShop(headless = true){
  deleteShopItem("world-upgrade");
	nextstage(100,headless)
	endGame()
}
function createQuarterShop(headless = true) {
  nextstage(0.25,headless)
  deleteShopItem("quarter-upgrade");
	createShopItem("halfDollar-upgrade", "Half Dollar Exploration", "Expand the capabilities", "and influence of your", " company to quietly grow", "at a rapid pace.", 9000, true);
  deleteShopItem("dime-all-max-increase");
  ufo_mk2 = true
  antiGravity_mk2 = true

}
function createHalfDollarShop(headless = true) {
  nextstage(0.50,headless)
  deleteShopItem("halfDollar-upgrade")
  createShopItem("Dollar-upgrade", "The Golden Age", "Assemble the top executives", "into a single think tank", "to research and develop", "the final innovation.", 100000, true);
preFlipped_mk2 = true;
 usMint_mk2 = true;
}
function createDollarShop(headless = true){
  nextstage(1,headless)
  deleteShopItem("Dollar-upgrade")
  createShopItem("world-upgrade", "World Domination", "Use your mass resources", "and take down rival companies", "to seal your fate as the", "world's most powerful company.", 500000, true)
  infinity_mk2 = true;
  blockchain_mk2 = true;
}
function createNickelShop(headless = true) {
  nextstage(0.05,headless);
  deleteShopItem("nickelupgrade");
  nickel_upgrade = true;
	createShopItem("dime-dev", "Dime Development", "Invest your assets", "in improving efficiency", "and consumer outreach.", "<i>Unlocks Marketing Campaigns.</i>", 250, true);

	eco_mk2 = true;
  bottle_mk2 = true;
  bottle_max_increase = true;

}

function createDimeShop(headless = true) {
  nextstage(0.10,headless);
  deleteShopItem("dime-dev");
	createShopItem("dime-all-max-increase", "More of Everything!", "Increase the maximum", "limit of each", "type of purchasable", "auto-flipper by 1.", 650);
  createShopItem("quarter-upgrade", "Quarter Advancement Initiative", "Use the endless power", "of the space indusry", "to help your business", "flip <b>more coins faster.</b>", 2000, true);
	notify("New Unlock!", "Marketing Campaigns unlocked!")
	marketingbtn.disabled = false;
	loadCampaigns()
	setTimeout(function(){
		notify("New Unlock!", "Go back to see it!")
	}, 3000)
  magnetFlipper_mk2 = true
  superComputer_mk2 = true
}

function createRobotMk2() {
	createShopItem("robo-mk2", "Robots: Mark II", '"Borrow" SicroMoft\'s advanced', "upgrade that allows", " robots to flip", "3¢ every second.", 10);
}
//default shop items

createShopItem("robot-max-increase", "Raise Robot Quota", "The upgrade lets you", "increase the maximum", "amount of robo-flippers", "that you can purchase by 1.", 2);
createShopItem("human-max-increase", "More Workers", "This upgrade allows", "you to hire an", "extra human worker", "to flip coins for you.", 3.5);
createShopItem("nickelupgrade", "Nickel Research Program", "Research the next generation", "of coin-flipping technology.", "Upgrade your coherence", "and cost-effectiveness.", 50, true)
createShopItem("hover-flip", "HoverFlip™ by Zamazon", '"Borrow" technology from', " Zamazon to not only", " click, but hover over", "coins to flip them.", 0.5);