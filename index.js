const Gameboard = (() => {
    
})();

const Game = (() => {
    const start = () => {

    }

    return {
        start
    }
})();

(() => {
    console.log("main iife working");

    const fullDisplay = document.getElementById("game");
    fullDisplay.style.display = "none";

    const startBtn = document.getElementById("start-game");
    startBtn.addEventListener("click", () => {
        if (document.querySelectorAll(".input").value !== "") {
            const modal = document.getElementById("modal");
            modal.style.display = "none";

            fullDisplay.style.display = "initial";

            console.log("game initiated");

            Game.start();
        } else {
            alert("You must input a player name");
        }
    });

    const resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", () => {
        // gameLogic.resetGame();
    });
})();