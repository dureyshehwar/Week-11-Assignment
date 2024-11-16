//!**Using any of the tools you've worked with so far, create a game of Tic-Tac-Toe.

/////Create a Tic-Tac-Toe game grid using your HTML element of choice.

////When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.

//A heading should say whether it is X's or O's turn and change with each move made.

//A button should be available to clear the grid and restart the game.

//When a player has won, or the board is full and the game results in a draw, a Bootstrap alert or similar Bootstrap component should appear across the screen announcing the winner.

let box0 =$('#box0');
let box1 =$('#box1');
let box2 =$('#box2');
let box3 =$('#box3');
let box4 =$('#box4');
let box5 =$('#box5');
let box6 =$('#box6');
let box7 =$('#box7');
let box8 =$('#box8');

let player1 ="X";
let Player2 = "O";

let turn = 0;
let winner = false;


