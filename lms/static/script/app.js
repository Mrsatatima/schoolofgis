const previousKey = document.querySelector(".prev");
const courseNextKey = document.querySelector(".next-course");
const coursePreviousKey = document.querySelector(".prev-course");
const testimonyNextKey = document.querySelector(".next-testimony");
const testimonyPreviousKey = document.querySelector(".prev-testimony");
const nextKey = document.querySelector(".next");
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");
const courses = document.getElementsByClassName("section-course");
const testimonies = document.getElementsByClassName("section-testimony");
console.log(testimonies)

let indexList = []
let indexList2 = []
let groupIndexList = []
let groupIndexList2 = []


let slide = 1;
let slide2 = 1;
const window700 = window.matchMedia("(max-width: 700px)")
const window950 = window.matchMedia("(max-width: 950px)")

let displayCourse
if (window700.matches){
  displayCourse= 1
}else if (window950.matches){
   displayCourse = 3
  
  }else{
    displayCourse = 4
  }


function showSlides() {
  if (slide > slides.length) {
    slide = 1;
  }
  if (slide < 0) {
    slide = slides.length;
  }

  for (let index = 0; index < slides.length; index++) {
    slides[index].style.display = "none";
  }
  for (let index = 0; index < dots.length; index++) {
    dots[index].classList.remove("active");
  }
  slides[slide - 1].style.display = "block";
  dots[slide - 1].classList.add("active");
  slide2 = slide;
  slide++;
  setTimeout(showSlides, 5000);
}

function addSlide(event) {
  slide2 = slide2 + +event.target.value;
  if (slide2 > slides.length) {
    slide2 = 1;
  }
  console.log(slide2);
  if (slide2 < 1) {
    slide2 = slides.length;
  }
  for (let index = 0; index < slides.length; index++) {
    slides[index].style.display = "none";
  }
  for (let index = 0; index < dots.length; index++) {
    dots[index].classList.remove("active");
  }
  slides[slide2 - 1].style.display = "block";
  dots[slide2 - 1].classList.add("active");
  slide = slide2;
}
function moveToSlide(event) {
  slide = +event.target.value;

  for (let index = 0; index < slides.length; index++) {
    slides[index].style.display = "none";
  }
  for (let index = 0; index < dots.length; index++) {
    dots[index].classList.remove("active");
  }
  slides[slide - 1].style.display = "block";
  dots[slide - 1].classList.add("active");
  slide2 = slide;
}


function hideCourseNav(){
  if (indexList.length===displayCourse){
    coursePreviousKey.style.visibility = "hidden";
  }else{
    coursePreviousKey.style.visibility= "visible";

  }
  if (indexList.length===courses.length){
    courseNextKey.style.visibility = 'hidden';

  }else{
    courseNextKey.style.visibility= "visible";

  }
  if (indexList2.length===displayCourse){
    testimonyPreviousKey.style.visibility = "hidden";
  }else{
    testimonyPreviousKey.style.visibility= "visible";

  }
  if (indexList2.length===testimonies.length){
    testimonyNextKey.style.visibility = 'hidden';

  }else{
    testimonyNextKey.style.visibility= "visible";

  }
}

function autocourseSlide(event) {
  let dummyIndexList = []
  let dummyIndexList2 =[]
  for (let index = 0; index < courses.length; index++) {
    courses[index].style.display = "block";
    indexList.push(index)
    dummyIndexList.push(index)
    console.log(displayCourse)
    if((index +1)%displayCourse===0){
      break
    }
  }
  for (let index = 0; index < testimonies.length; index++) {
    testimonies[index].style.display = "block"
    indexList2.push(index)
    dummyIndexList2.push(index)
    console.log(displayCourse)
    if((index +1)%displayCourse===0){
      break
    }
  }
  groupIndexList.push(dummyIndexList)
  groupIndexList2.push(dummyIndexList2)
  hideCourseNav()
}

function courseSlide(event) {
  let slideGroup
  let itemlist
  let groupItemList
  if (event.target.classList.contains('next-testimony')||event.target.classList.contains('prev-testimony')){
    slideGroup = testimonies
    itemlist = indexList2
    groupItemList = groupIndexList2

  }else{
    slideGroup = courses
    itemlist = indexList
    groupItemList = groupIndexList
  }

  for (let index = 0; index < slideGroup.length; index++) {
    slideGroup[index].style.display = "none";
    
  }
 
  let dummyIndexList = []
  if (event.target.value ==="next"){
    for (let idx = 0; idx < slideGroup.length; idx++) {
      if (!itemlist.includes(idx)){
        slideGroup[idx].style.display = "block";
        itemlist.push(idx)
        dummyIndexList.push(idx)
        if((idx +1)%displayCourse===0){
          break
        }
      }    
    }
    
    groupItemList.push(dummyIndexList)
    console.log(groupItemList)
    console.log(itemlist)



  }
  else{
    let previousIndex = groupItemList.length-2  
    let activeIndex = groupItemList.length-1 


    for (let i = 0; i < groupItemList[previousIndex].length; i++) {
      slideGroup[groupItemList[previousIndex][i]].style.display ="block"
    }
    for  (let i = 0; i < groupItemList[activeIndex].length; i++)  {
      itemlist.pop(groupItemList[activeIndex][i])
    }
    groupItemList.pop(groupItemList[activeIndex])
    

  }
  
hideCourseNav()

}

showSlides();

autocourseSlide()
previousKey.addEventListener("click", addSlide);
nextKey.addEventListener("click", addSlide);
courseNextKey.addEventListener("click", courseSlide);
coursePreviousKey.addEventListener("click", courseSlide);
testimonyNextKey.addEventListener("click", courseSlide);
testimonyPreviousKey.addEventListener("click", courseSlide);

for (let index = 0; index < dots.length; index++) {
  dots[index].addEventListener("click", moveToSlide);
}