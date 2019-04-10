var tempmarker = 0
var leaderBoardCompany = 0
var temp = []
var ctx = document.getElementById('chart').getContext('2d');
var leaderboard = document.getElementById('leaderboard')
var companyOffer = 'LuxFlip' // what company can you buy?
var recommendedOffer = 0 
var tutorialaquire = true; //On campaign load run tutorial?
Chart.defaults.global.defaultFontFamily = "'Raleway', 'sans-serif'";
Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultFontSize = 15; 
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {


        datasets: [{

            borderColor: 'white',
            data: [220000,200000,100000,80000,10000,1000,0],
            backgroundColor: [
                "#FFAB00",
                "#4EA529",
                "#fab1a0",
                "#74b9ff",
                "#ffeaa7",
                "#40739e",
                "white"
             ]



        }],
        labels: [
            'Zamazon',
            'SicroMoft',
            'CoinHype',
            'Randomize',
            'FlippyOnline',
            'LuxFlip',
            'CoinAGES'


        ],



    },


    // Configuration options go here
    options: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        maintainAspectRatio: true,
        tooltips: {
         enabled: true
    }

    }
});

//Randomize Values
function runIndustry(){
    industry.CoinAGES.value = Math.floor(player.money / 100 + industry.CoinAGES.futurevalue)
    var marker = 0

    industryCompanies.forEach(function(company){
    if(company !== 'CoinAGES'){
       var companyobject = eval('industry.' + company)
       if(Math.floor(Math.random() * 2) + 1 == 1){
        var fa = "<i class='fas fa-chevron-up'></i>"
        changetype = '+'
        eval('document.getElementById("' + company + 'd").style.color = "green"')

       }else{
        var fa = "<i class='fas fa-chevron-down'></i>"
        changetype = '-'
        eval('document.getElementById("' + company + 'd").style.color = "red"')

       }
       var newValue = Math.floor(Math.random() * companyobject.value/4) + companyobject.value / 100
       eval('industry.' + company + '.value' + changetype + '=' + newValue )
    } else{
         eval('document.getElementById("' + company + 'd").style.color = "green"')
         var fa = "<i class='fas fa-chevron-up'></i>"
    }
       chart.data.datasets[0].data[marker] = Math.floor(eval('industry.' + company + '.value'))
       eval('document.getElementById("' + company + 'd").classList.remove("hide")')
       eval('document.getElementById("' + company + 'd").innerHTML = "' + company + ' Value: $' + chart.data.datasets[0].data[marker] + fa +'"')

       marker++




    })
    leadingCompanies = []
    chart.update()
    var tempdata = chart.data.datasets[0].data.slice(0)
    temp = tempdata.sort(function(a,b){return a-b}).reverse()
    tempmarker = 0
    leaderboard.innerHTML = ''
    runLeaderboard()
    window.localStorage.setItem('v', JSON.stringify(industry))
    setTimeout(runIndustry,5000)






}
function runLeaderboard() {

    if (tempmarker == industryCompanies.length ) {
        updateLeaderboard()
        leaderBoardCompany = 0
        tempmarker = 0

    }else{


        if (Math.floor(eval('industry.' + industryCompanies[leaderBoardCompany] + '.value')) == temp[tempmarker]) {
            leadingCompanies.push(industryCompanies[leaderBoardCompany])
            tempmarker += 1
             leaderBoardCompany = 0
            runLeaderboard()

        }else{
            leaderBoardCompany++
            runLeaderboard()
        }



    }



}
function updateLeaderboard(){
   var place = 1
    leadingCompanies.forEach(function(company){
        leaderboard.innerHTML = leaderboard.innerHTML + '<p>' +place +'. ' + company + '</p>'
        place +=1

    })
}
//acquire other compaines
function createOfferCard(company){
  var card = document.createElement("div")
  card.innerHTML = "<div id='" + company + "Offer'> <h3 class='container'>"+ company +"</h3> <button onclick=\"aquire('" + company +"')\" class='container reg'>Offer To Acquire</button> </div>"
  document.getElementById('buyCompanyContainer').appendChild(card)
}
function aquire(company){
  recommendedOffer = Math.round(eval('industry.' + company + '.value') * 1.1 )
  companyOffer = company
  offerQuestion.innerHTML = 'What will you offer to buy <b class="bold">' + company +  '</b>'
  document.getElementById('playerMoneyOffer').innerHTML = 'Your Money: $' + player.money / 100
  document.getElementById('recommendedOffer').innerHTML = 'Recommended Amount $' + recommendedOffer
  acquireCard.classList.remove('hide')
  fadeIn(acquireCard)
}
function cancel(){
  var cardname = companyOffer + 'Offer'
  document.getElementById(cardname).parentNode.removeChild(document.getElementById(cardname))
  fadeOut(acquireCard)
}
function offer(offer){
  var boost = parseInt(eval('industry.' + companyOffer + '.change' ))
  var rand = Math.random();
  if(offer == ''){ createAlert('Offer Incomplete', "Please put something in the textbox", alertImages.cancelX,true)}
  else if(hasLetters(offer)) {createAlert('Offer Incomplete', "You offer should only have numbers", alertImages.cancelX,true)}
  else if(offer > player.money / 100){
    createAlert('Offer Incomplete', "You don't have enough money to make this offer", alertImages.cancelX,true)
  }
  else if(offer >= recommendedOffer) { createAlert('CEO of ' + companyOffer, "After reviewing your proposed offer, we have decided to accept it! All of our assets will be transferred to you shortly (Boost: + " + boost + "¢)" , alertImages.checkBox,true) 
  player.pclickboost += boost
  player.clickboost = player.clickboost + boost;
  boostDisplayp.innerText = 'Boost: +' + Math.round(player.clickboost)  + "¢";
  boostDisplay.style.opacity = 1
  removeCompany(companyOffer,parseInt(offer))
  }
  else if(percentageOf(offer,recommendedOffer) >= rand) { createAlert('CEO of ' + companyOffer, "After reviewing your proposed offer, we have decided to accept it due to our current condition. All of our assets will be transferred to you shortly.  (Boost: + " + boost + "¢)" , alertImages.checkBox,true)
  player.pclickboost += boost
  player.clickboost = player.clickboost + boost;
  boostDisplayp.innerText = 'Boost: +' + Math.round(player.clickboost)  + "¢";
  boostDisplay.style.opacity = 1
  removeCompany(companyOffer,parseInt(offer))
  }
  else { createAlert('CEO of ' + companyOffer, "We are sorry to decline your offer, but we have made an agreement that was more sufficient with another company.", alertImages.cancelX,true)
  var arrayPos
  industryCompanies.forEach(function(c){
    if(c == companyOffer){
       arrayPos = industryCompanies.lastIndexOf(c)
    }
  })
  chart.data.datasets[0].backgroundColor.splice(arrayPos,1)
  chart.data.datasets[0].data.splice(arrayPos,1)
  industryCompanies.splice(arrayPos,1) 
  chart.data.labels.splice(arrayPos,1)
  industry.Zamazon.value += recommendedOffer
  eval('document.getElementById("' + companyOffer + 'd").classList.add("hide")')
  window.localStorage.setItem('cbc', JSON.stringify(chart.data.datasets[0].backgroundColor))
  window.localStorage.setItem('cd', JSON.stringify(chart.data.datasets[0].data))
  window.localStorage.setItem('cdl', JSON.stringify(chart.data.labels))
  window.localStorage.setItem('ic', JSON.stringify(industryCompanies))
    cancel(companyOffer)  

   }

 
}

