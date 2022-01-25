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