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
	"eco-max-increase": 0, // 2 Max
	"eco-mk-2": 0, // 1 Max
	"bottle-max-increase": 0, // 2 Max
  "bottle-mk2": 0, // 1 Max
	"nickel-limit-increase": 0, // 1 Max
	"dime-dev": 0, // 1 Max
	"dime-all-max-increase": 0, // Infinite
  "quarter-upgrade": 0,
	"halfDollar-upgrade": 0,
  "Dollar-upgrade" : 0
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
	var element = document.getElementById(id);
	element.getElementsByClassName("buy-now")[0].disabled = true;
	var returnValue = element.outerHTML;
	var op = 1;  // initial opacity
	var timer = setInterval(function(){
		if (op <= 0.1) {
			clearInterval(timer);
			element.parentNode.removeChild(element)
		}
		element.style.opacity = op;
		op -= 0.1;
	}, 50);
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
			nextstage(0.05);
			createNickelShop();
			nickel_upgrade = true;
			deleteShopItem(id)
			return
		case "eco-max-increase":
			itemLimits["eco-max-increase"]++
			if (itemLimits["eco-max-increase"] == 2) {
				deleteShopItem(id);
			}
			ecoflipper.max++
			statusUpdate(ecoflipper)
			return
		case "eco-mk-2":
			itemLimits["eco-mk-2"]++
			deleteShopItem(id);
			ecoflipper.value = 0.12;
      statusUpdate(ecoflipper)
			return
    case "bottle-max-increase":
      itemLimits["bottle-max-increase"]++
			if (itemLimits["bottle-max-increase"] == 2) {
				deleteShopItem(id);
			}
			bottleflip.max++
			statusUpdate(bottleflip)
			return
    case "bottle-mk2":
      itemLimits["bottle-mk2"]++
			deleteShopItem(id);
			ecoflipper.value = 0.22;
      statusUpdate(bottleflip)
      return
		case "dime-dev":
			itemLimits["dime-dev"]++
			createDimeShop()
			deleteShopItem(id)
			return
		case "halfDollar-upgrade":
			itemLimits["halfDollar-upgrade"]++
			createHalfDollarShop()
			deleteShopItem(id)
			return
    case "Dollar-upgrade":
			itemLimits["Dollar-upgrade"]++
			createDollarShop()
			deleteShopItem(id)
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
      createQuarterShop();
			deleteShopItem(id);

	}
}

// Creating Shop Items

function createFreeGift() {
	createShopItem("tutorial-gift", "Your Free Gift", "Great job on finishing", "the tutorial.", "One dollar is", "just a click away!", 0);
}

function createQuarterShop() {
	nextstage(0.25)
	createShopItem("halfDollar-upgrade", "Half Dollar Exploration", "Expand the capabilities", "and influence of your", " company to quietly grow", "at a rapid pace.", 10000, true);
  deleteShopItem("dime-all-max-increase");
}
function createHalfDollarShop() {
	nextstage(0.50)
  createShopItem("Dollar-upgrade", "The Golden Age", "Assemble the top executives", "into a single think tank", "to research and develop", "the final innovation.", 100000, true);
}
function createDollarShop(){
  nextstage(1)
}
function createNickelShop() {
	createShopItem("dime-dev", "Dime Development", "Invest your assets", "in improving efficiency", "and consumer outreach.", "<i>Unlocks Marketing Campaigns.</i>", 250, true);
  createShopItem("bottle-max-increase", "Extra Bottles", "Koka-Kola™ has agreed", "to increase the", "limit on bottles", "you can purchase.", 100);
	eco_mk2 = true;
  bottle_mk2 = true;
}

function createDimeShop() {
	nextstage(0.10);
	createShopItem("dime-all-max-increase", "More of Everything!", "Increase the maximum", "limit of each", "type of purchasable", "auto-flipper by 1.", 650);
  createShopItem("quarter-upgrade", "Quarter Advancement Initiative", "Use the endless power", "of the space indusry", "to help your business", "flip <b>more coins faster.</b>", 3000, true);
	notify("New Unlock!", "Marketing Campaigns unlocked!")
	marketingbtn.disabled = false;	
	loadCampaigns()
	setTimeout(function(){
		notify("New Unlock!", "Go back to see it!")
	}, 3000)
}

function createRobotMk2() {
	createShopItem("robo-mk2", "Robots: Mark II", "Sicromoft C.E.O Gill Bates", "has developed a way", "for robots to flip", "3¢ every second.", 10);
}
//default shop items

createShopItem("robot-max-increase", "Raise Robot Quota", "The upgrade lets you", "increase the maximum", "amount of robo-flippers", "that you can purchase by 1.", 2);
createShopItem("human-max-increase", "More Workers", "This upgrade allows", "you to hire an", "extra human worker", "to flip coins for you.", 3.5);
createShopItem("nickelupgrade", "Nickel Research Program", "Research the next generation", "of coin-flipping technology.", "Upgrade your coherence", "and cost-effectiveness.", 50, true)
createShopItem("hover-flip", "HoverFlip™ by Zamazon", "Using the latest in flipping-tech,", "Jeph Besoz has created a way", "to not click, but hover over", "coins to flip them.", 0.5);




