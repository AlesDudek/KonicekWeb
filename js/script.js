const menu = document.querySelector(".headerRight");
const mainMenu = document.querySelector(".headerMenu");
const secondaryMenu = document.querySelector(".headerMenu_change");
const headerScroll = document.querySelector(".headerScroll")
const body = document.querySelector("body")

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
  body.addEventListener("click", function(event){
    if(!event.target.closest(".headerRight") && !event.target.closest(".scrollMenu")){
      mainMenu.style.display = "block";
      secondaryMenu.style.display = "none";
    }
  });
  