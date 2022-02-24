let manuBar = document.querySelector("ul.navManu");
manuBar.addEventListener("click", manuAction);
function manuAction(){
  manuBar.classList.add("clicked");
  document.querySelector(".hamCenter").classList.add("menuContainerHam");
  document.querySelector(".menuContainer").classList.add("openManu");
}
let navContainerClose = document.querySelector(".nav-close-wrap").addEventListener("click", navClose);
function navClose(){
  manuBar.classList.remove("clicked");
  document.querySelector(".hamCenter").classList.remove("menuContainerHam");
  document.querySelector(".menuContainer").classList.remove("openManu");
}