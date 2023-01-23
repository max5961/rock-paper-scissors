let playerWins = 0;
let computerWins = 0;
let ties = 0;

let playerSelection;
let computerSelection;


const playerInput = document.querySelector('.playerInput');
const computerInput = document.querySelector('.computerInput');
const pWins = document.querySelector('.playerWins');
const cWins = document.querySelector('.computerWins')
const tie = document.querySelector('.ties');
const resultMessage = document.querySelector('.resultMessage');


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
        tie.textContent = `Ties: ${ties}`;
        resultMessage.textContent = `Tie Game!  You both chose ${playerSelection}!`;
    }

    //playerSelection === rock
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerWins++;
        cWins.textContent = `Computer Wins: ${computerWins}`;
        resultMessage.textContent = 'You lose!';
    } else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerWins++;
        pWins.textContent = `Player Wins: ${playerWins}`;
        resultMessage.textContent = 'You win!';
    }

    //playerSelection === paper
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerWins++;
        pWins.textContent = `Player Wins: ${playerWins}`;
        resultMessage.textContent = 'You win!';
    } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        computerWins++;
        cWins.textContent = `Computer Wins: ${computerWins}`;
        resultMessage.textContent = 'You win!';
        
    }

    //playerSelection === scissors
    else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        computerWins++;
        cWins.textContent = `Computer Wins: ${computerWins}`;
        resultMessage.textContent = 'You lose!';
    } else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        playerWins++;
        pWins.textContent = `Player Wins: ${playerWins}`;
        resultMessage.textContent = 'You win!';
        
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

// Each display picture needs to be resized to fit properly.  This function resizes the picture corresponding to the computer selection. //
function displayComputerInput(computerSelection){
    if(computerSelection == 'rock'){
        computerInput.setAttribute('style', `background-image: url(./images/${computerSelection}.png); background-size: 40%; background-repeat: no-repeat; background-position: center;`);
    }

    else if(computerSelection == 'paper'){
        computerInput.setAttribute('style', `background-image: url(./images/${computerSelection}.png); background-size: 25%; background-repeat: no-repeat; background-position: center;`);
    }

    else if(computerSelection == 'scissors'){
        computerInput.setAttribute('style', `background-image: url(./images/${computerSelection}.png); background-size: 60%; background-repeat: no-repeat; background-position: center;`);
    }
}



const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    playerInput.textContent = `You choose ${playerSelection}!`;
    playerInput.setAttribute('style', 'background-image: url(./images/rock.png); background-size: 40%; background-repeat: no-repeat; background-position: center;');
    computerSelection = getComputerSelection();
    computerInput.textContent = `Computer chooses ${computerSelection}!`;
    displayComputerInput(computerSelection);
    playRound(playerSelection, computerSelection);
    
    
}
);

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    playerInput.textContent = `You choose ${playerSelection}!`;
    playerInput.setAttribute('style', 'background-image: url(./images/paper.png); background-size: 25%; background-repeat: no-repeat; background-position: center;')
    computerSelection = getComputerSelection();
    computerInput.textContent = `Computer chooses ${computerSelection}!`;
    displayComputerInput(computerSelection);
    playRound(playerSelection, computerSelection);
}
);

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors';
    playerInput.textContent = `You choose ${playerSelection}!`;
    playerInput.setAttribute('style', 'background-image: url(./images/scissors.png); background-size: 60%; background-repeat: no-repeat; background-position: center;')
    computerSelection = getComputerSelection();
    computerInput.textContent = `Computer chooses ${computerSelection}!`;
    displayComputerInput(computerSelection);
    playRound(playerSelection, computerSelection);
}
);