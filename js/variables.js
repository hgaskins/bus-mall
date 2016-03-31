/*
=========
variables
=========
*/

/*
specific images set to variables and collect the id from DOM
this stays at three images
*/
var imageOne = document.getElementById('productImageOne');
var imageTwo = document.getElementById('productImageTwo');
var imageThree = document.getElementById('productImageThree');


var displayButton = document.getElementById('myButton');
var voteMoreButton = document.getElementById('voteMore');
var resetButton = document.getElementById('resetButton');

var chart = document.getElementById('chart');

var productArray = [];

var totalClicks = 0;
var processClick = true;
var clicks = 16;
var x = true;

//variables to set clicksChart and percentChart to be global in scope
var clicksChartGlobal;
var percentChartGlobal;


/*
variables capturing the paragraph slots
for textContent addition on show results
*/

/* ++++++
variables for paragraph elements to be added per
image and add paragraph elements within html
*/
var paraOne = document.getElementById('paraOne');
var paraTwo = document.getElementById('paraTwo');
var paraThree = document.getElementById('paraThree');
var paraFour = document.getElementById('paraFour');
var paraFive = document.getElementById('paraFive');
var paraSix = document.getElementById('paraSix');
var paraSeven = document.getElementById('paraSeven');
var paraEight = document.getElementById('paraEight');
var paraNine = document.getElementById('paraNine');
var paraTen = document.getElementById('paraTen');


/*
====================
constructor function
====================
*/
//constructor function to make new image objects
function makeImageObj(name, path) {
  this.name = name;
  this.path = path;
  this.nShow = 0;
  this.nClicks = 0;
}
