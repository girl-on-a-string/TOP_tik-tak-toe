// player object

const player = (name, marker) => {
    return {
        name, marker
    }
}

// setup game board

const gameboard = () => { 
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

    const getGameboardDisplay = () => {gameDisplay}

    return {
        gameDisplay, getGameboardDisplay
    }
}

// make the game work

const gameLogic = () => {
    const gameboard = gameboard();
    const cell = document.querySelectorAll(".cell");
    const resetBtn = document.getElementById("restart");
    const resultSpace = document.getElementById("result");
    let currentPlayer = playerOne;
    let isGameOver = false;

    cell.forEach(cell => {
        cell.addEventListener("click", cellClickHandling)
    });

    const cellClickHandling = (e) => {
        cell.forEach(cell => {
            const index = e.target.getAttribute("data-index");
            console.log(index + " clicked");
            const winningCombos = checkWinner();
            if (winningCombos) {
                displayWinner();
            }
        });
    }

    const disableCellClick = () => {
        cell.forEach(cell => {
            cell.removeEventListener("click", cellClickHandling);
        });
    }

    const checkWinner = () => {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8], 
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (const combos of winningCombos) {
            if (combos.every(index => {
                gameboard.getGameboardDisplay()[index] === currentPlayer.marker;
            }));

            return combos
        }

        return null
    }

    const takeTurn = (index, cell) => {
        if (isGameOver == false) { 
            if (gameboard.placeMarker(currentPlayer, index)) {
                cell.innerText = currentPlayer.marker;
            }
        } else { //isgameover = true
            disableCellClick();
            return
        }
    }

    const displayWinner = (message) => {
        const winResult = document.getElementById("result");
        winResult.innerText = message;
    }

    resetBtn.addEventListener("click", resetGame);

    const resetGame = () => {
        gameboard.getGameboardDisplay().fill("");
        currentPlayer = playerOne;
        isGameOver = false;
    }

    return null
}

const playerOne = player("Player One", "X");
const playerTwo = player("Player Two", "O");
const game = gameLogic;

