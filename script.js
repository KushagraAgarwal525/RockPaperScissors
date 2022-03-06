function ComputerPlay() {
    const options = ["Rock","Paper", "Scissors"]
    const minimum = 0;
    const maximum = 2;
    let randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return options[randomnumber];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    let a;
    switch (true) {
        case playerSelection == computerSelection.toUpperCase():
            a = "Tie";
            break;
        case playerSelection === "ROCK" && computerSelection === "Scissors":
            a =  `${playerSelection} crushes ${computerSelection}`;
            break;
        case playerSelection === "ROCK" && computerSelection === "Paper":
            a = `${computerSelection} captures ${playerSelection}`;
            break;
        case playerSelection === "PAPER" && computerSelection === "Scissors":
            a = `${computerSelection} cut ${playerSelection}`;
            break;
        case playerSelection === "PAPER" && computerSelection === "Rock":
            a = `${playerSelection} captures ${computerSelection}`;
            break;
        case playerSelection === "SCISSORS" && computerSelection === "Rock":
            a = `${computerSelection} crush ${playerSelection}`;
            break;
        case playerSelection === "SCISSORS" && computerSelection === "Paper":
            a = `${playerSelection} cut ${computerSelection}`;
            break;
    }
    return a;
}