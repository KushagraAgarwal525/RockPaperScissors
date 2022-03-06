function ComputerPlay() {
    const options = ["Rock","Paper", "Scissors"]
    const minimum = 0;
    const maximum = 2;
    let randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return options[randomnumber];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    let roundScore;
    switch (true) {
        case playerSelection == computerSelection.toUpperCase():
            console.log("Tie Round");
            roundScore = 2;
            break;
        case playerSelection === "ROCK" && computerSelection === "Scissors":
            console.log(`You win this round! ${playerSelection} crushes ${computerSelection}`);
            roundScore = 1;
            break;
        case playerSelection === "ROCK" && computerSelection === "Paper":
            console.log(`You lose this round, ${computerSelection} captures ${playerSelection}`);
            roundScore = 0;
            break;
        case playerSelection === "PAPER" && computerSelection === "Scissors":
            console.log(`You lose this round, ${computerSelection} cut ${playerSelection}`);
            roundScore = 0;
            break;
        case playerSelection === "PAPER" && computerSelection === "Rock":
            console.log(`You win this round! ${playerSelection} captures ${computerSelection}`);
            roundScore = 1;
            break;
        case playerSelection === "SCISSORS" && computerSelection === "Rock":
            console.log(`You lose this round, ${computerSelection} crushes ${playerSelection}`);
            roundScore = 0;
            break;
        case playerSelection === "SCISSORS" && computerSelection === "Paper":
            console.log(`You win this round! ${playerSelection} cut ${computerSelection}`);
            roundScore = 1;
            break;
    }
    return roundScore;
}

function game() {
    let comp = 0;
    let player = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Enter your choice:");
        let computerSelection = ComputerPlay();
        let roundScore = playRound(playerSelection, computerSelection);
        (roundScore === 1) ? player++: (roundScore == 0)? comp++: "" ;
        console.log(`Score:\nPlayer: ${player} Computer: ${comp}`);
    }
    (player > comp) ? console.log("You win!") : (comp > player) ? console.log("You lose."): console.log("Tie");
}