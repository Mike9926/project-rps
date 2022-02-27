function computerPlay() {
    const choice = (Math.random() * 3);
    if ( choice <=1) {
        return 'rock';
    } else if (choice >= 2) {
        return'scissors';

    }else return 'paper';
}
let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
        if (playerSelection == 'rock' && computerSelection == 'scissors') {
            playerScore++;
            return 'You Win! Rock beats Scissors';
            
        } else if (playerSelection == 'rock' && computerSelection == 'paper') {
                computerScore++;
                    return 'You lose! Paper beats Rock'; 
        } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            playerScore++;
            return 'You Win! Rock beats Scissors';
        } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            playerScore++
            return 'You Win! Paper beats Rock!';
        }else if (playerSelection == 'paper' && computerSelection =='scissors') {
            return 'You Lose Scissors beats Paper';
        }else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            computerScore++
            return 'You Lose! Rock beats Scissors';
        }else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            return 'You Win! Scissors beats Paper!';
        } else return 'That is a Tie';
        
}


function game() {
    
    let playerSelection = prompt('Choose your weapon: Rock, Paper, Scissors')
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection))

    

    if (playerScore > computerScore){
        console.log(`You're the winner! Final Score: ${playerScore} to ${computerScore}`);
    }else if (computerScore > playerScore){
        console.log(`You got beaten. Final Score:${playerScore} to ${computerScore}`)
    }else 
    console.log(`Its a tie!. Final Score: ${playerScore} to ${computerScore}`);
}
game();
 //adding EVent listeners
const rock = document.getElementById("rock-btn");
rock.addEventListener("click", game)