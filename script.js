function getRandomInt() {
    /* Will return a random int between the values of 0 and 2 */
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    var randomInt = getRandomInt();

    if (randomInt === 1) {
        return "rock";
    }

    else if (randomInt === 2) {
        return "paper";
    }

    else {
        return "scissors";
    }
}

function getHumanChoice() {
    while (true) {
        var choice = prompt("Rock, paper, or scissors?").toLowerCase();

        if (choice === "rock") {
            return "rock";
        }
    
        else if (choice === "paper") {
            return "paper";
        }
    
        else if (choice === "scissors") {
            return "scissors";
        }
    }
}

/*
Play a game, with 5 rounds
Get computer choice
Get player input
Keep score
Play a round
IF player win:
    increase score
    write a message
ELSE:
    Increase bot score
    write a lose message

Start game
    SET bot score to 0
    SET player score to 0
    FOR 5 times:
        Start round
            COMPUTE bot decision
            GET player decision
            DETERMINE winner
                IF player win:
                    INCREMEMENT player score
                    PRINT winning message
                ELSE:
                    INCREMENT bot score
                    PRINT losing message
*/