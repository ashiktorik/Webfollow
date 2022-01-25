let numOfGeo;
var getIndexNum = 5;
var group;
var pCollect = document.getElementById("geoRow");
var collect = pCollect.getElementsByClassName("geoTile");
for (var i = 0; i < collect.length; i++) {
  numOfGeo = collect.length;
  console.log(collect);
  collect[i].addEventListener("mouseover", slideScale);
  collect[i].addEventListener("mouseout", slideScaleDown);
  collect[i].addEventListener("mouseout", slideOn);
}

let widthOfGeoOut = 100 / numOfGeo;
var widthOfGeoOfmouseOut = "calc(" + widthOfGeoOut + "% - 14.5px" + ")";

let widthOfGeoIn = 55 / numOfGeo;
var widthOfGeoOfmouseIn = "calc(" + widthOfGeoIn + "% - 5.5px" + ")";

for (var i = 0; i < collect.length; i++) {
  group = collect[i];
  collect[i].style.width = "" + widthOfGeoOfmouseOut + "";
}

function slideScale() {
  for (var i = 0; i < collect.length; i++) {
    group = collect[i];
    group.style.width = "" + widthOfGeoOfmouseIn + "";
    this.style.width = "45%";
  }
}


function slideScaleDown() {
  for (var i = 0; i < collect.length; i++) {
    group = collect[i];
    group.style.width = "" + widthOfGeoOfmouseOut + "";
  }
}

function slideOn() {
  //showSlides();
}
var slideIndexPlus = getIndexNum;
var slideIndexMinus = getIndexNum;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("geoTile");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("geotileActive");
  }
  slideIndexPlus--;
  if (slideIndexPlus < 1) {
    slideIndexPlus = getIndexNum;
    //return;
  }
  if (getIndexNum != 0) {
    slides[slideIndexPlus - 1].classList.add("geotileActive");
  }
  slideIndexMinus++;
  if (slideIndexMinus > slides.length) {
    slideIndexMinus = getIndexNum;
    if (getIndexNum < 1) {
      slideIndexMinus = 1;
    }
    // return;
  }

  slides[slideIndexMinus - 1].classList.add("geotileActive");
  setTimeout(showSlides, 350); // Change image every 2 seconds 
  return showSlides;
}


const wpEdit = document.getElementsByClassName('geoTile');
for (let i = 0; i < wpEdit.length; i++) {
  wpEdit[i].addEventListener('mouseover', function () {
    //alert(i);
    getIndexNum = i;
    console.log(getIndexNum);
  });
}

const doorAnim = document.getElementById("sectionTwo");
var doors = document.getElementsByClassName("door");
// doorAnim.addEventListener("mouseover", doorOpen);
// doorAnim.addEventListener("click", doorOpen);  
// doorAnim.addEventListener("mouseout", doorClose);  
// doorAnim.addEventListener("click", doorClose); 
function doorOpen() {
  for (var i = 0; i < doors.length; i++) {
    doors[i].classList.remove("close");
    doors[i].classList.add("open", "active");
  }
  setInterval(function () {
    var leftDoorWidth = document.getElementById("leftDoor");
    var offset2 = leftDoorWidth.offsetWidth;
    //console.log(offset2);
    var doorsIndex = document.getElementById("doorsIndex");
    var offset = doorsIndex.offsetLeft;
    //console.log(offset);
    if (offset > offset2) {
      doorsIndex.classList.remove("locked");
      doorsIndex.classList.add("unlock");
    }
  }, 100);
  return;
}

function doorClose() {
  for (var i = 0; i < doors.length; i++) {
    doors[i].classList.remove("open", "active");
    doors[i].classList.add("close");
    doorsIndex.classList.remove("unlock");
    doorsIndex.classList.add("locked");
  }
}

var randomInterval;
var randomNum;
var randomTimeout;
var latters;
var Chars =textSpliter();


function textSpliter() {
  const str = document.querySelector(".active .heroContentBox h1").textContent;
  const words = str.split(' ');
  var word2 = words[0];
  const chars = word2.split('');
  latters = chars[0];
  console.log(latters);
  // expected output: "k"
  // for (var i = 0; i < chars.length; i++) {
  //   latters = chars[i];
  //   console.log(chars[i]);
  // }
  return latters;
};


getRandom();
function getRandom() {
  var i;
  let j;
  var Char = dspChars();
  var pslides = document.querySelector(".active #miniDisplay");
  var slides = pslides.getElementsByClassName("vp-item");
  for (i = 0; i < slides.length; i++) {
    for (j = 0; j < Chars.length; j++) {
      slides[i].classList.remove("active");
      var frts = Chars[j];
      // console.log(Chars);
      slides[frts].classList.add("active");
    }
  }
  randomTimeout = setTimeout(getRandom, 500);
}


