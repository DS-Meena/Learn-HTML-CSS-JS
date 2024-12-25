class TicTacToe {
    constructor() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];
        
        // some extra features
        this.playerScores = {X: 0, O: 0};
        this.themes = {
            classic: {
                X: 'X',
                O: 'O',
                xColor: '#2196F3',
                oColor: '#2196F3'
            },
            emoji: {
                X: '🦁',
                O: '🐯',
                xColor: '#000',
                oColor: '#000'
            },
            shapes: {
                X: '★',
                O: '◆',
                xColor: '#9C27B0',
                oColor: '#FF9800'
            }
        };
        this.currentTheme = 'classic';

        this.initializeGame();
    }

    // initialize and add event listeners
    initializeGame() {
        // game elements
        this.cells = document.querySelectorAll('.cell');
        this.statusDisplay = document.querySelector('.game-status');
        
        this.resetButton = document.querySelector('.reset-button');
        this.resetButton.addEventListener('click', () => this.resetGame());
        this.resetScoreButton = document.querySelector('.reset-score');
        this.resetScoreButton.addEventListener('click', () => this.resetScores());

        this.cells.forEach(cell => {
            cell.addEventListener('click', (e) => this.handleCellClick(e), {once: true});
        });

        this.updateStatusDisplay();

        // add theme selector
        this.themeSelector = document.querySelector('#theme-selector');
        this.themeSelector.addEventListener('change', (e) => this.changeTheme(e.target.value));

        // add score display
        this.scoreDisplay = document.querySelector('.score-display');
        this.updateScoreDisplay();
    }

    // for cell click
    handleCellClick(event) {
        const cell = event.target;
        const cellIndex = parseInt(cell.getAttribute('data-cell-index'));

        // return if invalid move
        if (this.board[cellIndex] != '' || !this.gameActive) 
            return;

        this.makeMove(cell, cellIndex);
        this.checkGameStatus();
    }

    makeMove(cell, index) {
        const theme = this.themes[this.currentTheme]        
        this.board[index] = this.currentPlayer;

        cell.textContent = theme[this.currentPlayer];
        cell.style.color = theme[`${this.currentPlayer.toLocaleLowerCase()}Color`];

        cell.classList.add('cell-animated');
    }

    checkGameStatus() {
        if (this.checkWin()) {
            this.handleWin();
            return;
        }
        
        // every cell is filled
        if (this.board.every(cell => cell !== '')) {
            this.handleDraw();
            return;
        }

        this.switchPlayer();
    }

    checkWin() {
        return this.winningCombinations.some(combination => {
            return combination.every(index => {
                return this.board[index] === this.currentPlayer;
            });
        });
    }

    handleWin() {
        this.playerScores[this.currentPlayer]++;
        this.updateScoreDisplay();

        this.statusDisplay.textContent = `Player ${this.themes[this.currentTheme][this.currentPlayer]} wins!`;
        this.gameActive = false;

        this.highlightWinningCells();
    }

    highlightWinningCells() {
        const winningCombo = this.getWinningCombo();
        if (winningCombo) {
            winningCombo.forEach(index => {
                this.cells[index].classList.add('winner');
            });
        }
    }

    getWinningCombo() {
        return this.winningCombinations.find(combination => {
            return combination.every(index => {
                return this.board[index] === this.currentPlayer;
            });
        });
    }

    changeTheme(themeName) {
        this.currentTheme = themeName;
        this.updateBoard();
    }

    updateBoard() {
        const theme = this.themes[this.currentTheme];
        this.cells.forEach((cell, index) => {
            if (this.board[index]) {
                cell.textContent = theme[this.board[index]];
                cell.style.color = theme[`${this.board[index].toLocaleLowerCase()}Color`];
            }
        });

        this.updateScoreDisplay();
        this.updateStatusDisplay();
    }

    handleDraw() {
        this.statusDisplay.textContent = "Game ended in a draw!";
        this.gameActive = false;
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.updateStatusDisplay();
    }

    updateScoreDisplay() {
        const theme = this.themes[this.currentTheme];
        this.scoreDisplay.textContent = `${theme.X}: ${this.playerScores.X} - ${theme.O}: ${this.playerScores.O}`;
    }

    updateStatusDisplay() {
        this.statusDisplay.textContent = `Player ${this.themes[this.currentTheme][this.currentPlayer]}'s turn`;
    }

    // for reset game button
    resetGame() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;

        this.cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o', 'winner', 'cell-animated');
            cell.style.color = '';

            cell.addEventListener('click', (e) => this.handleCellClick(e), {once: true});
        });

        this.updateStatusDisplay();
    }

    resetScores() {
        if (confirm('Are you sure you want to reset all scores?')) {
            this.playerScores = {
                X: 0,
                O: 0
            };
            this.updateScoreDisplay();

            // Add visual feedback
            this.scoreDisplay.classList.add('score-reset-animation');
            setTimeout(() => {
                this.scoreDisplay.classList.remove('score-reset-animation');
            }, 500);
        }
    }
}

// start game
document.addEventListener('DOMContentLoaded', () => {
    const game = new TicTacToe();
});
