function ComputerPlay() {
    const options = ["Rock","Paper", "Scissors"]
    const minimum = 0;
    const maximum = 2;
    let randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return options[randomnumber];
}

function playRound(playerSelection, computerSelection) {
    let roundScore;
    const comment = document.querySelector(".comment");
    switch (true) {
        case playerSelection == computerSelection:
            comment.textContent = "Tie Round"
            roundScore = 2;
            break;
        case playerSelection === "Rock" && computerSelection === "Scissors":
            comment.textContent = `You win this round! ${playerSelection} crushes ${computerSelection}`
            roundScore = 1;
            break;
        case playerSelection === "Rock" && computerSelection === "Paper":
            comment.textContent = `You lose this round, ${computerSelection} captures ${playerSelection}`
            roundScore = 0;
            break;
        case playerSelection === "Paper" && computerSelection === "Scissors":
            comment.textContent = `You lose this round, ${computerSelection} cut ${playerSelection}`
            roundScore = 0;
            break;
        case playerSelection === "Paper" && computerSelection === "Rock":
            comment.textContent = `You win this round! ${playerSelection} captures ${computerSelection}`
            roundScore = 1;
            break;
        case playerSelection === "Scissors" && computerSelection === "Rock":
            comment.textContent = `You lose this round, ${computerSelection} crushes ${playerSelection}`
            roundScore = 0;
            break;
        case playerSelection === "Scissors" && computerSelection === "Paper":
            comment.textContent = `You win this round! ${playerSelection} cut ${computerSelection}`
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
        (roundScore === 1) ? player++: (roundScore === 0)? comp++: "" ;
        console.log(`Score:\nPlayer: ${player} Computer: ${comp}`);
    }
    (player > comp) ? console.log("You win!") : (comp > player) ? console.log("You lose."): console.log("Tie");
}

let hscore = 0;
let cscore = 0;
let round = 0;

document.addEventListener('DOMContentLoaded', () => {
    const humanScore = document.querySelector('#humanscore');
    const compScore = document.querySelector('#compscore');
    humanScore.textContent = hscore;
    compScore.textContent = cscore;
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click',() =>  {
            round++;
            const playerSelection = btn.dataset["selection"];
            const computerSelection = ComputerPlay();
            const result = playRound(playerSelection, computerSelection);
            if (result === 1){
                hscore++;
                humanScore.textContent = hscore;
            }
            else if (result === 0){
                cscore++;
                compScore.textContent = cscore;
            };
            if (round == 5) {
                const result = document.querySelector(".result");
                const resultTxt = document.querySelector(".resulttxt")
                if (hscore > cscore){
                    resultTxt.textContent = "Congratulations! You won!"
                }
                else if (cscore > hscore){
                    resultTxt.textContent = "You lost! Try better next time!"
                }
                else {
                    resultTxt.textContent = "It was a tie!"
                }
                document.querySelectorAll('.btn').forEach(btn => {
                    btn.style.display = "none";
                })
                document.querySelector('.comment').style.display = "none";
                const body =  document.querySelector('body');
                body.style.justifyContent = "center";
                body.style.gap = "20px";
                result.style.display = "block";
            }
        })
    })
})