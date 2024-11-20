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

    const placeMarkers = (index) => {
        if (gameboardArray[index] == "") {
            gameboardArray[index] = currentPlayer.marker;
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
    let turn = 0; 

    // play turn / place marks

    const playTurn = () => {
        let statusDisplay = document.getElementById("turn-status");

        const cell = document.querySelectorAll(".cell");
        cell.forEach(cell => {
            cell.addEventListener("click", (index) => {
                cell.innerText = currentPlayer.marker;
                gameboard.getGameboard[index] = currentPlayer.marker;

                turn++

                if (turn % 2 == 0 || turn == 0) { // if turn is even
                    currentPlayer = players[0];
                    statusDisplay.innerText = players[0].name + "'s turn";
                } else {
                    currentPlayer = players[1];
                    statusDisplay.innerText = players[1].name + "'s turn";
                }
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
    }

    // restart game

    const resetGame = () => {

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
        start, playTurn, updateGameStatus
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
})();






