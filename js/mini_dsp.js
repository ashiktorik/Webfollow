    var randomInterval, randomNum, randomTimeout, latters, word2, chars, slideTimeOut;
    var Chars = textSpliter();
    var contentOpen = 0;
    function textSpliter() {
      const str = document.querySelector(".active .heroContentBox h1").textContent;
      // const str = "text font";
      const words = str.split(' ');
      word2 = words[0];
      chars = word2.split('');
      const delay = async (ms = 1000) =>
        new Promise(resolve => setTimeout(resolve, ms))
      async function textAfter() {
        for (let i = 0; i < word2.length; i += 1) {
          latters = chars[i];
          console.log(chars[i])
          await delay(1000)
        }
      }
      textAfter();
      return latters;
    }


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
      contentOpen = 0;
      return contentOpen;
    }


    heroSlideShowFunction();

    function heroSlideShowFunction() {
      var nextSlid = document.getElementById("nextSlide").addEventListener("click", slideNext);
      var prevSlid = document.getElementById("prevSlide").addEventListener("click", slidePrevious);

      var slideIndex = 1;
      var firstSlide = 0;
      var slideTimer = 7000;
      var slideAutoTime = 0;
      heroSlideShow();

      function slideNext() {

        if (firstSlide === 0) {
          firstSlide = 1;
        }
        heroSlideShow(slideIndex += 1, slideAutoTime = 0);
        clearTimeout(slideTimeOut);
      }

      function slidePrevious() {
        heroSlideShow(slideIndex += -1);
        clearTimeout(slideTimeOut);
        firstSlide = 0;
        document.querySelector(".prevSlide span").innerHTML = "north";
        console.log("slideTimer" + slideTimer);
      }

      function heroSlideShow() {

        var grandparentSlide = document.getElementById("slideContainer");
        var parentSlide = grandparentSlide.getElementsByClassName("heroSlide");
        for (var i = 0; i < parentSlide.length; i++) {
          parentSlide[i].classList.remove("active");
          numOfSlide = parentSlide.length;
        }
        slideAutoTime++;
        if (firstSlide === 1) {
          if (slideAutoTime > 1) {
            if (contentOpen === 0) {
              slideIndex++;
            }
          }
          document.querySelector(".prevSlide span").innerHTML = "play_disabled";
          // console.log("slideIndex: " + slideIndex);
          // console.log("firstSlide" + firstSlide);
          console.log(contentOpen)
        }


        // console.log(slideAutoTime);
        if (slideIndex > parentSlide.length) {
          slideIndex = 1;
        }
        if (slideIndex < 1) {
          slideIndex = parentSlide.length;
        }
        parentSlide[slideIndex - 1].classList.add("active");
        document.getElementById("sCount").innerText = slideIndex;
        document.querySelector(".active .heroContentBox a").addEventListener("click", slideHeroLernMore);
        slideTimeOut = setTimeout(heroSlideShow, slideTimer); // Change image every n seconds
        miniDsp(clearTimeout(randomTimeout));
        colorePick();
        // console.log("randomTimeout: " + randomTimeout);
        textSpliter();

      }
      return 0;
    }



    miniDsp();

    function miniDsp() {
      var i;
      let j;
      var Char = dspChars();
      randomNum = Math.floor(Math.random() * (7 - 1)) + 1;
      var pslides = document.querySelector(".active #miniDisplay");
      var slides = pslides.getElementsByClassName("dspPixel");
      for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        for (j = 0; j < Chars.length; j++) {
          slides[i].style.transform = ("scale(1)");
          var frts = Chars[j];
          // console.log(Chars);
          slides[frts].classList.add("active");
          slides[frts].style.transform = ("scale(" + randomNum + ")");
          slides[frts].style.boxShadow = ("0px 0px " + randomNum + "px) #000 ");
        }
      }
      randomTimeout = setTimeout(miniDsp, 1000);
    }


    colorePick();

    function colorePick() {
      var grandparentSlide = document.getElementById("slideContainer");
      // var parentSlide = grandparentSlide.getElementsByClassName("active");
      const canvas = document.querySelector(".active #canvas"),
        preview = document.getElementById("slideBg");
      canvas.width = 2;
      canvas.height = 2;

      preview.width = 400;
      preview.height = 400;

      draw();

      function draw() {
        var ctx = document.querySelector(".active #canvas").getContext('2d');
        var prevColor;
        let bgImg;
        let newColor;
        var img = new Image();
        img.onload = function () {
          img.crossOrigin = "Anonymous";
          ctx.drawImage(img, 0, 0, 9, 100);
          const p = ctx.getImageData(0, 0, 1, 300).data;
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
            root.style.setProperty('--slideBgImage', bgImg);
            // console.log(bgImg);
            prevColor = newColor;
            // console.log(prevColor)

          }
        };
        img.src = document.querySelector(".active #bgColorSource").src;
        bgImg = "url(" + img.src;
        document.querySelector(".active .slideMainImageWrap img").src = img.src;
      }
      // setTimeout(colorePick, 500);
    };


    function dspChars() {

      if (latters === "a") {
        Chars = [1, 2, 3, 5, 9, 10, 11, 12, 13, 14, 15, 19, 20, 24, ];
      }
      if (latters === "A") {
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
      if (latters === "K") {
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
      if (latters === "N") {
        Chars = [0, 4, 5, 6, 9, 10, 12, 14, 15, 18, 19, 20, 24, ];
      }

      if (latters === "o") {
        Chars = [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, 24, ];
      }

      if (latters === "p") {
        Chars = [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 16, 17, 18, 19, 20, ];
      }

      if (latters === "q") {
        Chars = [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 16, 17, 18, 24, ];
      }

      if (latters === "r") {
        Chars = [0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14, 15, 18, 20, 24, ];
      }

      if (latters === "s") {
        Chars = [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 19, 20, 21, 22, 23, 24];
      }

      if (latters === "t") {
        Chars = [0, 1, 2, 3, 4, 5, 7, 9, 12, 17, 21, 22, 23, ];
      }
      if (latters === "u") {
        Chars = [0, 4, 5, 9, 10, 14, 15, 19, 21, 22, 23, ];
      }

      if (latters === "v") {
        Chars = [0, 4, 5, 9, 10, 14, 16, 18, 22, ];
      }

      if (latters === "w") {
        Chars = [0, 4, 5, 9, 10, 14, 15, 17, 19, 21, 23, ];
      }
      if (latters === "W") {
        Chars = [0, 4, 5, 9, 10, 14, 15, 17, 19, 21, 23, ];
      }

      if (latters === "x") {
        Chars = [0, 4, 6, 8, 12, 16, 18, 20, 24, ];
      }
      if (latters === "y") {
        Chars = [0, 4, 6, 8, 12, 17, 22, ];
      }

      if (latters === "z") {
        Chars = [0, 1, 2, 3, 4, 8, 9, 12, 15, 16, 20, 21, 22, 23, 24, ];
      }

      if (latters === "first") {
        Chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, ];
      }


      return Chars;
    }