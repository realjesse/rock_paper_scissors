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
    /* Loop to validate the data */
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

function playRound(humanChoice, computerChoice) {

    let winner;

    /* If human chooses rock, compare with computer */
    if (humanChoice == "rock") {

        if (computerChoice == "rock") {
            console.log("Tie! No winner.");
            winner = "none";
        }

        else if (computerChoice == "paper") {
            console.log("You lose! Paper beats rock.");
            winner = "computer";
        }

        else {
            console.log("You win! Rock beats scissors.");
            winner = "human";
        }
    }

    /* If human chooses paper, compare with computer */
    else if (humanChoice == "paper") {

        if (computerChoice == "rock") {
            console.log("You win! Paper beats rock.");
            winner = "human";
        }

        else if (computerChoice == "paper") {
            console.log("Tie! No winner.");
            winner = "none";
        }

        else {
            console.log("You lose! Scissors beats paper.");
            winner = "computer";
        }
    }

    /* If human chooses scissors, compare with computer */
    else {

        if (computerChoice == "rock") {
            console.log("You lose! Rock beats scissors.");
            winner = "computer";
        }

        else if (computerChoice == "paper") {
            console.log("You win! Scissors beats paper.");
            winner = "human";
        }

        else {
            console.log("Tie! No winner.");
            winner = "none";
        }
    }

    return winner;
}

/* unfinished */
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let winner = playRound(humanSelection, computerSelection);

        if (winner === "human") {
            humanScore += 1;
        }

        else if (winner === "computer") {
            computerScore += 1;
        }
    }

    console.log(`Human score: ${humanScore}.  Computer score: ${computerScore}`);
}

playGame();

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