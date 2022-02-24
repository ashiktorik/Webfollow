var randomInterval, randomNum, randomTimeout, latters, firstWord, chars, slideTimeOut, textTimeOut, colorpicTimeOut, timeChars;
var Chars;
var slideTimeOut
var contentOpen = 0;
var slideTimer = 7000;
var clicked = false;



function slideHeroLernMore() {
  document.querySelector(".heroSliderControler").classList.add("open");
  document.querySelector(".active .slideFullContent").classList.add("open");
  clearTimeout(slideTimeOut);
  contentOpen = 1;
  return contentOpen;
}

document.querySelector(".heroSliderControler .slideCounter").addEventListener("click", slideController);

function slideController() {
  document.querySelector(".heroSliderControler").classList.remove("open");
  document.querySelector(".active .slideFullContent").classList.remove("open");
  if (contentOpen === 1) {
    clearTimeout(slideTimeOut);
    heroSlideShow(slideAutoTime = 0);
    contentOpen = 0;
  }
  return contentOpen;
}

var nextSlid = document.getElementById("nextSlide").addEventListener("click", slideNext);
var prevSlid = document.getElementById("prevSlide").addEventListener("click", slidePrevious);

var slideIndex = 1;
var firstSlide = 0;
// var slideTimer = 7000;
var slideAutoTime = 0;
heroSlideShow(slideIndex);


function slideNext() {
  if (!clicked) {
    clicked = true;
    if (firstSlide === 0) {
      document.querySelector(".prevSlide span").innerHTML = "play_disabled";
      firstSlide = 1;
    }
    heroSlideShow(slideIndex += 1, slideAutoTime = 0);

    setTimeout(function () {

      clicked = false;
    }, 1000);
  }
  // return slideNext;
}


function slidePrevious() {
  if (!clicked) {
    clicked = true;
    if (firstSlide === 1) {
      firstSlide = 0;
    } else {
      heroSlideShow(slideIndex += -1);
    }
    clearTimeout(slideTimeOut);
    document.querySelector(".prevSlide span").innerHTML = "north";
    // console.log("slideTimer" + slideTimer);

    setTimeout(function () {

      clicked = false;
    }, 1000);
  }
  return slidePrevious;
}



slideAuto();

function slideAuto() {
  const i = setInterval(() => {
    if (firstSlide === 1) {
      clearTimeout(slideTimeOut);
      if (slideAutoTime >= 1) {
        if (contentOpen === 0) {
          document.querySelector(".prevSlide span").innerHTML = "play_disabled";
          // heroSlideShow(slideIndex++);
          clearTimeout(slideTimeOut);
          heroSlideShow(slideIndex += 1, slideAutoTime = 0);
        }
      }
      // console.log("slideIndex: " + slideIndex);
      // console.log("firstSlide" + firstSlide);
      // console.log("contentOpen "+contentOpen)
    }
    if (slideIndex > numOfSlide) {
      slideIndex = 0;
      clearInterval(i);
      slideAuto();
    }
    console.log("slideTimer" + slideTimer);
    return slideIndex;
  }, slideTimer);
}


function heroSlideShow() {
  var grandparentSlide = document.getElementById("slideContainer");
  var parentSlide = grandparentSlide.getElementsByClassName("heroSlide");
  for (var i = 0; i < parentSlide.length; i++) {
    parentSlide[i].classList.remove("active", "nextSlideDiv");
    numOfSlide = parentSlide.length;
    //document.querySelector(".active .heroContentBox").classList.remove("active");
  }
  slideAutoTime++;
  // console.log("slideAutoTime "+slideAutoTime);
  if (slideIndex > parentSlide.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = parentSlide.length;
  }

  if (slideIndex === parentSlide.length) {
    parentSlide[0].classList.add("nextSlideDiv");
  } else {
    parentSlide[slideIndex].classList.add("nextSlideDiv");
  }
  parentSlide[slideIndex - 1].classList.add("active");
  setTimeout(() => {
    const dataStateVal = document.querySelector(".active .heroContentBox");
    dataStateVal.dataset.stateVal = "on";

  }, 100);
  const dataStateVale = document.querySelector(".active .heroContentBox");
  dataStateVale.dataset.stateVal = "off";
  document.getElementById("sCount").innerText = slideIndex;
  document.querySelector(".active .heroContentBox a").addEventListener("click", slideHeroLernMore);

  //Add event to the learn more button under the slider content
  document.querySelector(".active .heroContentBox a").addEventListener("click", slideHeroLernMore);
  const defineSildeTime = document.querySelector(".nextSlideDiv .heroContentBox .animWrap h1").textContent;
  const howManyWord = defineSildeTime.split(' ');
  const beginWord = howManyWord[0];
  if (beginWord.length < 3) {
    slideTimer = 7000;
  } else {
    slideTimer = (beginWord.length * 1000) + 2000;
  }

  if (firstSlide === 1) {
    if (contentOpen === 0) {
      // slideTimeOut = setTimeout(heroSlideShow, slideTimer); // Change image every n seconds
    }
    // console.log("slideTimeOut a: " + slideTimeOut);
  }
  colorePick(clearTimeout(colorpicTimeOut));
  //setTimeout(() => {
    bigPixels(wd = 0);
 // }, 700);
  // textAfter();

  // console.log("textTimeOut: " + textTimeOut);
  // console.log("slideTimer" + slideTimer);
  return false;
}





