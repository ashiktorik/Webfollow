
let numOfGeo;
var getIndexNum = 5;
var group;
var pCollect = document.getElementById("geoRow");
var collect = pCollect.getElementsByClassName("geoTile");
 for (var i = 0; i < collect.length; i++){
   numOfGeo = collect.length;
   console.log(collect);
collect[i].addEventListener("mouseover", slideScale);  
collect[i].addEventListener("mouseout",slideScaleDown); 
collect[i].addEventListener("mouseout",slideOn); 
}

let widthOfGeoOut = 100 / numOfGeo;
var widthOfGeoOfmouseOut = "calc("+ widthOfGeoOut+"% - 14.5px" + ")";

let widthOfGeoIn = 55 / numOfGeo;
var widthOfGeoOfmouseIn = "calc("+ widthOfGeoIn+"% - 5.5px" + ")";

 for (var i = 0; i < collect.length; i++){
   group = collect[i];
   collect[i].style.width = ""+widthOfGeoOfmouseOut+"";
 }
function slideScale() {
  for (var i = 0; i < collect.length; i++){
   group = collect[i];
   group.style.width = ""+widthOfGeoOfmouseIn+"";
   this.style.width = "45%";
}}

   
function slideScaleDown() {
for (var i = 0; i < collect.length; i++){
   group = collect[i];
   group.style.width = ""+widthOfGeoOfmouseOut+"";
}}

function slideOn(){
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
  if (getIndexNum != 0){
    slides[slideIndexPlus-1].classList.add("geotileActive");
  }
  slideIndexMinus++;
  if (slideIndexMinus > slides.length) {
    slideIndexMinus = getIndexNum;
    if(getIndexNum < 1){
      slideIndexMinus = 1;
    }
    // return;
  } 

  slides[slideIndexMinus-1].classList.add("geotileActive");
  setTimeout(showSlides, 1000); // Change image every 2 seconds 
}

const delegate = (fn, selector) => {
  return function handler(event) {
    const matchingEl = matches(event.target, selector, this);
    if (matchingEl != null) {
      fn.call(matchingEl, event);
    }
  };
};

const wpEdit = document.getElementsByClassName('geoTile');
for(let i = 0; i < wpEdit.length; i++){
  wpEdit[i].addEventListener('mouseover',function(){
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
  for (var i = 0 ; i < doors.length; i++){
  doors[i].classList.remove("close");
  doors[i].classList.add("open", "active");
}
  setInterval(function () {
var leftDoorWidth = document.getElementById("leftDoor");
var offset2 = leftDoorWidth.offsetWidth;
console.log(offset2);
var doorsIndex = document.getElementById("doorsIndex");
var offset = doorsIndex.offsetLeft;
 console.log(offset);
if (offset > offset2){
  doorsIndex.classList.remove("locked");
  doorsIndex.classList.add("unlock");
}
}, 100);
  return;
}

function doorClose() {
  for (var i = 0 ; i < doors.length; i++){
doors[i].classList.remove("open", "active");
doors[i].classList.add("close");
doorsIndex.classList.remove("unlock");
doorsIndex.classList.add("locked");
}
}
