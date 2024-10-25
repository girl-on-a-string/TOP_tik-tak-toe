//gameboard 

function gameboard () {
    const gameboard = ["", "", "", "", "", "", "", "", ""]; //cells

    const placeMarker = (player, index) => { 
        if (gameboard[index] == "") { //place marker if empty
            gameboard[index] = player.marker;
            return true;
        } else {
            return false;
        }
    }

    const getGameboard = () => {gameboard};
    const isGameboardFull = () => {
        gameboard.filter((cell) => cell === "").length === 0;
    }

    return {
        getGameboard, placeMarker, isGameboardFull
    }
}

// players

const player = (name, marker) => {
    return {
        name, marker
    }
}

//game logic (what makes it work)

function logic (playerOne, playerTwo) {
    const gameboard = gameboard();

    let currentPlayer = playerOne;
    let gameOver = false;

    const cell = document.getElementsByClassName("cell");
    const restartBtn = document.getElementById("restart");

    const resetGame = () => {
        gameboard.fill("");
        cell.forEach(cell => {
            cell.textContent("");
        });
    }

    return {
        resetGame
    }
}

const playerOne = player("player one", "X");
const playerTwo = player("player two", "O");
const game = logic(playerOne, playerTwo);