function removeCompany(company,offer){
  player.money -= offer * 100
  var arrayPos
  industryCompanies.forEach(function(c){
    if(c == company){
       arrayPos = industryCompanies.lastIndexOf(c)
    }
  })
  industry.CoinAGES.futurevalue += parseInt(eval('industry.' + company + '.value'))
  chart.data.datasets[0].backgroundColor.splice(arrayPos,1)
  chart.data.datasets[0].data.splice(arrayPos,1)
  industryCompanies.splice(arrayPos,1) 
  chart.data.labels.splice(arrayPos,1)
  eval('document.getElementById("' + company + 'd").classList.add("hide")')
   var cardname = companyOffer + 'Offer'
  document.getElementById(cardname).parentNode.removeChild(document.getElementById(cardname))
  fadeOut(acquireCard)
  window.localStorage.setItem('cbc', JSON.stringify(chart.data.datasets[0].backgroundColor))
  window.localStorage.setItem('cd', JSON.stringify(chart.data.datasets[0].data))
  window.localStorage.setItem('cdl', JSON.stringify(chart.data.labels))
  window.localStorage.setItem('ic', JSON.stringify(industryCompanies))
  
    
  
      
  
}
function hasLetters(offer){
  if(offer.match(/[a-z]/i) == null){
    return false
  }else{
    return true
  }
}
function percentageOf(num1 , num2){
var calc = num1 / num2
return calc
}

