function fadeIn(element) {
	var op = 0.1;  // initial opacity
	var timer = setInterval(function () {
		if (op >= 1) {
			clearInterval(timer);
		}
		element.style.opacity = op;
		op += 0.1;
	}, 10);
}

function statusUpdate(obj){
  updateusage("document.getElementById('" + obj.name + "-displaymax')", obj.amount, obj.max)
  return "no u :)";
}

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
  "bottle-mk2": 0 // 1 Max
}

var shopCode = {
	first: "<div id='",
	// Item Codename
	second: "' class=\"shopcard-inline\"><h4 class=\"ttl\">",
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

function createShopItem(name, title, desc1, desc2, desc3, desc4, price) {
	var num1 = shopCode.first + name + shopCode.second + title + shopCode.third;
	var num2 = desc1 + shopCode.fourth + desc2 + shopCode.fifth + desc3;
	var num3 = shopCode.sixth + desc4 + shopCode.seventh + name + shopCode.eighth;
	var num4 = price.toString() + shopCode.nineth + price.toString() + shopCode.tenth;
	var div = num1 + num2 + num3 + num4;
	container.innerHTML = container.innerHTML + div;
	fadeIn(document.getElementById(name));
}

function deleteShopItem(id)
{
	var element = document.getElementById(id);
  console.log(element)
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
		idx = document.getElementById(id);
		idx.style.animation = "skew-no-shop 1s";
		setTimeout(function () {
			idx.style.animation = "none";
		}, 1000)
		return
	}
	player.money = player.money - priceHund;

	switch (id) {
		case "hover-flip":
			deleteShopItem("hover-flip")
			coin.onmouseover = function () { coin.click() }
			itemLimits["hover-flip"]++
			hover_flip2 = true;
			notify("R&D Labs", "The item has been purchased!", true, true);
			return
		case "tutorial-gift":
			deleteShopItem("tutorial-gift")
			player.money = player.money + 100
			itemLimits["tutorial-gift"]++
			notify("R&D Labs", "You received $1.00!", true, true)
			return
		case "robot-max-increase":
			itemLimits["robot-max-increase"]++
			if (itemLimits["robot-max-increase"] == 5) {
				deleteShopItem("robot-max-increase");
			}
			robot.max++
			statusUpdate(robot)
			notify("R&D Labs", "The item has been purchased!", true, true);
			return
		case "human-max-increase":
			itemLimits["human-max-increase"]++
			if (itemLimits["human-max-increase"] == 5) {
				deleteShopItem("human-max-increase");
			}
			person.max++
			statusUpdate(person)
			notify("R&D Labs", "The item has been purchased!", true, true);
			return
		case "robo-mk2":
			itemLimits["robo-mk2"]++
			deleteShopItem("robo-mk2");
			robot.value = 0.03;
			notify("R&D Labs", "The item has been purchased!", true, true);
			return
		case "one-man-army":
			itemLimits["one-man-army"]++
			deleteShopItem("one-man-army");
			person.value = 0.05;
			notify("R&D Labs", "The item has been purchased!", true, true);
			return
		case "nickelupgrade":
		  itemLimits["nickelupgrade"]++
			nextstage(0.05);
			createNickelShop();
			nickel_upgrade = true;
			notify("R&D Labs", "The item has been purchased!", true, true);
       deleteShopItem("nickelupgrade")
			return
		case "eco-max-increase":
			itemLimits["eco-max-increase"]++
			if (itemLimits["eco-max-increase"] == 2) {
				deleteShopItem("eco-max-increase");
			}
			ecoflipper.max++
			statusUpdate(ecoflipper)
			notify("R&D Labs", "The item has been purchased!", true, true);
			return
		case "eco-mk-2":
			itemLimits["eco-mk-2"]++
			deleteShopItem("eco-mk-2");
			ecoflipper.value = 0.12;
			notify("R&D Labs", "The item has been purchased!", true, true);
			return
    case "bottle-max-increase":
      itemLimits["bottle-max-increase"]++
			if (itemLimits["bottle-max-increase"] == 2) {
				deleteShopItem("bottle-max-increase");
			}
			bottleflip.max++
			statusUpdate(bottleflip)
			notify("R&D Labs", "The item has been purchased!", true, true);
			return
    case "bottle-mk2":
      itemLimits["bottle-mk2"]++
			deleteShopItem("bottle-mk2");
			ecoflipper.value = 0.22;
			notify("R&D Labs", "The item has been purchased!", true, true);
      return
	}
}

// Creating Shop Items

function createFreeGift() {
	createShopItem("tutorial-gift", "Your Free Gift", "Great job on finishing", "the tutorial.", "One dollar is", "just a click away!", 0);
}

function createNickelShop() {
	createShopItem("eco-max-increase", "More Eco-Flippers", "The upgrade lets you", "increase the maximum", "amount of eco-flippers", "that you can purchase by 1.", 25);
  createShopItem("bottle-max-increase", "Extra Bottles", "Koka-Kola™ has agreed", "to increase the", "limit on bottles", "you can purchase.", 100);
	eco_mk2 = true;
  bottle_mk2 = true;
}

function createRobotMk2() {
	createShopItem("robo-mk2", "Robots: Mark II", "Sicromoft C.E.O Gill Bates", "has developed a way", "for robots to flip", "3¢ every second.", 10);
}
//default shop items

createShopItem("robot-max-increase", "Raise Robot Quota", "The upgrade lets you", "increase the maximum", "amount of robo-flippers", "that you can purchase by 1.", 2);
createShopItem("human-max-increase", "More Workers", "This upgrade allows", "you to hire an", "extra human worker", "to flip coins for you.", 3.5);
createShopItem("nickelupgrade", "Nickel Research Program", "Research the next generation", "of coin-flipping technology.", "Upgrade your coherence", "and cost-effectiveness.", 50)
createShopItem("hover-flip", "HoverFlip™ by Zamazon", "Using the latest in flipping-tech,", "Jeph Besoz has created a way", "to not click, but hover over", "coins to flip them.", 0.5);




