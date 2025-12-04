// 🎮 Rock Paper Scissors Game

let userScore = 0; // Track user's score
let compScore = 0; // Track computer's score

// Select all buttons for user choices
const choices = document.querySelectorAll(".choice");

// Select message and score elements
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// 🧠 Generate computer's random choice
const gencompChoice = () => {
  const options = ["rock", "paper", "scissors"]; // 3 possible options
  const randIdx = Math.floor(Math.random() * 3); // random index 0–2
  return options[randIdx]; // return random choice
};

// ⚖️ When game is a draw
const drawGame = () => {
  msg.innerText = "Game was Draw 😐 Play again!";
  msg.style.backgroundColor = "gray";
};

// 🏆 Show winner and update score
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++; // increase user score
    userScorePara.innerText = userScore; // update on screen

    msg.innerText = `🎉 You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green"; // green for win
  } else {
    compScore++; // increase computer score
    compScorePara.innerText = compScore; // update on screen

    msg.innerText = `😞 You Lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red"; // red for lose
  }
};

// 🕹️ Main game logic
const playGame = (userChoice) => {
  console.log("User choice =", userChoice);

  const compChoice = gencompChoice(); // get computer choice
  console.log("Computer choice =", compChoice);

  // check draw first
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true; // assume user wins

    // decide winner based on rules
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice); // show result
  }
};

// 🖱️ Add click event to all choice buttons
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id"); // get user's clicked id
    playGame(choiceId); // start game with selected choice
  });
});
