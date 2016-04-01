/*
=================
calling functions
=================
*/

/*
calling the showRandomImg function with specific images here.
this stays at imageOneTwoThree
*/
showRandomImg(imageOne);
showRandomImg(imageTwo);
showRandomImg(imageThree);


/*
=========
functions
=========
*/

/*
functions below to count the number of clicks on images.
to stat at three image.onclick functions, one for each image space
*/
imageOne.onclick = function() {
  var srcValue = imageOne.getAttribute('src');

  for (var i = 0; i < productArray.length; i++) {
    if (srcValue == productArray[i].path) {
      productArray[i].nClicks++;
    }
  }
}

imageTwo.onclick = function() {
  var srcValue = imageTwo.getAttribute('src');

  for (var i = 0; i < productArray.length; i++) {
    if (srcValue == productArray[i].path) {
      productArray[i].nClicks++;
    }
  }
}

imageThree.onclick = function() {
  var srcValue = imageThree.getAttribute('src');

  for (var i = 0; i < productArray.length; i++) {
    if (srcValue == productArray[i].path) {
      productArray[i].nClicks++;
    }
  }
}


//++++++++++++++++++++moved from canvas

var barData = {
	labels : [], //these are our image titles or this.name
	datasets : [
		{
			fillColor : 'rgba(59,59,59,0.4)',
			strokeColor : 'rgba(29,29,29,0.7)',
			data : [] // clicks
		}
	]
}



var barDataPercent = {
  labels : [], //these are our image titles or this.name
  datasets : [
    {
      fillColor : 'rgba(59,59,59,0.4)',
      strokeColor : 'rgba(29,29,29,0.7)',
      data : [] // clicks
    }
  ]
}



//++++++++++++++++++++++++++++++++++++++++++
//setting localStorage for total clicks where total clicks is initialized
var storedBarData = localStorage.getItem("barData");
//if there are stored clicks then equate those to the total click count
//else start at 0
if (storedBarData) {
    var parseData = JSON.parse(storedBarData);
    barData = parseData;
} else {
  //putting bar data into local storage in JSON format
  // localStorage.setItem("barData", JSON.stringify(barData));
}





function imageClicked() {
  if (processClick) {
    //++++++++++++++++++++++++++++++++
    //moving these inside of function so localStorage can see them
    barData.datasets[0].data = yAxisArray;
    barData.labels = labelArray;
    barDataPercent.labels = labelArray;
    barDataPercent.datasets[0].data = percentArray;

    //+++++++++++++++++++++++++++++++++++++++++
    //updating the data for charts
    localStorage.setItem("totalClicks", totalClicks);
    localStorage.setItem("barData", JSON.stringify(barData));


      totalClicks++;

      showRandomImg(imageOne);
      showRandomImg(imageTwo);
      showRandomImg(imageThree);

      if (totalClicks >= clicks && x && totalClicks < 24) {
        //code to display hidden button
        displayButton.setAttribute('style','visibility:visible');
        voteMoreButton.setAttribute('style','visibility:visible');
        processClick = false;
      } else if (totalClicks === 24) {
        x = false;
        voteMoreButton.setAttribute('style', 'visibility:hidden');
        console.log(totalClicks);
        processClick = false;
        // voteMoreButton <-- remove event listener here
        voteMoreButton.removeEventListener('click', eightMore);
        resetButton.setAttribute('style','visibility:visible');
        //
        // //destroys charts
        // clicksChartGlobal.destroy();
        // percentChartGlobal.destroy();

        showResults();
      }
  }
}

/*
random number generation to go through amount of images within
constructors
*/
function randomImageIndex() {
  var result = Math.floor(Math.random() * (productArray.length));
  return result;
}

//function to display random image from list
function showRandomImg(image) {

  //replacing image function
  var n = randomImageIndex();
  image.setAttribute("src", productArray[n].path);
  productArray[n].nShow++;
}

//function to implement vote more button disappearing after clicking and allow for an additional 8 clicks
function eightMore() {
  clicks = 24;
  processClick = true;
  voteMoreButton.setAttribute('style','visibility:hidden');
  displayButton.setAttribute('style','visibility:hidden');
  displayButton.removeEventListener('click', showResults);
  //destroys charts here as well ¯\_(ツ)_/¯ 
  clicksChartGlobal.destroy();
  percentChartGlobal.destroy();
}

function newVoteRound() {

  //destroys charts
  clicksChartGlobal.destroy();
  percentChartGlobal.destroy();

  //resets all global variables
  totalClicks = 0;
  console.log(totalClicks);
  processClick = true;
  clicks = 16;
  x = true;
  console.log(clicks);
  clicksChartGlobal = 0;
  percentChartGlobal = 0;

  //resets all image object's counters
  for (var i = 0; i < productArray.length; i++) {
    productArray[i].nClicks = 0;
    productArray[i].nShow = 0;
  }

  //hides reset button
  resetButton.setAttribute('style','visibility:hidden');

  //repopulate image spaces
  showRandomImg(imageOne);
  showRandomImg(imageTwo);
  showRandomImg(imageThree);

  //rest chart data objects
  barData.labels = [];
  barDataPercent.labels = [];

  //add back in eventListeners
  displayButton.addEventListener('click', showResults);
  voteMoreButton.addEventListener('click', eightMore);
}

/*
===============
event listeners
===============
*/

imageOne.addEventListener("click", imageClicked);
imageTwo.addEventListener("click", imageClicked);
imageThree.addEventListener("click", imageClicked);

displayButton.addEventListener("click", showResults);
voteMoreButton.addEventListener("click", eightMore);
resetButton.addEventListener("click", newVoteRound);
