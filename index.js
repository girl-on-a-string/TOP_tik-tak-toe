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

    const getGameboard = () => {gameboardArray};

    return {
        placeMarker, getGameboard
    }
});


// players

function player (name, marker) {
    return {
        name, marker
    }
}

// game logic

function gameLogic () {

    let isGameOver = false;

    // finding winner

    const winningCombos = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 5, 9],
        [3, 5, 7],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
    ]

    function findWinner (index) {

    }

    // play game

    if (isGameOver) { //false

    } else { //true

    }
}

// put it all together

const playerOne = player("playerOne", "X");
const playerTwo = player("PlayerTwo", "O");