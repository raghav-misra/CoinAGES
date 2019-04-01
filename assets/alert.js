/* Element Declaration */
var alertModal = document.getElementById("alert");
var alertTitle = document.getElementById("aheader");
var alertDesc = document.getElementById("adesc");
var alertImage = document.getElementById("alertpic");

/* 'Create' and 'Destroy' functions */
function createAlert(title, text, image){
  alertTitle.innerText = title.trim();
  alertDesc.innerText = text.trim();
  alertImage.src = image;
  alertModal.style.display = "inline-block";
  var op = 0.1;  // initial opacity
	var timer = setInterval(function () {
		if (op >= 1) {
			clearInterval(timer);
		}
		alertModal.style.opacity = op;
		op += 0.1;
	}, 10);
}

function destroyAlert(){
  var op = 1.1;  // initial opacity
	var timer = setInterval(function(){
		if (op <= 0.1) {
			clearInterval(timer);
			alertModal.style.display = "none";
		}
		alertModal.style.opacity = op;
		op -= 0.1;
	}, 50);
}

createAlert("Investigation!", "The government has started an investigation on your company.", "./assets/img/2.png");

