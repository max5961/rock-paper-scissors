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
const roundWinner = document.querySelector('.roundWinner')
const roundWinnerMessage = document.querySelector('.roundWinnerMessage');

const playAgainButton = document.createElement('button');
playAgainButton.classList.add('playAgainButton');


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

function resetWinnerMessage(){
    roundWinnerMessage.textContent = '';
}

function resetScore(){
    pWins.textContent = `Player Wins: ${playerWins}`;
    cWins.textContent = `Computer Wins: ${computerWins}`;
    tie.textContent = `Ties: ${ties}`;

}

function playAgain(){
    playerWins = 0;
    computerWins = 0;
    ties = 0;
            
    resultMessage.textContent = 'Make a selection by clicking one of the icons below';
}

function checkWinner(playerWins, computerWins){
    if(playerWins >= 5){
        roundWinnerMessage.textContent = 'You Win!  You were the first to 5 wins.';
        playAgain();
    } else if(computerWins >= 5){
        roundWinnerMessage.textContent = `You lose.  Computer was the first to 5 wins.`;
        playAgain();
    }
}


// Each display picture needs to be resized to fit properly.  This function resizes the picture corresponding to the computer selection. //
function displayComputerInput(computerSelection){
    if(computerSelection == 'rock'){
        computerInput.setAttribute('style', `background-image: url(./images/${computerSelection}.png); background-size: 50%; background-repeat: no-repeat; background-position: center 75%;`);
    }

    else if(computerSelection == 'paper'){
        computerInput.setAttribute('style', `background-image: url(./images/${computerSelection}.png); background-size: 35%; background-repeat: no-repeat; background-position: center 75%;`);
    }

    else if(computerSelection == 'scissors'){
        computerInput.setAttribute('style', `background-image: url(./images/${computerSelection}.png); background-size: 65%; background-repeat: no-repeat; background-position: center 75%;`);
    }
}


const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => {
    resetWinnerMessage();
    resetScore()
    playerSelection = 'rock';
    playerInput.textContent = `You choose ${playerSelection}!`;
    playerInput.setAttribute('style', 'background-image: url(./images/rock.png); background-size: 50%; background-repeat: no-repeat; background-position: center 75%;');
    computerSelection = getComputerSelection();
    computerInput.textContent = `Computer chooses ${computerSelection}!`;
    displayComputerInput(computerSelection);
    playRound(playerSelection, computerSelection);
    checkWinner(playerWins, computerWins);
    
}
);


paperBtn.addEventListener('click', () => {
    resetWinnerMessage();
    resetScore()
    playerSelection = 'paper';
    playerInput.textContent = `You choose ${playerSelection}!`;
    playerInput.setAttribute('style', 'background-image: url(./images/paper.png); background-size: 35%; background-repeat: no-repeat; background-position: center 75%;')
    computerSelection = getComputerSelection();
    computerInput.textContent = `Computer chooses ${computerSelection}!`;
    displayComputerInput(computerSelection);
    playRound(playerSelection, computerSelection);
    checkWinner(playerWins, computerWins);
}
);

scissorsBtn.addEventListener('click', () => {
    resetWinnerMessage();
    resetScore();
    playerSelection = 'scissors';
    playerInput.textContent = `You choose ${playerSelection}!`;
    playerInput.setAttribute('style', 'background-image: url(./images/scissors.png); background-size: 65%; background-repeat: no-repeat; background-position: center 75%;')
    computerSelection = getComputerSelection();
    computerInput.textContent = `Computer chooses ${computerSelection}!`;
    displayComputerInput(computerSelection);
    playRound(playerSelection, computerSelection);
    checkWinner(playerWins, computerWins);
}
);