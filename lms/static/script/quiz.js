const hambuger = document.querySelector(".hambuger");
const questionGroup = document.querySelector(".question-group");
const questionNumbers = document.querySelectorAll(".question-no");
const questions = document.querySelectorAll(".quiz-content");
const questionNavButton = document.querySelectorAll(".nav-button");
const options = document.querySelectorAll(".quiz-options");
const submit = document.querySelector(".submit-button");

let currentQuestion = 0;
const answers = {
    1: ["A noun is the name of a person, animal, place or thing."],
    2: ["A noun is the name of a person, animal, place or thing."],
    3: ["A noun is the name of a person, animal, place or thing."],
    4: ["A noun is the name of a person, animal, place or thing."],
    5: ["A noun is the name of a person, animal, place or thing."],
    6: ["A noun is the name of a person, animal, place or thing."],
    7: ["A noun is the name of a person, animal, place or thing."],
    8: ["A noun is the name of a person, animal, place or thing."],
    9: ["A noun is the name of a person, animal, place or thing."],
    10: ["A noun is the name of a person, animal, place or thing."],
  };

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

const disableNav = () => {
  if (currentQuestion === 0 && questionNavButton[0].textContent == "Prev") {
    questionNavButton[0].classList.add("pointer");
  }
  if (currentQuestion !== 0 && questionNavButton[0].textContent == "Prev") {
    questionNavButton[0].classList.remove("pointer");
  }
  if (
    currentQuestion === questions.length - 1 &&
    questionNavButton[1].textContent == "Next"
  ) {
    questionNavButton[1].classList.add("pointer");
  }
  if (
    currentQuestion !== questions.length - 1 &&
    questionNavButton[1].textContent == "Next"
  ) {
    questionNavButton[1].classList.remove("pointer");
  }
};

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
    disableNav();
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

const gradeQuiz = () => {
  let indx = 0;
  const newElement = document.createElement("div");
  const newElementmessage = document.createElement("div");
  const mainElement = document.getElementsByTagName("main");
  const parentButton = document.getElementById("buttons");
  const newButton = document.createElement("a");

  let finalScore = 0;
  for (const question of questions) {
    let score;
    let positiveScore = 0;
    let negativeScore = 0;
    let average;
    console.log(indx, Object.keys(answers));

    let correctScore = answers[Object.keys(answers)[indx]].length;

    for (const option of question.children[1].children) {
      if (
        option.children[0].checked &&
        answers[Object.keys(answers)[indx]].includes(option.children[0].value)
      ) {
        option.classList.toggle("correct");
        positiveScore++;
      } else if (
        option.children[0].checked &&
        !answers[Object.keys(answers)[indx]].includes(option.children[0].value)
      ) {
        option.classList.toggle("wrong");
        negativeScore++;
      }
      option.children[0].setAttribute("disabled", false);
      // console.log( option.children[0].disable);
    }
    score = positiveScore === 0 ? 0 : positiveScore + negativeScore;
    average =
      score > correctScore ? correctScore / score : score / correctScore;
    markQuestionNumber(indx, average);
    indx++;
    finalScore += average;
  }

  finalScore = (finalScore / questions.length) * 100;
  const text = `Your score is ${finalScore}%`;
  console.log(finalScore, text);

  const htmlText = `<p class="score-message">Your score is ${finalScore}% </p><div class="open-button">Review Answers</div><div class="close-button">Close Quiz</div>`;

  newElement.classList.add("prompt-shadow");
  newElementmessage.classList.add("prompt-message");
  newElement.appendChild(newElementmessage);
  newElementmessage.insertAdjacentHTML("beforeend", htmlText);

  document.body.appendChild(newElement);
  const closeQuiz = newElementmessage.children[2];
  const openReview = newElementmessage.children[1];

  closeQuiz.addEventListener("click", () => {
    window.location.href = "/blank.html";
  });
  const reviewPage = () => {
    currentQuestion = 0;
    disableNav();
    removeActive();
    questions[currentQuestion].classList.toggle("active");
    questionNumbers[currentQuestion].classList.toggle("active");
    newButton.textContent = "Finish Review";
    newButton.classList.add("finish-button");
    newButton.href = "/blank.html";
    parentButton.replaceChild(newButton, submit);
    console.dir(newElement);
    document.body.removeChild(newElement);
  };
  openReview.addEventListener("click", reviewPage);
  // newElement.addEventListener("click", reviewPage)
};

questions[currentQuestion].classList.toggle("active");
questionNumbers[currentQuestion].classList.toggle("active");
disableNav();

hambuger.addEventListener("click", minimizeQuestionNav);

for (let indx = 0; indx < questionNumbers.length; indx++) {
  questionNumbers[indx].addEventListener(
    "click",
    selectQuestion.bind(this, indx)
  );
}

for (const nav of questionNavButton) {
  nav.addEventListener("click", navigateQuestions);
}

submit.addEventListener("click", gradeQuiz);