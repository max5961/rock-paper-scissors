let playerWins = 0;
let computerWins = 0;
let ties = 0;

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

function getPlayerSelection(){

    playerSelection = window.prompt('Choose rock, paper, or scissors:').toLowerCase();
    
    while(playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors'){
        playerSelection = window.prompt('Invalid entry.  Choose rock, paper, or scissors:').toLowerCase();
    }

    return playerSelection; 
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
    for(i = 1; i <= 5; i++){
        playerSelection = getPlayerSelection();

        computerSelection = getComputerSelection();

        console.log(playRound(playerSelection, computerSelection));
    }
}

playGame();
console.log(checkWinner());
