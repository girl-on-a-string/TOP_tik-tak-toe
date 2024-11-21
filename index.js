const gameboard = (() => { //iife module
    //create gameboard

    const gameboardArray = Array(9).fill("");
    const getGameboard = () => gameboardArray;

    const renderBoard = () => {
        let boardHTML = "";
        gameboardArray.forEach((cell, index) => {
            boardHTML += `<div class="cell" data-index="${index}">${cell}</div>`;
        });

        document.getElementById("board").innerHTML = boardHTML;
        console.log("rendering board");
    }

    // place markers

    const placeMarkers = (index, marker) => {
        if (gameboardArray[index] === "") {
            gameboardArray[index] = marker;
            return true
        } else {
            return false;
        }
    }

    //

    console.log("gameboard running");

    return {
        renderBoard, getGameboard, placeMarkers
    }
})();


// player factory

function player (name, marker, score) {
    return {
        name, marker, score
    }
}

// game logic

const gameLogic = (() => { //iife module

    console.log("game logic running");

    const players = [
        player(document.getElementById("playerOne-input").value, "X", "0"),
        player(document.getElementById("playerTwo-input").value, "O", "0")
    ]

    let currentPlayer = players[0];
    let isGameOver = false; 

    // play turn / place marks

    const playTurn = () => {
        const cell = document.querySelectorAll(".cell");
        let statusDisplay = document.getElementById("turn-status");

        cell.forEach(cell => {
            cell.addEventListener("click", (index) => {
                console.log("clicked");
                gameboard.placeMarkers(index, currentPlayer.marker);
                cell.innerText = currentPlayer.marker;
                currentPlayer == players[0] ? currentPlayer = players[1] : currentPlayer = players[0];
            });
        });
    }

    // check for winner

    const checkWinner = () => {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ]

        for (combo of winningCombos) {
            combo = [a, b, c]; 

            if (gameboard.getGameboard[a] === gameboard.getGameboard[b] && gameboard.getGameboard[b] === gameboard.getGameboard[c]) {
                isGameOver = true;

                for (cell of combo) {
                    cell = document.querySelectorAll(".cell");
                    cell.classlist.add("winner");
                }

                let winnerDisplay = document.getElementById("winner-display");
                winnerDisplay.innerText = currentPlayer + "wins!";

                currentPlayer.score++;

                return true
            } else {
                return false
            }
        }
    }

    // reset game

    const resetGame = () => {
        gameboard.getGameboard().fill("");
        
    }

    // update status 

    const updateGameStatus = () => {
        // update display names 

        let displayP1Name = document.getElementById("playerOne-id");
        displayP1Name.innerText = players[0].name;
        
        let displayP2Name = document.getElementById("playerTwo-id");
        displayP2Name.innerText = players[1].name;
    }

    // start game 

    const start = () => {
        gameboard.renderBoard();
        gameLogic.updateGameStatus();
        console.log("game starting...");

        if (isGameOver) {
            console.log("game is over");
        } else { 
            gameLogic.playTurn();
        }
    }

    return {
        start, playTurn, updateGameStatus, resetGame, checkWinner
    }
})();

(() => { //iife module
    const fullDisplay = document.getElementById("game");
    fullDisplay.style.display = "none";

    const startBtn = document.getElementById("start-game");
    startBtn.addEventListener("click", () => {
        if (document.querySelectorAll(".input").value !== "") {
            const modal = document.getElementById("modal");
            modal.style.display = "none";
    
            fullDisplay.style.display = "initial";
            
            console.log("game initiated");
            
            gameLogic.start();
        } else {
            alert("You must input a player name");
        }
    });

    const resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", () => {
        gameLogic.resetGame();
    });
})();






