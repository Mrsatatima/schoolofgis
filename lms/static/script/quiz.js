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

  const disableNav = () =>{
    if (currentQuestion=== 0 && questionNavButton[0].textContent =="Prev") {
      questionNavButton[0].classList.add("pointer");
     }
     if(currentQuestion !== 0 && questionNavButton[0].textContent =="Prev") {
      questionNavButton[0].classList.remove("pointer"); 
     }
     if (currentQuestion=== questions.length-1 && questionNavButton[1].textContent =="Next"){
      questionNavButton[1].classList.add("pointer"); 
     }
     if (currentQuestion!== questions.length-1 && questionNavButton[1].textContent =="Next") {
      questionNavButton[1].classList.remove("pointer");
     }
  }
  
  const makeIndexWithinRange = (num) => {
    if (num < 0) {
      return 0;
    } else if (num > questions.length - 1) {
      return questions.length - 1;
    }
    return num;
  };
  
  const addAsweredQuestioncolor = (answers, indx) => {
    for (const answer of answers.children) {
      if (answer.children[0].checked) {
        questionNumbers[indx].classList.add("answered");
        break;
      } else {
        questionNumbers[indx].classList.remove("answered");
      }
    }
  };
  
  const selectQuestion = (indx) => {
    addAsweredQuestioncolor(
      questions[currentQuestion].children[1],
      currentQuestion
    );
    if (indx !== currentQuestion) {
      removeActive();
      if (indx <= questions.length - 1) {
        toggleActive(indx);
      } else {
        questionNumbers[indx].classList.toggle("active");
      }
      currentQuestion = indx;
    disableNav()
  
    }
  };
  
  const navigateQuestions = (event) => {
    if (event.target.textContent === "Prev") {
      indx = makeIndexWithinRange(currentQuestion - 1);
      
    } else {
      indx = makeIndexWithinRange(currentQuestion + 1);
  
    }
    selectQuestion(indx);
  };








questions[currentQuestion].classList.toggle("active");
questionNumbers[currentQuestion].classList.toggle("active");

hambuger.addEventListener("click", minimizeQuestionNav);