colorePick();

function colorePick() {
  // var parentSlide = grandparentSlide.getElementsByClassName("active");
  const canvas = document.querySelector(".active #canvas"),
    preview = document.getElementById("slideBg");
  canvas.width = 2;
  canvas.height = 2;
  preview.width = 2;
  preview.height = 2;

  draw();

  function draw() {
    var ctx = document.querySelector(".active #canvas").getContext('2d');
    var prevColor, colorRed, colorGreen, colorBlue, red, green, blue, alpha;
    let bgImg;
    let newColor;
    var img = new Image();
    img.onload = function () {
      img.crossOrigin = "Anonymous";
      ctx.drawImage(img, 0, 0, 1, 5);
      const p = ctx.getImageData(0, 0, 1, 6).data;
      const p2 = ctx.getImageData(0, 1, 1, 6).data;
      const rgba = (`rgba(${p[0]},${p[1]},${p[2]},${p[3]})`);
      const rgba2 = (`rgba(${p2[0]},${p2[1]},${p2[2]},${p2[3]})`);
      red = p[0];
      green = p[1];
      blue = p[2];
      colorRed = ("#" + ((1 << 24) + (p[0] << 16)).toString(16).slice(1));
      colorGreen = ("#" + ((1 << 24) + (p[1] << 8)).toString(16).slice(1));
      colorBlue = ("#" + ((1 << 24) + p[2]).toString(16).slice(1));
      alpha = p[3];

      // console.log(colorRed +" " + colorGreen + " " +colorBlue);
      //  console.log("#" + ((1 << 24) + (p[0] << 16) + (p[1] << 8) + p[2]).toString(16).slice(1));
      if (p[0] == [0] &&
        p[1] == [0] && p[2] == [0] && p[3] == [0]) {
        newColor = prevColor;
        // console.log(p);
      } else if (p[0] !== [0] &&
        p[1] !== [0] && p[2] !== [0] && p[3] !== [0]) {
        newColor = rgba;
        let root = document.documentElement;
        root.style.setProperty('--colorChange', rgba);
        root.style.setProperty('--accentColor', rgba2);
        root.style.setProperty('--r', red);
        root.style.setProperty('--g', green);
        root.style.setProperty('--b', blue);
        root.style.setProperty('--red', colorRed);
        root.style.setProperty('--green', colorGreen);
        root.style.setProperty('--blue', colorBlue);
        root.style.setProperty('--slideBgImage', bgImg);
        // console.log(bgImg);
        prevColor = rgba;

        // console.log(prevColor);

      }
      return
    }
    img.src = document.querySelector(".active #bgColorSource").src;
    bgImg = "url(" + img.src;
    document.querySelector(".active .slideMainImageWrap img").src = img.src;
    // document.querySelector("#sectionHero #bg-container img").src = img.src
  }
  if (firstSlide === 1) {
    colorpicTimeOut = setTimeout(colorePick, slideTimer);
  }

  return
};



function bigPixels(n) {
  const str = document.querySelector(".active .heroContentBox .animWrap h1").textContent;
  let wd = n;
  const words = str.split(' ');
  firstWord = words[0];
  chars = firstWord.split('');
 do{
    const t = setInterval(() => {
      if (chars[wd] === undefined) {
  
      } else {
        latters = chars[wd];
        console.log(wd, chars[wd]);
      }
  
      wd++;
      let j;
      var Char = dspChars();
      randomNum = Math.floor(Math.random() * (7 - 1)) + 1;
      var pslides = document.querySelector(".active #miniDisplay");
      var slides = pslides.getElementsByClassName("dspPixel");
    if(wd <= firstWord.length){
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        for (j = 0; j < Chars.length; j++) {
          slides[i].style.transform = ("scale(1)");
          var nPixel = Chars[j];
          // console.log(Chars);
          slides[nPixel].classList.add("active");
          slides[nPixel].style.transform = ("scale(" + randomNum + ")");
          slides[nPixel].style.boxShadow = ("0px 0px " + randomNum + "px) #000 ");
        }
      }
    }
      if (wd >= firstWord.length) {
       clearInterval(t);
      }
    }, 1000);
  }
  while(wd > firstWord.length);
  return;
}
bigPixels();





