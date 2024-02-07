let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const Score = document.querySelector("#user-score");
const Comp = document.querySelector("#comp-score");

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        console.log("You win");
        msg.innerText = `User Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        Score.innerText = `${userScore}`;
    } else {
        compScore++;
        console.log("You lose");
        msg.innerText = `Comp Win! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        Comp.innerText = `${compScore}`;
    }
}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw , Play Again"
    msg.style.backgroundColor = "#081b31";
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("Comp Choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame()
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        // console.log("Choice Was Clicked", userChoice);
        playGame(userChoice);
    });
});