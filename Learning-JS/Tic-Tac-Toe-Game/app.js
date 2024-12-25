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