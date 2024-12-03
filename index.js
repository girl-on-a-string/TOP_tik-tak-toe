const Gameboard = (() => {
    let gameboardArray = Array(9).fill("");

    const render = () => {
        let boardHTML = ""

        // create gameboard

        gameboardArray.forEach((cell, index) => {
            boardHTML += `<div class="cell" id="cell-${index}">${cell}</div>`;
        });
        document.getElementById("board").innerHTML = boardHTML;

        // make each cell clickable

        const cellAll = document.querySelectorAll(".cell");
        cellAll.forEach((cell) => {
            cell.addEventListener("click", (e) => {
                Game.handleClick(e);
            });
        });
    }

    return {
        render
    }
})();

const createPlayer = (name, mark) => {
    return {
        name, mark
    }
}

const Game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const handleClick = (e) => {
        console.log("hello world");
    }

    const start = () => {
        players = [
            createPlayer(document.getElementById("playerOne-input").value, "X"),
            createPlayer(document.getElementById("playerTwo-input").value, "O")
        ]

        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
    }

    return {
        start, handleClick
    }
})();

(() => {
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