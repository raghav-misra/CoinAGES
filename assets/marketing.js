var normalContainer = document.getElementById("normalPromoContainer");
var specialContainer = document.getElementById("specialPromoContainer");
var boostDisplay = document.getElementById('boostDisplay')
var boostDisplayp = document.getElementById('boostDisplayp')

var contractLimits = {
	// All can be bought infinitely.
	"press-release": 0,
	"ed-promo": 0,
	"tv-promo": 0,
	"local-support": 0
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

function buyCampaign(id, price, boostValue,btn){
	
  id = id.trim();
  var priceHund = price * 100
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
  notifyMarketing("Success!", "The campaign has been launched.")
	clickBooster(boostValue, id,btn)
}

var specialContractLimits = {
	
}

// ↓↓↓ Call loadCampaigns() when marketing campaigns is unlocked. ↓↓↓

function loadCampaigns(){
	
}

function clickBooster(boost, cardId, btn, durationMS = 15000){
	var id = cardId
	var card = document.getElementById(cardId);
	card.style.backgroundColor = "rgba(255,255,255,0.5)"
	btn.disabled = true 
	btn.style.opacity = 0 
  player.clickboost = player.clickboost + boost;
	boostDisplayp.innerText = 'Marketing Boost: + $' + player.clickboost / 10
boostDisplay.style.opacity = 1
	setTimeout(function(){
		notify("Campaign Completed", "A marketing campaign has ended.");
		card.style.backgroundColor = "rgba(255,255,255,1)"
		btn.style.opacity = 1
		btn.disabled = false 
		player.clickboost = player.clickboost -	 boost;
		boostDisplayp.innerText = 'Marketing Boost: + $' + player.clickboost / 10
		if(player.clickboost <= 0){
			boostDisplay.style.opacity = 0
		}
	}, durationMS);
}



