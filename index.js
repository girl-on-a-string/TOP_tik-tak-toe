const gameboard = (() => { //iife
    const gameboardArray = Array(9).fill(null);

    //place markers

    const placeMarker = (marker, index) => {
        
    }

    //

    const getGameboard = () => gameboardArray;

    return {
        placeMarker, getGameboard
    }
});


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

    return {
        
    }
});

// put it all together

const playerOne = player("playerOne", "X");
const playerTwo = player("PlayerTwo", "O");

let currentPlayer = playerOne;

const cell = document.querySelectorAll(".cell");

cell.forEach(cell => {
    cell.addEventListener("click", () => {
        console.log("clicked");
    });
});

const resetBtn = document.getElementById("restart");
resetBtn.addEventListener("click", () => {
    console.log("resetting");
});


