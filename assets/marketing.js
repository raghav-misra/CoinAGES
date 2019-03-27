var normalContainer = document.getElementById("normalPromoContainer");
var specialContainer = document.getElementById("specialPromoContainer");

var contractLimits = {
	// All can be bought infinitely.
	"press-release": 0,
	"ed-promo": 0,
	"tv-promo": 0,
	"local-support": 0
}

var specialContractLimits = {
	
}

var campCode = {

}

function createMarketing(name, title, desc1, desc2, desc3, desc4, price, bigUpgrade = false) {
	// fadeIn(document.getElementById(name));
}

function deleteCampaign(id){ 
	deleteShopItem(id); 
}

function buyCampaign(id, price) {	//Not enough money
	id = id.trim();
}

function buySpecialCampaign(id, price){
	id = id.trim();
}



// ↓↓↓ Call loadCampaigns() when marketing campaigns is unlocked. ↓↓↓

function loadCampaigns(){
	
}



