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

    let currentPlayer;
    let isGameOver = false;
    let turn = 0; 

    // play turn / place marks

    const playTurn = () => {
        const cell = document.querySelectorAll(".cell");
        cell.forEach(cell => {
            cell.addEventListener("click", () => {
                console.log(cell.getAttribute("data-index"));
            });
        });
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
            
            // const playerOne = player(document.querySelector("#playerOne-input").value, "X");
            // const playerTwo = player(document.querySelector("#playerTwo-input").value, "O");
            
            console.log("game initiated");
            
            gameLogic.start();
        } else {
            alert("You must input a player name");
        }
    });
})();