/* BRUV ITS TIME FOR POKEMON!!!! COMPANY USED ATTACK! INVALID CAUSE IT DONT EXIST YET */

var industryFuncs = [attackComp, createCriminal]
var criminalMining = false;
var choiceRunning = false;
var stolenMoney = 0;
var industryOverride = false;

function industryChoice(durationMS = 10000){
  setTimeout(function(){
    if(choiceRunning) return industryChoice(1);
    if(player.end == false && industryOverride == false){
      var funky = randomFromArray(industryFuncs, "buv");
      funky();
      choiceRunning = true;
    }
    return industryChoice();
  }, durationMS)
}

// Criminal YEET
function createCriminal(){
  var criminal = document.getElementById("criminal");
  setRandomPosition(criminal);
  criminal.classList.remove("hide");
  criminal.onclick = catchCriminal;
  criminalMining = true;
  stealCriminal();
}

function stealCriminal(){
  if(criminalMining == true && player.end == false){
    var totalBoost = player.clickvalue + player.clickboost;
    var clickHund = totalBoost * 200;
    player.money = player.money - clickHund;
    stolenMoney = stolenMoney + clickHund;
    setTimeout(stealCriminal, 1500);
  }
  else return
}

function catchCriminal(){
  var criminal = document.getElementById("criminal");
  criminalMining = false;
  criminal.classList.add("hide");
  var percentage = getRandomInt(0, 50) / 100;
  var perc = Math.floor(percentage * 100);
  var steal = stolenMoney / 100;
  var addAmount =  Math.round(percentage * stolenMoney);
  var heshe = ["He", "She"];
  var gender = heshe[getRandomInt(1, 2) - 1];
  if(perc <= 5){
    createAlert(
    "Escaped!", 
    "You were too late! The criminal has escaped! " + gender + " stole " + steal + " from your PayBud Wallet. The police was unable to recover any money.", 
    alertImages.criminal, true);
  }
  else{
    createAlert(
    "Criminal Caught!", 
    "The police successfully caught the criminal! However, they were not able to recover all of the money. Only " + perc + "% of it ($" + steal + ")", 
    alertImages.criminal, true);
    player.money = player.money + addAmount;
  }
  stolenMoney = 0;
  choiceRunning = false;
}

function ignoreAttack(comp, attackCard){
  var situations = [getHacked, manualNegative];
  fadeOut(attackCard);
  createAlert("Decision Made!", "You have chosen to ignore this situation. However, unwanted consequences may still occur.", alertImages.checkBox, true);
  var situation = situations[getRandomInt(0, 1)];
  choiceRunning = false;
  setTimeout(function(){
    situation();
  }, 7500)
}

function attackBack(comp, attackCard){
  fadeOut(attackCard);
  createAlert("Decision Made!", "You have chosen to attack them back. There is a promotion waiting for you in <b>Marketing Campaigns</b>. Go to the main menu to see it!", alertImages.checkBox, true);
  var tester = document.getElementById("revenge-promo");
  if(tester == null){
    createCampaign("revenge-promo", "Negative Marketing", "They defamed your company,", "you defame their company.", "Create propaganda about rivals", "to destroy their reputation.", "Permanent: +0.38 per manual flip", "/img/negativeMarketing.png", 1550, 38);
  }
  choiceRunning = false;
}

