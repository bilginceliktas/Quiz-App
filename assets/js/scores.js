const highscoresList = document.getElementById("highscores");
for (let i = 0; i < localStorage.length; i++) {
    const initials = localStorage.key(i);
    const score = localStorage.getItem(initials);
    const li = document.createElement("li");
    li.innerText = `${initials}: ${score}`;
    highscoresList.appendChild(li);
  }
  document.getElementById("clear").addEventListener("click", function(){
    localStorage.clear();
    highscoresList.innerHTML = "";
  });
    