function dspChars() {

  if (latters === "a") {
    Chars = [1, 2, 3, 5, 9, 10, 11, 12, 13, 14, 15, 19, 20, 24, ];
  }
  if (latters === "b") {
    Chars = [0, 1, 2, 3, 5, 9, 10, 11, 12, 13, 15, 19, 20, 21, 22, 23, ];
  }
  if (latters === "c") {
    Chars = [0, 1, 2, 3, 4, 5, 9, 10, 15, 19, 20, 21, 22, 23, 24, ];
  }

  if (latters === "d") {
    Chars = [0, 1, 2, 3, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, ];
  }
  if (latters === "D") {
    Chars = [0, 1, 2, 3, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, ];
  }

  if (latters === "e") {
    Chars = [0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 15, 19, 20, 21, 22, 23, 24, ];
  }
  if (latters === "f") {
    Chars = [0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 15, 20, ];
  }
  if (latters === "g") {
    Chars = [0, 1, 2, 3, 4, 5, 10, 12, 13, 14, 15, 19, 20, 21, 22, 23, 24, ];
  }
  if (latters === "G") {
    Chars = [0, 1, 2, 3, 4, 5, 10, 12, 13, 14, 15, 19, 20, 21, 22, 23, 24, ];
  }

  if (latters === "h") {
    Chars = [0, 4, 5, 9, 10, 11, 12, 13, 14, 15, 19, 20, 24, ];
  }

  if (latters === "i") {
    Chars = [0, 1, 2, 3, 4, 7, 12, 17, 20, 21, 22, 23, 24, ];
  }
  if (latters === "I") {
    Chars = [0, 1, 2, 3, 4, 7, 12, 17, 20, 21, 22, 23, 24, ];
  }

  if (latters === "j") {
    Chars = [0, 1, 2, 3, 4, 9, 14, 15, 19, 21, 22, 23, ];
  }
  if (latters === "k") {
    Chars = [0, 3, 5, 7, 10, 11, 15, 17, 20, 23, ];
  }
  if (latters === "l") {
    Chars = [0, 5, 10, 15, 19, 20, 21, 22, 23, 24, ];
  }
  if (latters === "m") {
    Chars = [0, 4, 5, 6, 8, 9, 10, 12, 14, 15, 19, 20, 24, ];
  }
  if (latters === "n") {
    Chars = [0, 4, 5, 6, 9, 10, 12, 14, 15, 18, 19, 20, 24, ];
  }

  return Chars;
}



heroSlideShowFunction();

function heroSlideShowFunction() {
  var nextSlid = document.getElementById("nextSlide").addEventListener("click", siteShow);
  var prevSlid = document.getElementById("prevSlide").addEventListener("click", siteShowPrev);

  
  var slideIndex = 1;
  let firstSlide = 0;
  let slideTimer = 7000;
  var slideTimeOut;
  heroSlideShow();

  function siteShow() {
    heroSlideShow(slideIndex += 1);
    firstSlide = 1;
    clearTimeout(slideTimeOut);
  }

  function siteShowPrev() {
    heroSlideShow(slideIndex += -1);
    firstSlide = 0;
    // console.log(slideIndex);
    clearTimeout(slideTimeOut);
  }


  function heroSlideShow() {
    var grandparentSlide = document.getElementById("slideContainer");
    var parentSlide = grandparentSlide.getElementsByClassName("heroSlide");
    for (var i = 0; i < parentSlide.length; i++) {
      parentSlide[i].classList.remove("active");
      numOfSlide = parentSlide.length;
    }
    if (firstSlide === 1) {
      slideIndex++;
      console.log("a" + slideIndex);
      console.log(firstSlide);

    }
    if (slideIndex > parentSlide.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = parentSlide.length;
    }
    parentSlide[slideIndex - 1].classList.add("active");
    document.getElementById("sCount").innerText = slideIndex;
    slideTimeOut = setTimeout(heroSlideShow, slideTimer); // Change image every n seconds
    getRandom(clearTimeout(randomTimeout));
    colorePick();
    console.log(randomTimeout);
    textSpliter();

  }
return 0;
}


// var randomInterval;
// var randomNum;
// var randomTimeout;

// // getRandom();
//  function getRandom() {
//   var i;
//   randomNum = Math.floor(Math.random() * (24 - 0)) + 0;
//   randomInterval = Math.floor(Math.random() * (300 - 50)) + 50;
//   var pslides = document.querySelector(".active #miniDisplay");
//   var slides = pslides.getElementsByClassName("vp-item");
//   for (i = 24; i < slides.length; i++) {
//     slides[i].classList.remove("active");
//   }
//   slides[randomNum].classList.add("active");
//   randomTimeout = setTimeout(getRandom, randomInterval); // Change image every n seconds
// }

// colorePick();
function colorePick() {
  var grandparentSlide = document.getElementById("slideContainer");
  // var parentSlide = grandparentSlide.getElementsByClassName("active");
  const canvas = document.querySelector(".active #canvas"),
    preview = document.getElementById("slideBg");
  canvas.width = 1;
  canvas.height = 1;

  preview.width = 400;
  preview.height = 400;

  draw();

  function draw() {
    var ctx = document.querySelector(".active #canvas").getContext('2d');
    var prevColor;
    let newColor;
    var img = new Image();
    img.onload = function () {
      img.crossOrigin = "Anonymous";
      ctx.drawImage(img, 0, 0, 1, 1);
      const p = ctx.getImageData(0, 0, 1, 1).data;
      const rgba = (`rgba(${p[0]},${p[1]},${p[2]},${p[3]})`);
      // console.log(rgba);
      //  console.log("#" + ((1 << 24) + (p[0] << 16) + (p[1] << 8) + p[2]).toString(16).slice(1));
      if (p[0] == [0] &&
        p[1] == [0] && p[2] == [0] && p[3] == [0]) {
        newColor = prevColor;
        // console.log(p);
      } else if (p[0] !== [0] &&
        p[1] !== [0] && p[2] !== [0] && p[3] !== [0]) {
        newColor = rgba;
        let root = document.documentElement;
        root.style.setProperty('--colorChange', newColor);
        root.style.setProperty('--colorPrev', prevColor);
        prevColor = newColor;
        console.log(prevColor)
      }
    };
    img.src = document.querySelector(".active #bgColorSource").src;
  }
};

