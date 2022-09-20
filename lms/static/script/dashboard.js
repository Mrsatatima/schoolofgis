const sideBar = document.querySelector("#side");
const hamburger = document.querySelector("#hamburger");
const navigatorText = document.querySelectorAll(".nav-text")
const navigationIcon = document.querySelectorAll(".nav-img")

function rotateHamburger() {
  hamburger.classList.toggle("active")
  sideBar.classList.toggle("active")

  for (let index = 0; index < navigationIcon.length; index++) {
    navigatorText[index].classList.toggle("active")
    navigationIcon[index].classList.toggle("active");
    
  }
  
}

hamburger.addEventListener("click", rotateHamburger);
