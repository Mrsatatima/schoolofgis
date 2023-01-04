const hambuger = document.querySelector(".hambuger");
const questionGroup = document.querySelector(".question-group");
const questionNumbers = document.querySelectorAll(".question-no");
const questions = document.querySelectorAll(".quiz-content");
const questionNavButton = document.querySelectorAll(".nav-button");
const options = document.querySelectorAll(".quiz-options");
const submit = document.querySelector(".submit-button");

const minimizeQuestionNav = () => {
    hambuger.classList.toggle("active");
    questionGroup.classList.toggle("active");
  };







hambuger.addEventListener("click", minimizeQuestionNav);
