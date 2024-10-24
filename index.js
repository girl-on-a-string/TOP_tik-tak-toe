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
        gameboard, placeMarker, isGameboardFull
    }
}

//player 1

// function playerOne () {
//     return {
//         symbol: "X"
//     }
// }

//player 2

// function playerTwo () {
//     return {
//         symbol: "O"
//     }
// }

//game logic (what makes it work)

function logic (playerOne, playerTwo) {
    const gameboard = gameboard();
    // const playerOne = playerOne();
    // const playerTwo = playerTwo();

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

logic();