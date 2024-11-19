const gameboard = (() => { //iife
    const gameboardArray = Array(9).fill(null);

    //place markers

    const placeMarker = (marker, index) => {
        marker = player.marker;

        if (!gameboardArray[index]) {
            gameboardArray[index] = marker;
            console.log(marker);
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

const gameLogic = (() => { //iife
    let isGameOver = false;

    //change player 

    const changePlayer = () => {
        currentPlayer = currentPlayer === currentPlayer ? playerOne : playerTwo;
        console.log(currentPlayer);
    }

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

    const findWinner = (currentPlayer) => {
        for (let i = 0; i < winningCombos.length(); i++) {
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

    //reset game 

    function resetGame () {
        gameboardArray.fill(null);
        player.score = 0;
    }

    //update turn status

    // const updateTurnStatus = () => {
    //     document.getElementById("player-num").innerText = currentPlayer ? playerOne : playerTwo;
    //     console.log(currentPlayer);
    // }

    // play game

    const playGame = () => {
        if (isGameOver == false) { //false
            changePlayer;

        } else { //true
    
        }
    }

    return {
        playGame, findWinner, resetGame, updateTurnStatus
    }
});

// put it all together

const playerOne = player("playerOne", "X");
const playerTwo = player("PlayerTwo", "O");

let currentPlayer = playerOne;

const cell = document.querySelectorAll(".cell");

cell.forEach(cell => {
    cell.addEventListener("click", () => {
        console.log("clicked");
        gameLogic.playGame;
        gameLogic.updateTurnStatus;
        
        if (cell.innerText == "") {
            gameboard.placeMarker;
        }
    });
});

const resetBtn = document.getElementById("restart");
resetBtn.addEventListener("click", () => {
    gameLogic.resetGame;
    console.log("resetting");
});


