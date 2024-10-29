//gameboard 

// const gameboard = () => {
//     const gameboardDisplay = ["", "", "", "", "", "", "", "", ""]; //cells

//     const placeMarker = (player, index) => { 
//         if (gameboardDisplay[index] == "") { //place marker if empty
//             gameboardDisplay[index] = player.marker;
//             return true;
//         } else {
//             return false;
//         }
//     }

//     const getGameboard = () => {gameboard};
//     const isGameboardFull = () => {
//         gameboardDisplay.filter((cell) => cell === "").length === 0;
//     }

//     return {
//         gameboard, getGameboard, placeMarker, isGameboardFull
//     }
// }

// players

// const player = (name, marker) => {
//     return {
//         name, marker
//     }
// }

//game logic (what makes it work)

// function logic (playerOne, playerTwo) {
//     const gameboard = gameboard();

//     let currentPlayer = playerOne;
//     let gameOver = false;

//     const cell = document.getElementsByClassName("cell");
//     const restartBtn = document.getElementById("restart");

//     const resetGame = () => {
//         gameboard.fill("");
//         cell.forEach(cell => {
//             cell.textContent("");
//         });
//     }

//     return {
//         resetGame
//     }
// }

// const playerOne = player("player one", "X");
// const playerTwo = player("player two", "O");
// const game = logic(playerOne, playerTwo);

/////////////////////////

const player = (name, marker) => {
    return {
        name, marker
    }
}


const gameboard = () => { //gameboard object
    const gameDisplay = ["", "", "", "", "", "", "", "", ""];

    gameDisplay.placeMarker = (player, index) => {
        if (gameDisplay[index] == "") { //place marker if empty
            gameDisplay[index] = player.marker;
            return true
        } else {
            return false
        }
    }

    gameDisplay.isBoardFull = () => { //check if board is full
        gameDisplay.filter((cell) => cell == "").length === 0;
    }

    return {
        gameDisplay
    }
}

const gameLogic = () => {
    let currentPlayer = playerOne;
    let isGameOver = false;

    cell.forEach(cell => {
        cell.addEventListener("click", () => {
            cellClickHandling;
        })
    });

    const cellClickHandling = (e) => {
        cell.forEach(cell => {
            const index = e.target.getAttribute("data-index");
        });
    }

    const takeTurn = () => {

    }
}

const playerOne = player("Player One", "X");
const playerTwo = player("Player Two", "O");

