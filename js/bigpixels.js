var randomInterval, randomNum, randomTimeout, latters, firstWord, chars, textTimeOut, colorpicTimeOut, timeChars, Chars, slideTimeOut, contentOpen = 0,
  slideTimer = 7e3,
  clicked = !1;

function slideHeroLernMore() {
  return document.querySelector(".heroSliderControler").classList.add("open"), document.querySelector(".active .slideFullContent").classList.add("open"), clearTimeout(slideTimeOut), contentOpen = 1
}

function slideController() {
  return document.querySelector(".heroSliderControler").classList.remove("open"), document.querySelector(".active .slideFullContent").classList.remove("open"), 1 === contentOpen && (clearTimeout(slideTimeOut), heroSlideShow(slideAutoTime = 0), contentOpen = 0), contentOpen
}
document.querySelector(".heroSliderControler .slideCounter").addEventListener("click", slideController);
var nextSlid = document.getElementById("nextSlide").addEventListener("click", slideNext),
  prevSlid = document.getElementById("prevSlide").addEventListener("click", slidePrevious),
  slideIndex = 1,
  firstSlide = 0,
  slideAutoTime = 0;

function slideNext() {
  clicked || (clicked = !0, 0 === firstSlide && (document.querySelector(".prevSlide span").innerHTML = "play_disabled", firstSlide = 1), heroSlideShow(slideIndex += 1, slideAutoTime = 0), setTimeout(function () {
    clicked = !1
  }, 1e3))
}

function slidePrevious() {
  return clicked || (clicked = !0, 1 === firstSlide ? firstSlide = 0 : heroSlideShow(slideIndex += -1), clearTimeout(slideTimeOut), document.querySelector(".prevSlide span").innerHTML = "north", setTimeout(function () {
    clicked = !1
  }, 1e3)), slidePrevious
}

function slideAuto() {
  const e = setInterval(() => (1 === firstSlide && (clearTimeout(slideTimeOut), slideAutoTime >= 1 && 0 === contentOpen && (document.querySelector(".prevSlide span").innerHTML = "play_disabled", clearTimeout(slideTimeOut), heroSlideShow(slideIndex += 1, slideAutoTime = 0))), slideIndex > numOfSlide && (slideIndex = 0, clearInterval(e), slideAuto()), console.log("slideTimer" + slideTimer), slideIndex), slideTimer)
}

function heroSlideShow() {
  for (var e = document.getElementById("slideContainer").getElementsByClassName("heroSlide"), t = 0; t < e.length; t++) e[t].classList.remove("active", "nextSlideDiv"), numOfSlide = e.length;
  slideAutoTime++, slideIndex > e.length && (slideIndex = 1), slideIndex < 1 && (slideIndex = e.length), slideIndex === e.length ? e[0].classList.add("nextSlideDiv") : e[slideIndex].classList.add("nextSlideDiv"), e[slideIndex - 1].classList.add("active"), setTimeout(() => {
    document.querySelector(".active .heroContentBox").dataset.stateVal = "on"
  }, 100), document.querySelector(".active .heroContentBox").dataset.stateVal = "off", document.getElementById("sCount").innerText = slideIndex, document.querySelector(".active .heroContentBox a").addEventListener("click", slideHeroLernMore), document.querySelector(".active .heroContentBox a").addEventListener("click", slideHeroLernMore);
  const r = document.querySelector(".nextSlideDiv .heroContentBox .animWrap h1").textContent.split(" ")[0];
  return slideTimer = r.length < 3 ? 7e3 : 1e3 * r.length + 2e3, colorePick(clearTimeout(colorpicTimeOut)), bigPixels(wd = 0), !1
}

function colorePick() {
  const e = document.querySelector(".active #canvas"),
    t = document.getElementById("slideBg");
  e.width = 2, e.height = 2, t.width = 2, t.height = 2,
    function () {
      var e, t, r, s, l, i, o, n = document.querySelector(".active #canvas").getContext("2d");
      let a, d;
      var c = new Image;
      c.onload = function () {
        c.crossOrigin = "Anonymous", n.drawImage(c, 0, 0, 1, 5);
        const u = n.getImageData(0, 0, 1, 6).data,
          m = n.getImageData(0, 1, 1, 6).data,
          h = `rgba(${u[0]},${u[1]},${u[2]},${u[3]})`,
          C = `rgba(${m[0]},${m[1]},${m[2]},${m[3]})`;
        if (l = u[0], i = u[1], o = u[2], t = "#" + ((1 << 24) + (u[0] << 16)).toString(16).slice(1), r = "#" + ((1 << 24) + (u[1] << 8)).toString(16).slice(1), s = "#" + ((1 << 24) + u[2]).toString(16).slice(1), u[3], u[0] == [0] && u[1] == [0] && u[2] == [0] && u[3] == [0]) d = e;
        else if (u[0] !== [0] && u[1] !== [0] && u[2] !== [0] && u[3] !== [0]) {
          d = h;
          let n = document.documentElement;
          n.style.setProperty("--colorChange", h), n.style.setProperty("--accentColor", C), n.style.setProperty("--r", l), n.style.setProperty("--g", i), n.style.setProperty("--b", o), n.style.setProperty("--red", t), n.style.setProperty("--green", r), n.style.setProperty("--blue", s), n.style.setProperty("--slideBgImage", a), n.style.setProperty("--slideBgImage", a), e = h
        }
      }, c.src = document.querySelector(".active #bgColorSource").src, a = "url(" + c.src, document.querySelector(".active .slideMainImageWrap img").src = c.src
    }(), 1 === firstSlide && (colorpicTimeOut = setTimeout(colorePick, slideTimer))
}