dspChars();

function dspChars() {

  if (latters === "a") {
    Chars = [1, 2, 3, 5, 9, 10, 11, 12, 13, 14, 15, 19, 20, 24];
  }
  if (latters === "A") {
    Chars = [1, 2, 3, 5, 9, 10, 11, 12, 13, 14, 15, 19, 20, 24];
  }
  if (latters === "b") {
    Chars = [0, 1, 2, 3, 5, 9, 10, 11, 12, 13, 15, 19, 20, 21, 22, 23];
  }
  if (latters === "c") {
    Chars = [0, 1, 2, 3, 4, 5, 9, 10, 15, 19, 20, 21, 22, 23, 24];
  }

  if (latters === "d") {
    Chars = [0, 1, 2, 3, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23];
  }
  if (latters === "D") {
    Chars = [0, 1, 2, 3, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23];
  }

  if (latters === "e") {
    Chars = [0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 15, 19, 20, 21, 22, 23, 24];
  }
  if (latters === "f") {
    Chars = [0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 15, 20];
  }
  if (latters === "g") {
    Chars = [0, 1, 2, 3, 4, 5, 10, 12, 13, 14, 15, 19, 20, 21, 22, 23, 24];
  }
  if (latters === "G") {
    Chars = [0, 1, 2, 3, 4, 5, 10, 12, 13, 14, 15, 19, 20, 21, 22, 23, 24];
  }

  if (latters === "h") {
    Chars = [0, 4, 5, 9, 10, 11, 12, 13, 14, 15, 19, 20, 24];
  }

  if (latters === "i") {
    Chars = [0, 1, 2, 3, 4, 7, 12, 17, 20, 21, 22, 23, 24];
  }
  if (latters === "I") {
    Chars = [0, 1, 2, 3, 4, 7, 12, 17, 20, 21, 22, 23, 24];
  }

  if (latters === "j") {
    Chars = [0, 1, 2, 3, 4, 9, 14, 15, 19, 21, 22, 23];
  }
  if (latters === "k") {
    Chars = [0, 3, 5, 7, 10, 11, 15, 17, 20, 23];
  }
  if (latters === "K") {
    Chars = [0, 3, 5, 7, 10, 11, 15, 17, 20, 23];
  }
  if (latters === "l") {
    Chars = [0, 5, 10, 15, 19, 20, 21, 22, 23, 24];
  }
  if (latters === "m") {
    Chars = [0, 4, 5, 6, 8, 9, 10, 12, 14, 15, 19, 20, 24];
  }
  if (latters === "n") {
    Chars = [0, 4, 5, 6, 9, 10, 12, 14, 15, 18, 19, 20, 24];
  }
  if (latters === "N") {
    Chars = [0, 4, 5, 6, 9, 10, 12, 14, 15, 18, 19, 20, 24];
  }

  if (latters === "o") {
    Chars = [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, 24];
  }

  if (latters === "p") {
    Chars = [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 16, 17, 18, 19, 20];
  }

  if (latters === "q") {
    Chars = [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 16, 17, 18, 24];
  }

  if (latters === "r") {
    Chars = [0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14, 15, 18, 20, 24];
  }

  if (latters === "s") {
    Chars = [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 19, 20, 21, 22, 23, 24];
  }

  if (latters === "t") {
    Chars = [0, 1, 2, 3, 4, 5, 7, 9, 12, 17, 21, 22, 23];
  }
  if (latters === "u") {
    Chars = [0, 4, 5, 9, 10, 14, 15, 19, 21, 22, 23];
  }

  if (latters === "v") {
    Chars = [0, 4, 5, 9, 10, 14, 16, 18, 22];
  }

  if (latters === "w") {
    Chars = [0, 4, 5, 9, 10, 14, 15, 17, 19, 21, 23];
  }
  if (latters === "W") {
    Chars = [0, 4, 5, 9, 10, 14, 15, 17, 19, 21, 23];
  }

  if (latters === "x") {
    Chars = [0, 4, 6, 8, 12, 16, 18, 20, 24];
  }
  if (latters === "y") {
    Chars = [0, 4, 6, 8, 12, 17, 22];
  }

  if (latters === "z") {
    Chars = [0, 1, 2, 3, 4, 8, 9, 12, 15, 16, 20, 21, 22, 23, 24];
  }

  if (latters === "first") {
    Chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  }


  return Chars;
}
