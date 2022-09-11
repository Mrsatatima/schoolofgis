const previousKey = document.querySelector(".prev");
const courseNextKey = document.querySelector(".next-course");
const coursePreviousKey = document.querySelector(".prev-course");
const nextKey = document.querySelector(".next");
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");
const courses = document.getElementsByClassName("section-course");
let indexList = []
let groupIndexList = []
let slide = 1;
let slide2 = 1;

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

showSlides();

function hideCourseNav(){
  console.log(indexList.length, indexList, groupIndexList)
  if (indexList.length===0){
    coursePreviousKey.style.display = "none";
  }else{
    coursePreviousKey.style.display = "block";

  }
  if (indexList.length===courses.length){
    courseNextKey.style.display = "none";

  }else{
    courseNextKey.style.display = "block";

  }
}

function autocourseSlide() {
  hideCourseNav()
  let dummyIndexList = []
  console.log("run")
  for (let index = 0; index < courses.length; index++) {
    courses[index].style.display = "block";
    indexList.push(index)
    dummyIndexList.push(index)
    if(index ===2){
      break
    }
  }
  groupIndexList.push(dummyIndexList)
  console.log(indexList, 0, groupIndexList)


}

function courseSlide(event) {
  for (let index = 0; index < courses.length; index++) {
    courses[index].style.display = "none";
    
  }
 
  let dummyIndexList = []
  if (event.target.value ==="next"){
    for (let idx = 0; idx < courses.length; idx++) {
      if (!indexList.includes(idx)){
        courses[idx].style.display = "block";
        indexList.push(idx)
        dummyIndexList.push(idx)
        if(idx ===2){
          break
        }
      }    
    }
    
    groupIndexList.push(dummyIndexList)

  }
  else{
    let previousIndex = groupIndexList.length-2  
    let activeIndex = groupIndexList.length-2  

    for (let i = 0; i < groupIndexList[previousIndex].length; i++) {
      courses[groupIndexList[previousIndex][i]].style.display ="block"
      indexList.pop(groupIndexList[previousIndex][i])
    }
    for (let i = 0; i < groupIndexList[previousIndex].length; i++) {
      indexList.pop(groupIndexList[activeIndex][i])
    }
    if (groupIndexList.length !==1){
      groupIndexList.pop(groupIndexList[previousIndex])
      groupIndexList.pop(groupIndexList[activeIndex])


    }

  }
  
hideCourseNav()

}

autocourseSlide()
previousKey.addEventListener("click", addSlide);
nextKey.addEventListener("click", addSlide);
courseNextKey.addEventListener("click", courseSlide);
coursePreviousKey.addEventListener("click", courseSlide);

for (let index = 0; index < dots.length; index++) {
  dots[index].addEventListener("click", moveToSlide);
}
