var normalContainer = document.getElementById("normalPromoContainer");
var specialContainer = document.getElementById("specialPromoContainer");
var boostDisplay = document.getElementById('boostDisplay')
var boostDisplayp = document.getElementById('boostDisplayp')
var timeout = true;

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
		notify("Marketing", "You can't afford that.")
		var idx = document.getElementById(id);
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

function clickBooster(boost, cardId, btn, durationMS = 12000){
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
	boostDisplayp.innerText = 'Marketing Boost: +' + player.clickboost * 100  + "¢";
	boostDisplay.style.opacity = 1
  removeBoost(durationMS, card, btn, boost)
  setTimeout(function(){timeout = true}, 5000)
  }else{
    closenotify()
 notify('Timeout', 'Please wait a couple seconds before launching a new campaign')
  }
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
		boostDisplayp.innerText = 'Marketing Boost: +' + player.clickboost * 100  + "¢";
		if(player.clickboost < 0 || player.clickboost == 0){
			boostDisplay.style.opacity = 0
		}
	}, time);


}


