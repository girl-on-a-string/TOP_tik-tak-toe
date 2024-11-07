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

    }
}

// game logic

function gameLogic () {
    
}

// put it all together

const playerOne = player("playerOne", "X");
const playerTwo = player("PlayerTwo", "O");