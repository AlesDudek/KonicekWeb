const menu = document.querySelector(".headerRight");
const mainMenu = document.querySelector(".headerMenu");
const secondaryMenu = document.querySelector(".headerMenu_change");
const headerScroll = document.querySelector(".headerScroll")
const body = document.querySelector("body")
//Contakt
const contakt = document.querySelector(".js-btn-contakt")
const modalWrapp = document.querySelector(".modal-wrapper")
const modal = document.querySelector(".modal")
const modalClose = document.querySelector(".js-modal-close")

//Support
const support = document.querySelector(".js-btn-support")
const modalWrappSupport = document.querySelector(".modal-wrapper-support")
const modalSupport = document.querySelector(".modal__support")
const modalCloseSupport = document.querySelector(".js-modal-support-close")

const servis = document.querySelector(".js-btn-servis")
const modalWrappServis = document.querySelector(".modal-wrapper-servis")
const modalServis = document.querySelector(".modal__servis")
const modalCloseServis = document.querySelector(".js-modal-servis-close")

mainMenu.addEventListener('click', function(){
  secondaryMenu.style.display = "block"
  secondaryMenu.style.top = "-53px";
  secondaryMenu.style.right = "0"
  mainMenu.style.display = "none"
})
secondaryMenu.addEventListener('click', function(){
  secondaryMenu.style.display = "none";
  mainMenu.style.display = "block"
})
//Wrapper Contakt
contakt.addEventListener('click', function(){
  modalWrapp.style.display = "block";

})
modalClose.addEventListener("click", function(){
  modalWrapp.style.display = "none";
})
//Wrapper Support
support.addEventListener("click", function(){
  modalWrappSupport.style.display = "block";
  
})
modalCloseSupport.addEventListener("click", function(){
  modalWrappSupport.style.display = "none";
})
// Wrapper Servis
servis.addEventListener("click", function(){
  modalWrappServis.style.display = "block"
})
modalCloseServis.addEventListener("click", function(){
  modalWrappServis.style.display = "none"
})

body.addEventListener("click", function(event){
  if(!event.target.closest(".headerRight") && !event.target.closest(".scrollMenu")){
    mainMenu.style.display = "block";
    secondaryMenu.style.display = "none";
  }
});
