const gameboard = (() => { //iife
    const gameboardArray = Array(9).fill(null);

    //place markers

    const placeMarker = (marker, index) => {
        if (!gameboardArray[index]) {
            gameboardArray[index] = marker;
            return true
        } else {
            return false
        }
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

    const increaseScore = () => {
        score++;
    }

    return {
        name, marker, score
    }
}

// game logic

function gameLogic () {
    let currentPlayer = playerOne;

    // cell click
    
    const cell = document.querySelectorAll(".cell");


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

    function findWinner (currentPlayer) {
        for (let i = 0; i < winningCombos.length(); i++) {
            let isGameOver = false;
            const condition = winningCombos[i];
            const cellOne = winningCombos[0];
            const cellTwo = winningCombos[1];
            const cellThree = winningCombos[2];

            if (cellOne == "" || cellTwo == "" || cellThree == "") {
                continue;
            }

            if (cellOne == cellTwo && cellTwo == cellThree) { //all spots filled with same marker
                isGameOver = true;
                break;
            }

            if (isGameOver == true) {
                const resultDisplay = document.getElementById("result");
                resultDisplay.innerText = `${currentPlayer} wins!`;
            }
        }
    }

    // play game

    if (isGameOver) { //false

    } else { //true

    }

    //reset game 

    function resetGame () {
        gameboardArray.fill(null);

    }

    // play game

    function playGame () {

    }

    return {
        
    }
}

// put it all together

const newBoard = gameboard;
const playerOne = player("playerOne", "X");
const playerTwo = player("PlayerTwo", "O");
const newGame = gameLogic;
