const gameboard = (() => { //iife
    //create gameboard

    const gameboardArray = Array(9).fill(null);
    const getGameboard = () => gameboardArray;

    const renderBoard = () => {
        let boardHTML = "";
        gameboardArray.forEach((cell, index) => {
            boardHTML += `<div class="cell" data-index="${index}">${cell}</div>`;
        });

        document.getElementById("board").innerHTML = boardHTML;
        console.log("rendering board");
    }

    //place markers

    const placeMarker = (index) => {
        if (gameboardArray[index] == "") { // if array item is empty
            gameboardArray[index] = player.marker; // puts marker on cell space WITHIN ARRAY
            turn++
            return true
        } else {
            return false
        }
    }

    //

    console.log("gameboard working");

    return {
        placeMarker, getGameboard, renderBoard
    }
})();


// players

function player (name, marker) {
    let score = 0;

    return {
        name, marker, score
    }
}

// game logic

const gameLogic = (() => { //iife
    console.log("game logic running");

    let isGameOver = false;
    let turn = 0; 

    // change player 

    const changePlayer = () => {

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

    const checkWinner = () => {

    }

    // increase score

    const increaseScore = () => {

    }

    // reset game

    const resetGame = () => {
        
    }

    // start game 

    const start = () => {
        gameboard.renderBoard;
        console.log("game starting...")
    }

    return {
        start
    }
})();


const startBtn = document.getElementById("start-game");

(() => {
    console.log("program running");

    startBtn.addEventListener("click", (e) => {
        e.preventDefault();
    
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    
        const playerOne = player(document.querySelector("#playerOne-input").value, "X");
        const playerTwo = player(document.querySelector("#playerTwo-input").value, "O");
    
        console.log("game initiated");
    
        console.log(gameLogic.start);
    });
})();




