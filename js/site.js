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


heroSlideShowFunction();
function heroSlideShowFunction() {
  var nextSlid = document.getElementById("nextSlide").addEventListener("click", siteShow);
  var prevSlid = document.getElementById("prevSlide").addEventListener("click", siteShowPrev);


  var slideIndex = 1;
  var firstSlide = 0;
  heroSlideShow()

  function siteShow() {
    heroSlideShow(slideIndex += 1);
    firstSlide = 1;
    console.log(firstSlide);
  }

  function siteShowPrev() {
    heroSlideShow(slideIndex += -1);
    // console.log(slideIndex);
  }
 
    function slideAuto() {
      if (firstSlide === 1) {
        slideIndex++;
        setTimeout(slideAuto, 7000);
        console.log("a" + slideIndex);
      }
    };

  function heroSlideShow() {
    var grandparentSlide = document.getElementById("slideContainer");
    var parentSlide = grandparentSlide.getElementsByClassName("heroSlide");

    for (var i = 0; i < parentSlide.length; i++) {
      parentSlide[i].classList.remove("active");
    }
    if (slideIndex > parentSlide.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = parentSlide.length;
    }
    parentSlide[slideIndex - 1].classList.add("active");
    document.getElementById("sCount").innerText = slideIndex;
    colorePick();
    // getRandom();
    setTimeout(heroSlideShow, 7000); // Change image every 2 seconds
  }

}


getRandom();
var randomInterval;
var randomNum;
function getRandom() {
  var i;
  randomNum = Math.floor(Math.random() * (24 - 0)) + 0;
  randomInterval = Math.floor(Math.random() * (300 - 50)) + 50;
  var pslides = document.querySelector(".active #miniDisplay");
  var slides = pslides.getElementsByClassName("vp-item");
  for (i = randomNum; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[randomNum].classList.add("active");
  setTimeout(getRandom, 360); // Change image every n seconds 
}

colorePick();
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
    let prevColor;
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
        prevColor = rgba;
        let root = document.documentElement;
        root.style.setProperty('--colorChange', newColor);
      }
    };
    img.src = document.querySelector(".active #bgColorSource").src;
  }
}