(() => { //for single instances

    // gameboard

    function gameboard () {
        const gameboardArray = ["", "", "", "", "", "", "", "", ""];

        return {
            gameboardArray
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

    if (isGameOver) { //false

    } else { //true

    }
}

// put it all together

const playerOne = player("playerOne", "X");
const playerTwo = player("PlayerTwo", "O");