function bigPixels(e) {
  const t = document.querySelector(".active .heroContentBox .animWrap h1").textContent;
  let r = e;
  const s = t.split(" ");
  firstWord = s[0], chars = firstWord.split("");
  const l = setInterval(() => {
    let e;
    void 0 === chars[r] || (latters = chars[r], console.log(r, chars[r])), r++;
    dspChars();
    randomNum = Math.floor(6 * Math.random()) + 1;
    for (var t = document.querySelector(".active #miniDisplay").getElementsByClassName("dspPixel"), s = 0; s < t.length; s++)
      for (t[s].classList.remove("active"), e = 0; e < Chars.length; e++) {
        t[s].style.transform = "scale(1)";
        var i = Chars[e];
        t[i].classList.add("active"), t[i].style.transform = "scale(" + randomNum + ")", t[i].style.boxShadow = "0px 0px " + randomNum + "px) #000 "
      }
    clearTimeout(timeChars), r > firstWord.length && clearInterval(l)
  }, 1e3)
}

function dspChars() {
  return "a" === latters && (Chars = [1, 2, 3, 5, 9, 10, 11, 12, 13, 14, 15, 19, 20, 24]), "A" === latters && (Chars = [1, 2, 3, 5, 9, 10, 11, 12, 13, 14, 15, 19, 20, 24]), "b" === latters && (Chars = [0, 1, 2, 3, 5, 9, 10, 11, 12, 13, 15, 19, 20, 21, 22, 23]), "c" === latters && (Chars = [0, 1, 2, 3, 4, 5, 9, 10, 15, 19, 20, 21, 22, 23, 24]), "d" === latters && (Chars = [0, 1, 2, 3, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23]), "D" === latters && (Chars = [0, 1, 2, 3, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23]), "e" === latters && (Chars = [0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 15, 19, 20, 21, 22, 23, 24]), "f" === latters && (Chars = [0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 15, 20]), "g" === latters && (Chars = [0, 1, 2, 3, 4, 5, 10, 12, 13, 14, 15, 19, 20, 21, 22, 23, 24]), "G" === latters && (Chars = [0, 1, 2, 3, 4, 5, 10, 12, 13, 14, 15, 19, 20, 21, 22, 23, 24]), "h" === latters && (Chars = [0, 4, 5, 9, 10, 11, 12, 13, 14, 15, 19, 20, 24]), "i" === latters && (Chars = [0, 1, 2, 3, 4, 7, 12, 17, 20, 21, 22, 23, 24]), "I" === latters && (Chars = [0, 1, 2, 3, 4, 7, 12, 17, 20, 21, 22, 23, 24]), "j" === latters && (Chars = [0, 1, 2, 3, 4, 9, 14, 15, 19, 21, 22, 23]), "k" === latters && (Chars = [0, 3, 5, 7, 10, 11, 15, 17, 20, 23]), "K" === latters && (Chars = [0, 3, 5, 7, 10, 11, 15, 17, 20, 23]), "l" === latters && (Chars = [0, 5, 10, 15, 19, 20, 21, 22, 23, 24]), "m" === latters && (Chars = [0, 4, 5, 6, 8, 9, 10, 12, 14, 15, 19, 20, 24]), "n" === latters && (Chars = [0, 4, 5, 6, 9, 10, 12, 14, 15, 18, 19, 20, 24]), "N" === latters && (Chars = [0, 4, 5, 6, 9, 10, 12, 14, 15, 18, 19, 20, 24]), "o" === latters && (Chars = [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, 24]), "p" === latters && (Chars = [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 16, 17, 18, 19, 20]), "q" === latters && (Chars = [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 16, 17, 18, 24]), "r" === latters && (Chars = [0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14, 15, 18, 20, 24]), "s" === latters && (Chars = [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 19, 20, 21, 22, 23, 24]), "t" === latters && (Chars = [0, 1, 2, 3, 4, 5, 7, 9, 12, 17, 21, 22, 23]), "u" === latters && (Chars = [0, 4, 5, 9, 10, 14, 15, 19, 21, 22, 23]), "v" === latters && (Chars = [0, 4, 5, 9, 10, 14, 16, 18, 22]), "w" === latters && (Chars = [0, 4, 5, 9, 10, 14, 15, 17, 19, 21, 23]), "W" === latters && (Chars = [0, 4, 5, 9, 10, 14, 15, 17, 19, 21, 23]), "x" === latters && (Chars = [0, 4, 6, 8, 12, 16, 18, 20, 24]), "y" === latters && (Chars = [0, 4, 6, 8, 12, 17, 22]), "z" === latters && (Chars = [0, 1, 2, 3, 4, 8, 9, 12, 15, 16, 20, 21, 22, 23, 24]), "first" === latters && (Chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]), Chars
}
heroSlideShow(slideIndex), slideAuto(), colorePick(), bigPixels(), dspChars();