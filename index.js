const gameboard = (() => { //iife module
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

    console.log("gameboard working");

    return {
        renderBoard, getGameboard
    }
})();


// player factory

function player (name, marker) {
    return {
        name, marker
    }
}

// game logic

const gameLogic = (() => { //iife module
    console.log("game logic running");

    let isGameOver = false;
    let turn = 0; 

    // start game 

    const start = () => {
        gameboard.renderBoard();
        console.log("game starting...")
    }

    return {
        start
    }
})();


const startBtn = document.getElementById("start-game");

startBtn.addEventListener("click", () => {
    if (document.querySelectorAll(".input").value !== "") {
        const modal = document.getElementById("modal");
        modal.style.display = "none";
        
        const playerOne = player(document.querySelector("#playerOne-input").value, "X");
        const playerTwo = player(document.querySelector("#playerTwo-input").value, "O");
        
        console.log("game initiated");
        
        gameLogic.start();
    } else {
        alert("You must input a player name");
    }
});




