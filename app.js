let playerWins = 0;
let computerWins = 0;
let ties = 0;

let playerSelection;
let computerSelection;



function getComputerSelection(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerSelection;

    if(randomNumber === 1){
        computerSelection = 'rock';
    } else if(randomNumber === 2){
        computerSelection = 'paper';
    } else if(randomNumber === 3){
        computerSelection = 'scissors'
    }

    return computerSelection;
}



function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        ties++;
        return `Tie game!  You and the computer both chose ${playerSelection}.\nUser Wins: ${playerWins}\nComputer Wins: ${computerWins}\nTies: ${ties}`;
    }

    //playerSelection === rock
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerWins++;
        return `You lose!  The computer chose paper.\nUser Wins: ${playerWins}\nComputer Wins: ${computerWins}\nTies: ${ties}`;
    } else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerWins++;
        return `You win!  The computer chose scissors.\nUser Wins: ${playerWins}\nComputer Wins: ${computerWins}\nTies: ${ties}`;
    }

    //playerSelection === paper
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerWins++;
        return `You win!  The computer chose rock.\nUser Wins: ${playerWins}\nComputer Wins: ${computerWins}\nTies: ${ties}`;
    } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        computerWins++;
        return `You lose!  The computer chose scissors.\nUser Wins: ${playerWins}\nComputer Wins: ${computerWins}\nTies: ${ties}`;
    }

    //playerSelection === scissors
    else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        computerWins++;
        return `You lose!  The computer chose rock.\nUser Wins: ${playerWins}\nComputer Wins: ${computerWins}\nTies: ${ties}`;
    } else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        playerWins++;
        return `You win!  The computer chose paper.\nUser Wins: ${playerWins}\nComputer Wins: ${computerWins}\nTies: ${ties}`;
    }
}   

function checkWinner(){
    if(playerWins == computerWins){
        return `Result is a tie!  You and the computer both won ${playerWins} out of 5 rounds.  There were ${ties} tie games.`
    } else if(playerWins > computerWins){
        return `You won!  You won ${playerWins} out of 5 rounds.  There were ${ties} tie games.`
    } else if(playerWins < computerWins){
        return `You lost!  The computer won ${computerWins} out of 5 rounds.  There were ${ties} tie games.`
    }
}
function playGame(){
        computerSelection = getComputerSelection();

        console.log(playRound(playerSelection, computerSelection));
    }


const playerInput = document.querySelector('.playerInput');
const computerInput = document.querySelector('.computerInput');


const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    playerInput.textContent = `You choose ${playerSelection}!`;
    playerInput.setAttribute('style', 'background-image: url(./images/rock.png); background-size: 40%; background-repeat: no-repeat; background-position: center;');
    computerSelection = getComputerSelection();
    computerInput.textContent = `CPU chooses ${computerSelection}!`;
}
);

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    playerInput.textContent = `You choose ${playerSelection}!`;
    playerInput.setAttribute('style', 'background-image: url(./images/paper.png); background-size: 25%; background-repeat: no-repeat; background-position: center;')
    computerSelection = getComputerSelection();
    computerInput.textContent = `CPU chooses ${computerSelection}!`;
}
);

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors';
    playerInput.textContent = `You choose ${playerSelection}!`;
    playerInput.setAttribute('style', 'background-image: url(./images/scissors.png); background-size: 60%; background-repeat: no-repeat; background-position: center;')
    computerSelection = getComputerSelection();
    computerInput.textContent = `CPU chooses ${computerSelection}!`;
}
);