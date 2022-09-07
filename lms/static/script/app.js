const previousKey = document.querySelector(".prev");
const nextKey = document.querySelector(".next");
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");
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

previousKey.addEventListener("click", addSlide);
nextKey.addEventListener("click", addSlide);

for (let index = 0; index < dots.length; index++) {
  dots[index].addEventListener("click", moveToSlide);
}
