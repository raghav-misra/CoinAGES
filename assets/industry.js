var tempmarker = 0
var leaderBoardCompany = 0
var temp = []
var ctx = document.getElementById('chart').getContext('2d');
var leaderboard = document.getElementById('leaderboard')
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

    if (tempmarker == 7 ) {
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

