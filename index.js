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
    const gameboard = gameboard();
    const cell = document.querySelectorAll(".cell");
    const resetBtn = document.getElementById("restart");
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
            console.log(index + " clicked");
        });
    }

    const takeTurn = () => {

    }

    return {

    }
}

const playerOne = player("Player One", "X");
const playerTwo = player("Player Two", "O");
const game = gameLogic;

