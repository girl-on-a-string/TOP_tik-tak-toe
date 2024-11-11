(() => { //for single instances

    // gameboard

    function gameboard () {
        const gameboardArray = Array(9).fill(null);

        return {
            gameboardArray
        }
    }

    // place marker

    function placeMarker (marker, index) {
        if (!gameboardArray[index]) {
            gameboardArray[index] = marker;
            return true
        } else {
            return false
        }
    }
})();

// players

function player (name, marker) {
    return {
        name, marker
    }
}

// game logic

function gameLogic () {
    let gameboardObject = gameboard();
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