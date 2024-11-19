//!**Using any of the tools you've worked with so far, create a game of Tic-Tac-Toe.

/////Create a Tic-Tac-Toe game grid using your HTML element of choice.

////When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.

//A heading should say whether it is X's or O's turn and change with each move made.

//A button should be available to clear the grid and restart the game.

//When a player has won, or the board is full and the game results in a draw,
// a Bootstrap alert or similar Bootstrap component should appear across the screen announcing the winner.

$(document).ready(function () {
    // Hide alerts at the start
    $('#alertStart').hide();
    $('#alertWinner').hide();
    $('#alertDraw').hide();

    // Game variables
    const boxes = [
        $('#box0'), $('#box1'), $('#box2'),
        $('#box3'), $('#box4'), $('#box5'),
        $('#box6'), $('#box7'), $('#box8')
    ];
    const winningOutcomes = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    let currentPlayer = "X";
    let turn = 0;
    let winner = false;

    // Start game logic
    $('#startbtn').click(function () {
        $('#alertStart').show().text("Player 1 Start! 🏁");
        resetGame();
        currentPlayer = "X";
        winner = false;
        turn = 0;
    });

    // Reset game function
    const resetGame = () => {
        boxes.forEach(box => {
            box.text("").removeClass("disabled");
        });
        $('#alertWinner').hide();
        $('#alertDraw').hide();
        $('#alertStart').hide();
    };

    // Check winner function
    const checkWinner = () => {
        for (let outcome of winningOutcomes) {
            const [a, b, c] = outcome;
            if (boxes[a].text() === currentPlayer &&
                boxes[b].text() === currentPlayer &&
                boxes[c].text() === currentPlayer) {
                winner = true;
                $('#alertWinner').show().text(`Player ${currentPlayer === "X" ? "1" : "2"} Wins! 🎉`);
                return;
            }
        }
        if (turn === 9 && !winner) {
            $('#alertDraw').show().text("Game Over! It's a Draw!");
        }
    };

    // Box click event
    boxes.forEach((box, index) => {
        box.click(function () {
            if (!winner && box.text() === "") {
                box.text(currentPlayer).addClass("disabled");
                turn++;
                checkWinner();
                if (!winner) {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });
    });

    // Reset button logic
    $('#resetbtn').click(resetGame);
});
