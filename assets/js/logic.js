let currentQuestion = 0;
let score = 0;
let timer;

document.getElementById("start-button").addEventListener("click", startQuiz);

function startQuiz() {
    timer = setInterval(() => {
      const timerDisplay = document.getElementById("timer");
      timerDisplay.innerText = parseInt(timerDisplay.innerText) + 1;
      if (timerDisplay.innerText === "0") {
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
    displayQuestion();
  }

  function displayQuestion() {
    if (currentQuestion === questions.length) {
      endQuiz();
      return;
    }
    const question = questions[currentQuestion];
    document.getElementById("question-title").innerText = question.question;
    const choices = document.getElementById("choices");
    choices.innerHTML = "";
    for (const answer of question.answers) {
      const answerButton = document.createElement("button");
      answerButton.innerText = answer;
      answerButton.addEventListener("click", checkAnswer);
      choices.appendChild(answerButton);
    }
  }
  function checkAnswer(event) {
    const answer = event.target.innerText;
    if (answer === questions[currentQuestion].correctAnswer) {
      alert("Correct!");
      score++;
    } else {
      alert("Incorrect!");
      const timerDisplay = document.getElementById("timer");
      timerDisplay.innerText = parseInt(timerDisplay.innerText) - 10;
    }
    currentQuestion++;
    displayQuestion();
  }
  function saveScore() {
    const initials = document.getElementById("initials").value;
    localStorage.setItem(initials, score);
    alert("Score saved!");
  }