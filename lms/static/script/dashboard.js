const sideBar = document.querySelector("#side");
const hamburger = document.querySelector("#hamburger");
const navigatorText = document.querySelectorAll(".nav-text")
const navigationIcon = document.querySelectorAll(".nav-img")
const progressDiv = document.querySelector(".course-card-progress")
const progressCharts = document.querySelectorAll(".progress-chart")




for (let index = 0; index < progressCharts.length; index++) {
  console.log(progressCharts[index].nextElementSibling)
  let progress = +progressCharts[index].nextElementSibling.innerText.replace("%","")
  let progressColor = progress>50?"rgb(0,255,0)":"rgb(255, 0, 0)"
  console.log(progressColor)
  let progressData ={
    labels: [
      'Completed',
      'Remaing',
    ],
    datasets: [{
      label: 'Progress',
      data: [progress, 100-progress],
      backgroundColor: [
        progressColor,
        "rgba(150, 200, 150,.5)",
      ],
      hoverOffset: 4
    }]
  };
  
  let progressConfig  = {
    type: 'doughnut',
    data: progressData,
    options:{
      plugins:{
        legend:{
          display: false,
      }
      }  
  }
  };

  let progressChart= new Chart(progressCharts[index], progressConfig) ;
}


function rotateHamburger() {
  hamburger.classList.toggle("active")
  sideBar.classList.toggle("active")

  for (let index = 0; index < navigationIcon.length; index++) {
    navigatorText[index].classList.toggle("active")
    navigationIcon[index].classList.toggle("active");
    
  }
  
}

hamburger.addEventListener("click", rotateHamburger);
