/* Element Declaration */
var alertModal = document.getElementById("alert");
var alertTitle = document.getElementById("aheader");
var alertDesc = document.getElementById("adesc");
var alertImage = document.getElementById("alertpic");
var alertQueue = []
var alertStatus = false

/* CDN Links Object */
var alertImages = {
  cancelX: "https://res.cloudinary.com/obliv-cf/image/upload/v1554145971/CoinAGES/bad_cancel.png",
  info: "https://res.cloudinary.com/obliv-cf/image/upload/v1554145928/CoinAGES/info.png",
  checkBox: "https://res.cloudinary.com/obliv-cf/image/upload/v1554146021/CoinAGES/check_mark.png",
  help: "https://res.cloudinary.com/obliv-cf/image/upload/v1554146073/CoinAGES/help.png",
  usoaFlag: "https://res.cloudinary.com/obliv-cf/image/upload/v1554146112/CoinAGES/usoa_flag.png",
  worldGlobe: "https://res.cloudinary.com/obliv-cf/image/upload/v1554146149/CoinAGES/world_dom.png",
  marketing: "https://res.cloudinary.com/obliv-cf/image/upload/v1554146187/CoinAGES/marketing.png"
}

/* 'Create' and 'Destroy' functions */
function createAlert(title, text, image, overwrite = false, end = false){
if(alertStatus){
    if(overwrite){
alertQueue = []
 alertTitle.innerHTML = title.trim();
  alertDesc.innerHTML = text.trim();
  alertImage.src = image;
  alertModal.style.display = "inline-block";
    }else{
var temp = '{"title":"' + title + '","text":"' + text +'","image":"' +image + '","script":"' + overwrite + '"}'
alertQueue.push(temp)
    }
}else{
    alertStatus = true
  alertTitle.innerText = title.trim();
  alertDesc.innerHTML = text.trim();
  alertImage.src = image;
  alertModal.classList.remove('alertout')
  alertModal.classList.add('alertin')
}
}

function destroyAlert() {
    alertStatus = false
    alertModal.classList.remove('alertin')
    alertModal.classList.add('alertout')
    if (alertQueue[0] !== undefined) {
        try {
            var temp = JSON.parse(alertQueue[0])
            alertQueue.shift()
            setTimeout(function() {
                createAlert(temp.title, temp.text, temp.image, temp.overwrite)
            }, 200)
        } catch (err) {

        }

    }


}

