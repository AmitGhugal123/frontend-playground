let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "blue", "green"];

let started = false;
let level = 0;
let highScore = 0;

let h2 = document.querySelector("h2");

// Start game on keypress
document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        levelUp();
    }
});

// Button flash for game sequence
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 300);
}

// Button flash for user input
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 300);
}

// Move to next level
function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log("Game sequence: ", gameseq);
    gameFlash(randBtn);
}

// Check user's input
function checkAns(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        if (level - 1 > highScore) {
            highScore = level - 1;
        }
        h2.innerHTML = `Game Over! <br> Your Score: Level ${level - 1} <br> High Score: ${highScore} <br><br>Press any key to restart`;
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "";
        }, 300);

        resetGame();
    }
}

// When user clicks a button
function btnpress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length - 1);
}

// Reset the game
function resetGame() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

// Add event listeners to all buttons
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnpress);
}
