/*
=============
canvas charts
=============
*/

//+++++++++++++
//array to store labels for chart
var labelArray = [];

//++++++++++
//array to store Yaxis or clicks numbers for chart
var yAxisArray = [];

//++++++++++++++++
//array to store yaxis or percent click per show rate
var percentArray = [];

//function for chart's labels

var makeBarLabels = function() {
  for (var i = 0; i < productArray.length; i++) {
    labelArray[i] = productArray[i].name;
  }
}

//function for chart's y axis or number of clicks
var makeYAxis = function() {
  for (var i = 0; i < productArray.length; i++) {
    yAxisArray[i] = productArray[i].nClicks;
  }
}

//adding separate
var makePercentChart = function() {
  localStorage.setItem("barData", JSON.stringify(barData));
  for (var i = 0; i < productArray.length; i++) {
    var x = Math.floor((productArray[i].nClicks/productArray[i].nShow)*100);
    percentArray.push(x);
  }
}



//function to show results
//moved showResults function from function section
function showResults() {


  makePercentChart();

  makeBarLabels();

  makeYAxis();

  displayButton.setAttribute('style','visibility:hidden');
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //placed invocation of bar chart within showResults function
  var clicksChart = document.getElementById('clicksChart').getContext('2d');
  //+++++++++++++++++++++++++
  //asssigning new chart to global variable so we can call destroy method on it
  clicksChartGlobal = new Chart(clicksChart).Bar(barData);
  clicksChart = clicksChartGlobal;


  //chart variable for barDataPercent
  var percentChart = document.getElementById('percentChart').getContext('2d');
  percentChartGlobal = new Chart(percentChart).Bar(barDataPercent);
  percentChart = percentChartGlobal;

}
