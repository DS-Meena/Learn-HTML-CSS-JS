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

document.addEventListener('DOMContentLoaded', () => {
    const game = new TicTacToe();
});

const TicTac = {
    currPlayer: "X", 
    state: Array(9).fill(null), 
    gameOver: false,

    // Initialize the game
    init() {
        this.currBoard();
        document.getElementById("reset").addEventListener("click", () => this.reset());
    },

    // create the game board dynamically
    currBoard() {
        const board = document.getElementById("board");
        board.innerHTML = "";
        
        // add cells
        this.state.forEach((_, i) => {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.index = i;
            board.appendChild(cell);
        });

        // handle clicks on the board
        board.addEventListener("click", (e) => this.handleClick(e));
        this.uMessage(`Player ${this.currPlayer}'s turn`);
    },

    // Handle a cell click
    handleClick(e) {
        const cell = e.target;
        const i = cell.dataset.index;

        // Ignore clicks if game is over or cell is taken
        if (this.gameOver || !cell.classList.contains("cell") || this.state[i])
            return;

        // update board state and UI
        this.state[i] = this.currPlayer;
        cell.textContent = this.currPlayer;
        cell.classList.add("taken");

        // check for winner or tie
        const winCombo = this.checkWin();
        if (winCombo) {
            this.highlight(winCombo);
            this.uMessage(`Player ${this.currPlayer} wins!`);
            this.gameOver = true;
        } else if (this.state.every((cell) => cell)) {
            this.uMessage("It's a tie!");
            this.gameOver = true;
        } else {
            this.currPlayer = this.currPlayer === "X" ? "O" : "X";
            this.uMessage(`Player ${this.currPlayer}'s turn`);
        }
    },

    // check if there's a winning combination
    checkWin() {
        const wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8], // Rows
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8], // Columns
            [0, 4, 8],
            [2, 4, 6], // Diagonals
        ];

        return wins.find((combo) => combo.every((i) => this.state[i] === this.currPlayer));
    },

    // Highlight winning cells
    highlight(combo) {
        combo.forEach((i) => {
            document.getElementById("board").children[i].style.color = "red";
        });
    },

    // reset the game
    reset() {
        this.state = Array(9).fill(null);
        this.currPlayer = "X";
        this.gameOver = false;
        this.currBoard();
    },

    // Update the game status message
    uMessage(msg) {
        document.getElementById("message").textContent = msg;
    },
};

// state the game
TicTac.init();