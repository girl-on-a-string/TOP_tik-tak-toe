let p1GradCr = document.getElementById("p1-grad-cr");
let p2GradCr = document.getElementById("p2-grad-cr");

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
        // if (gameboardArray[index] === "") {
            gameboardArray[index] = marker;
            console.log(gameboardArray[index]);
            console.log("placed marker");
            return true
        // } else {
        //     return false;
        // }
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
        statusDisplay.innerText = `${players[0].name}'s turn`;
        let bg = document.body;

        cell.forEach(cell => {
            cell.addEventListener("click", (index) => {
                gameboard.placeMarkers(index, currentPlayer.marker);

                cell.innerText = currentPlayer.marker;

                let specialStyle = getComputedStyle(document.body);
                let p1Color = specialStyle.getPropertyValue("--p1-cl");
                let p2Color = specialStyle.getPropertyValue("--p2-cl");

                if (currentPlayer == players[0]) {
                    currentPlayer = players[1];
                    cell.style.color = p1Color;

                    // p1GradCr.style.display = "initial";
                    p1GradCr.classList.add("fade-in");
                    // p2GradCr.style.display = "none";
                    p2GradCr.classList.remove("fade-in");

                    statusDisplay.innerText = `${currentPlayer.name}'s turn`;
                } else {
                    currentPlayer = players[0];
                    cell.style.color = p2Color;

                    // p2GradCr.style.display = "initial";
                    p2GradCr.classList.add("fade-in");
                    // p1GradCr.style.display = "none";
                    p1GradCr.classList.remove("fade-in");

                    statusDisplay.innerText = `${currentPlayer.name}'s turn`;
                }

                console.log(gameboard.getGameboard());
            });
        });
    }

    // check for winner

    const checkWinner = () => {
        const board = gameboard.getGameboard[index];

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
            const [a, b, c] = combo;

            if (board[a] && board[a] === board[b] && board[a] === board[c]) {

                const winnerColor = getComputedStyle(document, body).getPropertyValue("--winner-grad");
                p1GradCr.style.backgroundImage = winnerColor;
                p2GradCr.style.backgroundImage = winnerColor;

                for (cell of combo) {
                    document.querySelectorAll(`[data-index="${cell}"]`).classList.add("winner");
                    console.log("cell of combo");
                }

                let winnerDisplay = document.getElementById("winner-display");
                winnerDisplay.innerText = currentPlayer.name + " wins!";

                currentPlayer.score++;

                return true
            } else {
                return false
            }
        }
    }
    
    // check for draw

    const checkDraw = () => {
        const board = gameboard.getGameboard();

    }

    // reset game

    const resetGame = () => {
        console.log("resetting...");
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
        gameLogic.playTurn();

        // if (gameLogic.playTurn()) {
        //     if (gameboard.placeMarkers(index, currentPlayer.marker) === gameLogic.checkWinner()) {
        //         console.log("game over");
        //     }

        //     console.log("playing turn");

        //     // if (checkWinner(gameboard.getGameboard(), currentPlayer.marker)) {
        //     //     console.log("game over");
        //     //     console.log(`${currentPlayer.name} wins`);
        //     // }
        // }

        // if (checkWinner(gameboard.getGameboard[index]) === currentPlayer.marker) {
        //     isGameOver = true;
        // }

        // if (isGameOver) {
        //     console.log("game is over");
        // } else { 
        //     gameLogic.playTurn();
        //     gameLogic.checkWinner();
        //     gameLogic.checkDraw();
        // }
    }

    return {
        start, playTurn, updateGameStatus, resetGame, checkWinner, checkDraw
    }
})();

(() => { //iife module
    const fullDisplay = document.getElementById("game");
    fullDisplay.style.display = "none";

    p1GradCr.style.display = "initial";
    p2GradCr.style.display = "initial";

    const startBtn = document.getElementById("start-game");
    startBtn.addEventListener("click", () => {
        if (document.querySelectorAll(".input").value !== "") {
            const modal = document.getElementById("modal");
            modal.style.display = "none";
    
            fullDisplay.style.display = "initial";

            p1GradCr.style.display = "initial";
            p2GradCr.style.display = "none";
            
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