function attackAgree(comp, attackCard){
  fadeOut(attackCard);
  createAlert("Decision Made!", "You reach out to " + comp + " LLC. to sign a deal with them. You now await their decision. You should get it shortly.", alertImages.checkBox, true);
  var verdict = getRandomInt(1, 2);
  choiceRunning = false;
  setTimeout(function(){
    if(verdict == 1){
      player.partners.push(comp);
      createAlert("Success!", comp + " has accepted the term of your agreement. They respect you as a very powerful competitor in the industry, and 'would like to have you on their side' of the battle.", alertImages.checkBox);
    }
    else{
      createAlert("Rejection.", comp + " has rejected your offer to make an agreement. They say that your company is not yet as capable as they would expect in a 'ally'. However, they do see you as a rapidly growing establishment that could indeed become very powerful.", alertImages.cancelX);      
    }
  }, 5000)
}

function attackSelf(comp, attackCard){
  fadeOut(attackCard);
  createAlert("Decision Made!", "You have chosen to promote your company more. Go to <b>Marketing Campaigns</b> to launch some promos. New ones will be added shortly.", alertImages.checkBox, true);
  var tempCampaign = document.getElementById("promote-more");
  tempCampaign.style.display = "inline-block";
  var tester2 = document.getElementById("event-booths");
  if(tester2 == null){
    createCampaign("event-booths", "Event Sponsorship", "Sponsor events all around", "the country to get", "booths for your company.", "It's good advertising.", "Permanent: +0.25 per manual flip", "/img/meteorbuckPartner.png", 1250, 25);
  choiceRunning = false;
  }
}

function attackComp(){
  var attackCard = document.getElementById("attackCard");
  var comp = randomFromArray(industryCompanies, "CoinAGES");
  if(isInArray(comp, player.partners)){
    return attackComp()
  }
  var compDisplay = document.getElementById("attackComp");
  compDisplay.innerHTML = "<b><strong><i>" + comp + "</i></strong></b>";
  attackCard.classList.remove("hide");
  fadeIn(attackCard);
  document.getElementById("attackIgnore").onclick = function(){ignoreAttack(comp, attackCard)};
  document.getElementById("attackBack").onclick = function(){attackBack(comp, attackCard)};
  document.getElementById("attackSelf").onclick = function(){attackSelf(comp, attackCard)};
  document.getElementById("attackAgree").onclick = function(){attackAgree(comp, attackCard)};
}


/* Possible Methods */
function getHacked(){
  var hackerNames = ["Eppla", "Tintendo", "Mallmart", "repl.gg", "Spride Kranberry", "L3G3ND1337", "WillHackForHappyMeals"]
  var hacker = randomFromArray(hackerNames);
  var percentage = getRandomInt(5, 10) / 100;
  var perc = percentage * 100;
  var removeAmount =  Math.round(percentage * player.money);
  var removeDisp = Math.round(removeAmount / 100);
  player.money = player.money - removeAmount;
  createAlert("Hacked?", "A mysterious group of hackers known only as <i>" + hacker + "</i> has found their way into your PayBud account. Normally they would inform you of this security flaw, but they (along with society) dislike your company so they stole $" + removeDisp + " from you. (" + perc + "%)", alertImages.cancelX);
}

function manualNegative(){
  tempHide("coin", Math.floor(getRandomInt(10000, 20000)), function(){ createAlert("CoinAGES Marketing Division", "Things seem to be returning to where they were before, or are getting there, anyways. The point is, you can manually flip coins again. Note to self: Let's try to stay on top of things next time.", alertImages.checkBox); });
  createAlert("CoinAGES Marketing Division", "Your company is losing customers and reputation, etc. We suggest that you start launching new promos, fast. However, this sudden revenue drop comes with a price, you can no longer manually flip coins until further notice.", alertImages.cancelX);
}



/* Other Useful Stuff */
function randomFromArray(list, filter = null){
  var rnd = list[Math.floor(Math.random() * list.length)];
  if(rnd == filter) return randomFromArray(list, filter);
  else return rnd;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isInArray(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

function takeLoan(amount, company){
  if(player.money >= amount){
    createAlert("PayBud Loans", "You have enough money to pay back the loan that you took from " + company + " LLC.", alertImages.checkBox, true)
    player.money = player.money - amount;
    return true;
  }
  else{
    setTimeout(function(){takeLoan(amount, company);}, 2000);
  }
}


function tempHide(id, durationMS, onComplete){
  var elem = document.getElementById(id);
  elem.classList.add("hide");
  setTimeout(function(){
    elem.classList.remove("hide");
    onComplete();
  }, durationMS);
}