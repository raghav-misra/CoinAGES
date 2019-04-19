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
  marketing: "https://res.cloudinary.com/obliv-cf/image/upload/v1554146187/CoinAGES/marketing.png",
  criminal: "https://res.cloudinary.com/obliv-cf/image/upload/v1554855556/CoinAGES/criminal-icon.png"
}

/* 'Create' and 'Destroy' functions */
function createAlert(title, text, image, overwrite = false) {
  if (alertStatus) {
    if (overwrite) {
      alertQueue = []
      alertTitle.innerHTML = title.trim();
      alertDesc.innerHTML = text.trim();
      alertImage.src = image;
      alertModal.style.display = "inline-block";
    } else {
      var temp = '{"title":"' + title + '","text":"' + text + '","image":"' + image + '","script":"' + overwrite + '"}'
      alertQueue.push(temp)
    }
  } else {
    alertStatus = true
    alertTitle.innerText = title.trim();
    alertDesc.innerHTML = text.trim();
    alertImage.src = image;
    alertModal.classList.remove('alertout')
    alertModal.classList.add('alertin')
  }
}

function destroyAlert() {
    okSound.play()
  alertStatus = false
  alertTitle.classList.remove('fade-in')
  alertDesc.classList.remove('fade-in')
  alertImage.classList.remove('fade-in')
  if (alertQueue[0] !== undefined) {
    try {
      var temp = JSON.parse(alertQueue[0])
      alertQueue.shift()
      alertTitle.style.opacity = '0'
  alertDesc.style.opacity = '0'
  alertImage.style.opacity = '0'
      alertTitle.innerText = temp.title
      alertDesc.innerHTML = temp.text
      alertImage.src = temp.image
      setTimeout(function(){
      alertTitle.classList.add('fade-in')
      alertDesc.classList.add('fade-in')
      alertImage.classList.add('fade-in')
     },100)
   
    
    } catch (err) {

    }

  }else{
    alertModal.classList.remove('alertin')
  alertModal.classList.add('alertout')
  alertTitle.style.opacity = '1'
  alertDesc.style.opacity = '1'
  alertImage.style.opacity = '1'
  }


}

