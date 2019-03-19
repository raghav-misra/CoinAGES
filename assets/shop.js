function fadeIn(element) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += 0.1;
    }, 10);
}

function fadeOut(element, del) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
						if(del)
							element.outerHTML = "";
        }
        element.style.opacity = op;
        op -= 0.1;
    }, 50);
}

var container = document.getElementById("shop-item-container");

var itemLimits = {
	"robot-max-increase": 0, // 5 Maximum
	"human-max-increase": 0, // 5 Maximum
	"hover-flip": 0, // 1 Maximum
	"tutorial-gift": 0, // 1 Maximum
	"robo-mk2": 0 // 1 Maximum
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

function createShopItem(name, title, desc1, desc2, desc3, desc4, price){
	var num1 = shopCode.first + name + shopCode.second + title + shopCode.third;
	var num2 = desc1 + shopCode.fourth + desc2 + shopCode.fifth + desc3;
	var num3 = shopCode.sixth + desc4 + shopCode.seventh + name + shopCode.eighth;
	var num4 = price.toString() + shopCode.nineth + price.toString() + shopCode.tenth;
	var div = num1 + num2 + num3 + num4;
	container.innerHTML = container.innerHTML + div;
	fadeIn(document.getElementById(name));
}

function deleteShopItem(id){
	fadeOut(document.getElementById(id), true);
}

function buyShopItem(id, price){	//Not enough money
	id = id.trim();
	priceHund = price * 100
	if(player.money < priceHund){
		notify("R&D Labs", "You can't afford that.")
		idx = document.getElementById(id);
		idx.style.animation = "skew-no-shop 1s";
		setTimeout(function(){
		idx.style.animation = "none";
		}, 1000)
		return
	}
	player.money = player.money - priceHund;

	switch(id){
		case "hover-flip":
			deleteShopItem("hover-flip")
			coin.onmouseover = function(){ coin.click() }
			itemLimits["hover-flip"]++
			notify("R&D Labs", "The item has been purchased!")
			return
		case "tutorial-gift":
			deleteShopItem("tutorial-gift")
			player.money = player.money + 100
			itemLimits["tutorial-gift"]++
			notify("R&D Labs", "You received $1.00!")
			return
		case "robot-max-increase":
			itemLimits["robot-max-increase"]++
			if(itemLimits["robot-max-increase"] == 5){
				deleteShopItem("robot-max-increase");
			}
			robot.max++
			updateusage(robot.name,robot.amount,robot.max)
			fadeIn(document.getElementById("robot-max-increase"))
			notify("R&D Labs", "The item has been purchased!")
			return
		case "human-max-increase":
			itemLimits["robot-max-increase"]++
			if(itemLimits["robot-max-increase"] == 5){
				deleteShopItem("robot-max-increase");
			}
			robot.max++
			updateusage(robot.name,robot.amount,robot.max)
			fadeIn(document.getElementById("robot-max-increase"))
			notify("R&D Labs", "The item has been purchased!")
			return
		case "robo-mk2":
			itemLimits["robo-mk2"]++
			if(itemLimits["robo-mk2"] == 1){
				deleteShopItem("robo-mk2");
			}
			robot.value = 0.03;
			fadeIn(document.getElementById("robo-mk2"))
			notify("R&D Labs", "The item has been purchased!")
			return
	}
}

function createFreeGift(){
	createShopItem("tutorial-gift", "Your Free Gift", "Great job on finishing", "the tutorial.", "One dollar is",  "just a click away!", 0);
}

function createRobotMk2(){
	createShopItem("robo-mk2", "Robots: Mark II", "Sicromoft C.E.O Gill Bates", "has developed a way", "for robots to flip", "3¢ every second.", 10);
}

createShopItem("robot-max-increase", "Raise Robot Quota", "The upgrade lets you", "increase the maximum", "amount of robo-flippers", "that you can purchase by 1.", 2);

createShopItem("human-max-increase", "More Workers", "This upgrade allows", "you to hire an", "extra human worker", "to flip coins for you.", 3.5);

createShopItem("hover-flip", "HoverFlip™ by Zamazon", "Using the latest in flipping-tech,", "Jeph Besoz has created a way", "to not click, but hover over", "coins to flip them.", 0.5);





