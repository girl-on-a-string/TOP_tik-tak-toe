const gameboard = (() => { //iife
    //create gameboard

    const gameboardArray = Array(9).fill(null);

    const renderBoard = () => {
        let boardHTML = document.getElementById("board");
        gameboardArray.forEach((cell, index) => {
            boardHTML += `<div class="cell" data-index="${index}">${cell}</div>`;
        });
    }

    //place markers

    const placeMarker = (index) => {
        if (gameboardArray[index] == "") { // if array item is empty
            gameboardArray[index] = player.marker; // puts marker on cell space WITHIN ARRAY
            turn++
            return true
        } else {
            return false
        }
    }

    //

    const getGameboard = () => gameboardArray;

    return {
        placeMarker, getGameboard, renderBoard
    }
})();


// players

function player (name, marker) {
    let score = 0;

    return {
        name, marker, score
    }
}

// game logic

const gameLogic = (() => { //iife
    let isGameOver = false;
    let turn = 0; 

    // change player 

    const changePlayer = () => {

    }

    // finding winner

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

    const checkWinner = () => {

    }

    // increase score

    const increaseScore = () => {

    }

    // reset game

    const resetGame = () => {
        
    }

    // start game 

    const start = () => {
        gameboard.renderBoard;
    }

    return {
        start
    }
})();


const startBtn = document.getElementById("start-game");

startBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const modal = document.getElementById("modal");
    modal.style.display = "none";

    const playerOne = player(document.querySelector("#playerOne-input").value, "X");
    const playerTwo = player(document.querySelector("#playerTwo-input").value, "O");

    gameLogic.start;
});




