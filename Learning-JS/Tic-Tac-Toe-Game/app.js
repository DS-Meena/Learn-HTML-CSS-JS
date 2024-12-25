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
        this.initializeGame();
    }

    // initialize and add event listeners
    initializeGame() {
        this.cells = document.querySelectorAll('.cell');
        this.statusDisplay = document.querySelector('.game-status');
        this.resetButton = document.querySelector('.reset-button');

        this.cells.forEach(cell => {
            cell.addEventListener('click', (e) => this.handleCellClick(e), {once: true});
        });

        this.resetButton.addEventListener('click', () => this.resetGame());
        this.updateStatusDisplay();
    }

    // for cell click
    handleCellClick(event) {
        const cell = event.target;
        const cellIndex = parseInt(cell.getAttribute('data-cell-index'));

        if (!this.isValidMove(cellIndex)) return;

        this.makeMove(cell, cellIndex);
        this.checkGameStatus();
    }

    isValidMove(index) {
        return this.board[index] === '' && this.gameActive;
    }

    makeMove(cell, index) {
        this.board[index] = this.currentPlayer;
        cell.textContent = this.currentPlayer;
        cell.classList.add(this.currentPlayer.toLocaleLowerCase());
    }

    checkGameStatus() {
        if (this.checkWin()) {
            this.handleWin();
            return;
        }
        if (this.checkDraw()) {
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

    checkDraw() {
        return this.board.every(cell => cell !== '');
    }

    handleWin() {
        this.statusDisplay.textContent = `Player ${this.currentPlayer} wins!`;
        this.gameActive = false;
    }

    handleDraw() {
        this.statusDisplay.textContent = "Game ended in a draw!";
        this.gameActive = false;
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.updateStatusDisplay();
    }

    updateStatusDisplay() {
        this.statusDisplay.textContent = `Player ${this.currentPlayer}'s turn`;
    }

    // for reset game button
    resetGame() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;

        this.cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o');
            cell.addEventListener('click', (e) => this.handleCellClick(e), {once: true});
        });

        this.updateStatusDisplay();
    }
}

// start game
document.addEventListener('DOMContentLoaded', () => {
    const game = new TicTacToe();
});
