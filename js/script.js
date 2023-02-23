const menu = document.querySelector(".headerRight");
const mainMenu = document.querySelector(".headerMenu");
const secondaryMenu = document.querySelector(".headerMenu_change");
const headerScroll = document.querySelector(".headerScroll")
const body = document.querySelector("body")

// menu.addEventListener("click", function(event){
//     event.preventDefault();
//     if(mainMenu === mainMenu){
//         secondaryMenu.style.display = "block"
//         headerScroll.style.display = "block"
//         mainMenu.style.display = "none"
//   }else{
//       secondaryMenu.style.display = "none"
//       headerScroll.style.display = "none"
//       mainMenu.style.display = "block"
//     }
//   })
  
  
  body.addEventListener("click", function(event){
    console.log("da");
    event.preventDefault();
    event.stopPropagation()
    if(mainMenu.style.display === "block"){
      mainMenu.style.display = "none";
      secondaryMenu.style.display = "block";
      secondaryMenu.style.top = "-53px";
      secondaryMenu.style.right = "0"
    } else {
      mainMenu.style.display = "block";
      secondaryMenu.style.display = "none";
    }
  });
  
  body.addEventListener("click", function(event){
    if(!event.target.closest(".headerRight") && !event.target.closest(".scrollMenu")){
      mainMenu.style.display = "block";
      secondaryMenu.style.display = "none";
    }
  });
  