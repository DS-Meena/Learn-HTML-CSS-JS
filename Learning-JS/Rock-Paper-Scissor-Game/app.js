const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ['rock', 'paper', 'scissor'];

        // function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click', function () {

                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${3 - moves}`;

                // computer turn
                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];
                
                // Update the symbols
                updateSymbols(this.innerText, computerChoice)

                // check winner if any
                winner(this.innerText, computerChoice)

                // all moves are used
                if (moves == 3) {
                    gameOver(playerOptions, movesLeft);
                }

            })
        })
    }

    // function to update symbols
    const updateSymbols = (playerChoice, computerChoice) => {
        const playerSymbol = document.querySelector('.p-action');
        const computerSymbol = document.querySelector('.c-action');

        playerChoice = playerChoice.toLowerCase();
        
        switch (playerChoice) {
            case 'rock':
                playerSymbol.textContent = '🪨';
                break;
            case 'paper':
                playerSymbol.textContent = '📄';
                break;
            default:
                playerSymbol.textContent = '✂️';
        }

        switch (computerChoice) {
            case 'rock':
                computerSymbol.textContent = '🪨';
                break;
            case 'paper':
                computerSymbol.textContent = '📄';
                break;
            default:
                computerSymbol.textContent = '✂️';
        }
    }

    // function to decide winner
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');

        player = player.toLowerCase();
        computer = computer.toLowerCase();

        // find winner
        let winner = "player"
        if (player === computer) {
            winner = "tie"
            result.textContent = 'Tie'
        }
        else if ((player == 'rock' && computer == 'paper') ||
                player == 'scissor' && computer == 'rock' ||
                player == 'paper' && computer == 'scissor') {
            winner = "computer"
        } 

        // update result and scores
        if (winner == "player") {
            result.textContent = 'Player Won'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
        else if (winner == "computer") {
            result.textContent = 'Computer Won'
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }
    }

    // when game is over
    const gameOver = (playerOptions, movesLeft) => {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })

        chooseMove.innerText = 'Game Over'
        movesLeft.style.display = 'none';
        result.style.fontSize = '2rem';

        if (playerScore > computerScore) {
            result.innerText = 'You won the Game'
            result.style.color = '#308D46'
        }
        else if (playerScore < computerScore) {
            result.innerText = 'You Lost the Game';
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey';
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }

    // continue the game
    playGame();
}

// start the game
game();