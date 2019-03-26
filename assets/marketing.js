var normalContainer = document.getElementById("normalPromoContainer");
var specialContainer = document.getElementById("specialPromoContainer");

var contractLimits = {
}


var campCode = {
	first: "<div id='nfa' class='marketing-inline'><h3>",
	// Campaign Title
	second: "</h3><hr class='blu'></hr><p>",
	// Desc 1
	third: "<br>",
	// Desc 2
	fourth: "<br>",
	// Desc 3
	fifth: "</p><img src='",
	// Image Location
	sixth: "'><br><button class='buy-now' onclick='buyCampaign(",
	// 
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



// ↓↓↓ Call loadCampaigns() when marketing campaigns is unlocked. ↓↓↓

function loadCampaigns(){
	
}



