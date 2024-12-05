const Gameboard = (() => {
    console.log("gameboard module working");

    let gameboardArray = Array(9).fill("");

    const render = () => {
        let boardHTML = ""

        // create gameboard

        gameboardArray.forEach((cell, index) => {
            boardHTML += `<div class="cell" id="cell-${index}">${cell}</div>`;
        });
        document.getElementById("board").innerHTML = boardHTML;

        const cellAll = document.querySelectorAll(".cell");
        cellAll.forEach((cell) => {
            cell.addEventListener("click", (e) => {
                if (cell.innerText == "") {
                    Game.handleClick(e);
                }
            });
        });
    }

    const updateDisplay = (index, mark) => {
        gameboardArray[index] = mark;
        render();
    }

    return {
        render, updateDisplay
    }
})();

const createPlayer = (name, mark) => {
    return {
        name, mark
    }
}

const Game = (() => {
    console.log("game module working");

    const players = [
        createPlayer(document.getElementById("playerOne-input").value, "X"),
        createPlayer(document.getElementById("playerTwo-input").value, "O")
    ]

    let currentPlayer = players[0];
    let gameOver;

    const playTurn = () => {

    }

    const handleClick = (e) => {
        let index = parseInt(e.target.id.split("-")[1]); //get cell id, isolate number, convert to int
        Gameboard.updateDisplay(index, currentPlayer.mark);

        let turnStatus = document.getElementById("turn-status");
        turnStatus.innerText = `${players[0].name}'s turn`;

        if (currentPlayer == players[0]) {
            currentPlayer = players[1];
            turnStatus.innerText = `${currentPlayer.name}'s turn`
            document.querySelector(".cell").style.color = getComputedStyle(document.body).getPropertyValue("--p1-cl");
        } else {
            currentPlayer = players[0];
            turnStatus.innerText = `${currentPlayer.name}'s turn`
            document.querySelector(".cell").style.color = getComputedStyle(document.body).getPropertyValue("--p2-cl");
        }       
    }

    const start = () => {
        gameOver = false;
        Gameboard.render();

        document.getElementById("playerOne-id").innerText = players[0].name;
        document.getElementById("playerTwo-id").innerText = players[1].name;
    }

    return {
        start, handleClick, playTurn
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