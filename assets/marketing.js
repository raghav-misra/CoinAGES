// Boost Display Elements/Vars
var boostDisplay = document.getElementById('boostDisplay')
var boostDisplayp = document.getElementById('boostDisplayp')
var timeout = true;
var tutorial = true; //On campaign load run tutorial?
function loadCampaigns(){
  if(tutorial){
    createAlert('Secretary', "Already finished researching the dime? Great! This is the perfect time to show you the marketing team I just assembled.", alertImages.info,true)
    createAlert('Secretary', "I assure you that everyone on the team is very experienced, they will handle everything for you. ", alertImages.info,false)
    createAlert('Secretary', "To launch a campaign, <b class='bold'> go to the main menu and click 'Marketing Campaigns</b>'", alertImages.info,false)
    clickMe(marketingbtn)
  }
}

function clickBooster(boost, cardId, btn, durationMS = 60000){
  if(timeout){
    timeout = false
		var id = cardId
		var card = document.getElementById(cardId);
		card.style.backgroundColor = "rgb(58, 193, 98)"
		card.style.color = "white";
		card.querySelector("hr").classList.remove("blu");
		btn.disabled = true 
		btn.style.opacity = 0 
		player.clickboost = player.clickboost + boost;
		boostDisplayp.innerText = 'Boost: +' + Math.round(player.clickboost)  + "¢";
		boostDisplay.style.opacity = 1
		removeBoost(durationMS, card, btn, boost)
		setTimeout(function(){timeout = true}, durationMS)
  }
	else{
    closenotify()
		notify('Timeout', 'Please wait a couple seconds before launching a new campaign')
  }
}

function clickBoosterPerma(cardId, boost){
  notifyMarketing("Success!", "The campaign has been launched.")
  var id = cardId
  var card = document.getElementById(cardId);
  player.pclickboost += boost
  player.clickboost = player.clickboost + boost;
  boostDisplayp.innerText = 'Boost: +' + Math.round(player.clickboost)  + "¢";
  boostDisplay.style.opacity = 1
  player.purchasedCampaigns.push(cardId)
  fadeOut(card);
}

function removeBoost(time, card, btn, boost){
setTimeout(function(){
		notify("Campaign Completed", "A marketing campaign has ended.");
		card.style.backgroundColor = "rgba(255,255,255,1)"
		btn.style.opacity = 1
		btn.disabled = false;
		card.querySelector("hr").classList.add("blu");
		card.style.color = "black";
		card.style.backgroundColor = "white"
    player.clickboost -=  Math.round(boost * 100) / 100
		boostDisplayp.innerText = 'Boost: +' + Math.round(player.clickboost)  + "¢";
		if(player.clickboost < 0 || player.clickboost == 0){
			boostDisplay.style.opacity = 0
		}
	}, time);
}

function notifyMarketing(header, description, flip = true){
  noti.style.right = 'calc(100% + 300px)'
  nheader.innerText = header
  ndescription.innerText = description
  noti.style.left = 'calc(100% - 300px)'
	setTimeout(function(){ upgradeBuySound.play(); }, 1000)
  if(flip == true)
    setTimeout(closenotify,2000)
}

function buyCampaign(id, price, boostValue, btn){
  id = id.trim();
  var priceHund = price * 100
	if (player.money < priceHund) {
		notify("Marketing", "You can't afford that.")
		var idx = document.getElementById(id);
		idx.style.animation = "skew-no-shop 1s";
		setTimeout(function () {
			idx.style.animation = "none";
		}, 1000)
		return
	}
	player.money = player.money - priceHund;
	clickBooster(boostValue, id,btn)
}

function buySpecialCampaign(id, price, boostValue){
  id = id.trim();
  var priceHund = price * 100
	if (player.money < priceHund) {
		notify("Marketing", "You can't afford that.")
		var idx = document.getElementById(id);
		idx.style.animation = "skew-no-shop 1s";
		setTimeout(function () {
			idx.style.animation = "none";
		}, 1000)
		return
	}
	player.money = player.money - priceHund;
	clickBoosterPerma(id, boostValue)
}

/* ↓↓↓ Call loadCampaigns() when marketing campaigns is unlocked. ↓↓↓ Special Campaign stuff */

var baseText = "<div id=\"<replace with=id>\" class=\"campaign-card special\"><h4 class=\"ttl\"><replace with=title></h4><hr class=\"blu thin\"><p class=\"desc\"><replace with=desc1><br><replace with=desc2><br> <replace with=desc3><br><replace with=desc4><br><i><replace with=descInfo></i></p><img src=\"../assets<replace with=img>\"><br><button class=\"buy-now\" onclick=\"buySpecialCampaign('<replace with=id>', <replace with=price>, <replace with=boost>)\">Launch Promo ($<replace with=price>)</button></div>"

var specialContainer = document.getElementById("specialPromoContainer");

function createCampaign(id, title, desc1, desc2, desc3, desc4, descInfo, imgSrc, price, boost){
	var cardCode = baseText.replaceAll("<replace with=id>", id).replaceAll("<replace with=title>", title).replaceAll("<replace with=desc1>", desc1).replaceAll("<replace with=desc2>", desc2).replaceAll("<replace with=desc3>", desc3).replaceAll("<replace with=desc4>", desc4).replaceAll("<replace with=descInfo>", descInfo).replaceAll("<replace with=img>", imgSrc).replaceAll("<replace with=price>", price.toString()).replaceAll("<replace with=boost>", boost.toString());
	specialContainer.innerHTML = specialContainer.innerHTML + cardCode;
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

createCampaign("nfa-promo", "NFA Sponsorship", "Sponsor the National Football", "Association and run ads during", "games. The NFA will also utilize", "your coin-flipping app for games.", "Permanent: +0.10 per manual flip", "/img/nfalogo.png", 500, 10);

createCampaign("amusement-park", "Build A Theme Park", "Create your very own", "coin-themed wonderland for", "visitors, money, and most", "importantly free marketing!", "Permanent: +0.15 per manual flip", "/img/amusementPark.png", 750, 15);

createCampaign("world-partner", "Worldwide Outreach", "Partner with companies", "that have power in other", "countries to gain", "good reputations there.", "Permanent: +0.20 per manual flip", "/img/worldPartners.png", 1000, 20);

createCampaign("coffee-partner", "MeteorBucks Partnership", "Partner with MeteorBucks,", "Coffee LLC. to provide", "free coffee to customers", "when they use your services.", "Permanent: +0.25 per manual flip", "/img/meteorbuckPartner.png", 1250, 25);

