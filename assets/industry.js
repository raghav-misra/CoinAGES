var tempmarker = 0
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
                "#dfe6e9",
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
        changetype = '+'

       }else{
        changetype = '-'

       }
       var newValue = Math.floor(Math.random() * companyobject.value/4) + companyobject.value / 100
       eval('industry.' + company + '.value' + changetype + '=' + newValue )  
    }
       chart.data.datasets[0].data[marker] = Math.round(eval('industry.' + company + '.value'))
       eval('document.getElementById("' + company + 'd").innerText = "' + company + ' Value: $' + chart.data.datasets[0].data[marker] + '"')
      
       marker++
    


    
    })
    chart.update()
    leadingCompanies = []
    temp = chart.data.datasets[0].data.sort(function(a,b){return a-b}).reverse()
    runLeaderboard()
    leaderboard.innerHTML = ''
    setTimeout(updateLeaderboard, 1000)
   
   
   
    
}
function runLeaderboard(){
    industryCompanies.forEach(function(company){
       console.log((Math.floor(eval('industry.' + company +'.value'))))
       console.log(temp[tempmarker])
        if(Math.floor(eval('industry.' + company +'.value')) == temp[tempmarker] && temp[tempmarker] !== null){
        leadingCompanies.push(company)
        tempmarker++
        runLeaderboard()
        }
        
        
    })
    
}
function updateLeaderboard(){
    leadingCompanies.forEach(function(company){
        leaderboard.innerHTML = leaderboard.innerHTML + ' <p>' + company + '</p>'


    })
}
setTimeout(industry,600000)
