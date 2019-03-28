var normalContainer = document.getElementById("normalPromoContainer");
var specialContainer = document.getElementById("specialPromoContainer");

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

function buyCampaign(id, price){
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
  notifyMarketing("Success!", "The campaign has been launched.")
  switch (id) {
    case "press-release":
      return
    case "ed-promo":
      return
    case "tv-promo":
      return
    case "local-support":
      return
  }
}

var specialContractLimits = {
	
}

// ↓↓↓ Call loadCampaigns() when marketing campaigns is unlocked. ↓↓↓

function loadCampaigns(){
	
}



