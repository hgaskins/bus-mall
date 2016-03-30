/*
================
calling functions
================
*/

/* ++++++++
calling the showRandomImg function with specific images here. Will need
to ammend additional images
*/
showRandomImg(imageOne);
showRandomImg(imageTwo);
showRandomImg(imageThree);


/*
=========
functions
=========
*/

/* +++++++++
function to count the number of clicks on imageOne specifically
*/
imageOne.onclick = function() {
  var srcValue = imageOne.getAttribute('src');

  for (var i = 0; i < productArray.length; i++) {
    if (srcValue == productArray[i].path) {
      productArray[i].nClicks++;
      console.log(productArray[i].path + " #$% " + productArray[i].nClicks);
    }
  }
}

//function to count the number of clicks on imageTwo specifically
imageTwo.onclick = function() {
  var srcValue = imageTwo.getAttribute('src');

  for (var i = 0; i < productArray.length; i++) {
    if (srcValue == productArray[i].path) {
      productArray[i].nClicks++;
      console.log(productArray[i].path + " #$% " + productArray[i].nClicks);
    }
  }
}

//function to count the number of clicks on imageThree specifically
imageThree.onclick = function() {
  var srcValue = imageThree.getAttribute('src');

  for (var i = 0; i < productArray.length; i++) {
    if (srcValue == productArray[i].path) {
      productArray[i].nClicks++;
      console.log(productArray[i].path + " #$% " + productArray[i].nClicks);
    }
  }
}

//
function imageClicked() {
  if (processClick) {
    totalClicks++;

    //for each addition image add in code to call the image here:
    showRandomImg(imageOne);
    showRandomImg(imageTwo);
    showRandomImg(imageThree);

    if (totalClicks >= 16) {
      //code to display hidden button
      displayButton.setAttribute('style','visibility:visible');
      voteMoreButton.setAttribute('style','visibility:visible');
      processClick = false;
    }
  }
}

//TESTING REMOVING BELOW CODE
// //constructor function to make new image objects
// function makeImageObj(name, path) {
//   this.name = name;
//   this.path = path;
//   this.nShow = 0;
//   this.nClicks = 0;
// }

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
  // var clickCount = newImage.getAttribute("src");
  // console.log(clickCount);


  //replacing image function
  var n = randomImageIndex();
  image.setAttribute("src", productArray[n].path);
  productArray[n].nShow++;
}



//function to show results
function showResults() {
  console.log(totalClicks + " this is working yes?");
  chart.textContent = "the total number of clicks is " + totalClicks + " and this shows how often the Abercrombie cat showed up: " + productArray[0].nShow;
  /* ++++++++++
  add in paraNum.textContent per paragraph element position within HTML DOM
  */
  paraOne.textContent = "the number of times black-backpack was clicked on " + productArray[0].nClicks;
  paraTwo.textContent = "the number of times black-gloves has been clicked is " + productArray[1].nClicks;
  paraThree.textContent = "the number of times black-purse has been clicked is " + productArray[2].nClicks;
}

var imageOneCounter = 0;

/*
===============
event listeners
===============
*/

/*++++++
addin eventListener per imageNUMBER variables set at the top of the js file
*/
imageOne.addEventListener("click", imageClicked);
imageTwo.addEventListener("click", imageClicked);
imageThree.addEventListener("click", imageClicked);

displayButton.addEventListener("click", showResults);
