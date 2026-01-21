let userScore = 0;
let computerScore = 0;
const maxWins = 3;

const userName = prompt("Enter your name:") || "Player";
document.getElementById("username").textContent = userName;

document.getElementById("generate").addEventListener("click", generateNumbers);

function generateNumbers() {
    let userNumber;
    let computerNumber;

    do {
        userNumber = Math.floor(Math.random() * 11) + 1;
    } while (userNumber === 1 || userNumber === 5);

    do {
        computerNumber = Math.floor(Math.random() * 11) + 1;
    } while (computerNumber === 1 || computerNumber === 5);

    const userRectangle = document.getElementById("userNumber");
    const computerRectangle = document.getElementById("computerNumber");

    userRectangle.textContent = userNumber;
    computerRectangle.textContent = computerNumber;

    userRectangle.style.backgroundImage = `url('${getBackgroundImage(userNumber)}')`;
    computerRectangle.style.backgroundImage = `url('${getBackgroundImage(computerNumber)}')`;

    if (userNumber > computerNumber) {
        userScore++;
    } else if (computerNumber > userNumber) {
        computerScore++;
    }

    document.getElementById("userScore").textContent = userScore;
    document.getElementById("computerScore").textContent = computerScore;

    const winMessage = document.getElementById("win");

    if (userScore === maxWins) {
        winMessage.textContent = `${userName} is winner!`;
        setTimeout(resetGame, 5000);
    } else if (computerScore === maxWins) {
        winMessage.textContent = "Computer is winner!";
        setTimeout(resetGame, 5000);
    }
}

function getBackgroundImage(number) {
    switch (number) {
        case 2: return 'jack.png';
        case 3: return 'queen.png';
        case 4: return 'king.png';
        case 6: return '6.png';
        case 7: return '7.png';
        case 8: return '8.png';
        case 9: return '9.png';
        case 10: return '10.png';
        case 11: return 'ace.png';
        default: return 'cards.png';
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;

    document.getElementById("userScore").textContent = 0;
    document.getElementById("computerScore").textContent = 0;
    document.getElementById("userNumber").textContent = 0;
    document.getElementById("computerNumber").textContent = 0;
    document.getElementById("win").textContent = "";

    document.getElementById("userNumber").style.backgroundImage = "url('cards.png')";
    document.getElementById("computerNumber").style.backgroundImage = "url('cards.png')";
}
