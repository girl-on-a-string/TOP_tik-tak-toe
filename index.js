const gameboard = (() => { //iife
    const gameboardArray = Array(9).fill(null);

    //place markers

    const placeMarker = () => {
        
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


