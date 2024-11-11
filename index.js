const gameboard = (() => {
    const gameboardArray = Array(9).fill(null);

    const placeMarker = (marker, index) => {
        if (!gameboardArray[index]) {
            gameboardArray[index] = marker;
            return true
        } else {
            return false
        }
    }

    //reset game 

    const resetGameboard = () => {
        gameboardArray.fill(null);
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
    let isGameOver = false;

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

    function findWinner (marker, index) {
        marker = player.marker;
        index = gameboard[index];

        if (gameboard.getGameboard[index] == player.marker && winningCombos == true) {
            console.log("findwinner true")
        } else {
            console.log("findwinner false")
        }
    }

    // play game

    if (isGameOver) { //false

    } else { //true

    }
}

// put it all together

const playerOne = player("playerOne", "X");
const playerTwo = player("PlayerTwo", "O");
const newGame = gameLogic;
