const coursesDescription = document.querySelectorAll(".course-p");
const coursesButtons = document.querySelectorAll(".course-button");
const coursesImages = document.querySelectorAll(".course-image");
const minimize = document.querySelectorAll(".minimize");


const expand = document.querySelectorAll(".expand");
const close = document.querySelectorAll(".shrink");




function autotoggleActive() {
  for (let index = 0; index < coursesDescription.length; index++) {
    minimize[index].classList.toggle("active")
}
}
autotoggleActive();

function openCard(event) {
  console.log(event.target)

  const parent =event.target.parentElement
  console.dir(parent)
  const sibling = parent.nextElementSibling
  const card = parent.parentElement
  parent.classList.remove("active")
  sibling.classList.add("active")
  card.classList.add("active")

}
function closeCard(event) {
  const parent =event.target.parentElement.parentElement.parentElement.parentElement
  const sibling = parent.previousElementSibling
  const card = parent.parentElement
  parent.classList.remove("active")
  sibling.classList.add("active")
  card.classList.remove("active")
}

for (let index = 0; index < expand.length; index++) {
    expand[index].addEventListener("click",openCard)

}

for (let index = 0; index < close.length; index++) {
  close[index].addEventListener("click",closeCard)
}
