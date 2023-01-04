const hambuger = document.querySelector(".hambuger");
const questionGroup = document.querySelector(".question-group");
const questionNumbers = document.querySelectorAll(".question-no");
const questions = document.querySelectorAll(".quiz-content");
const questionNavButton = document.querySelectorAll(".nav-button");
const options = document.querySelectorAll(".quiz-options");
const submit = document.querySelector(".submit-button");

let currentQuestion = 0;

const minimizeQuestionNav = () => {
    hambuger.classList.toggle("active");
    questionGroup.classList.toggle("active");
  };

  const removeActive = () => {
    for (const number of questionNumbers) {
      number.classList.remove("active");
    }
    for (const question of questions) {
      question.classList.remove("active");
    }
  };
  const toggleActive = (indx) => {
    questions[indx].classList.toggle("active");
    questionNumbers[indx].classList.toggle("active");
    questionNumbers[indx].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  






questions[currentQuestion].classList.toggle("active");
questionNumbers[currentQuestion].classList.toggle("active");

hambuger.addEventListener("click", minimizeQuestionNav);
