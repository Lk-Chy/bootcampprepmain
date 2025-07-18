// // YOUR CODE BELOW
// ### Tic Tac Toe

// Define an object 'ticTacToe'.

// Follow the test specs to create a 'board' property, 'move' method, and a 'clear'
// method so you can play a game with your partner.

// The 'board' property is a grid of arrays that represents the board, where each
// cell is initiall null.

// The 'move' method is a method that, given a character, rowNum, and colNum, adds
// the character to the correct cell in the board.

// The 'clear' method should reset the board to all nulls.

// To make it easier to play, have your 'move' method console.log() the
// board before the method returns the board.

let ticTacToe = {
    board : [[null,null,null],[null,null,null],[null,null,null]],
    move : function(char,row,col){
        if(this.board[row][col]=== null){
        this.board[row][col]=char;
        }
        return this.board;
    },
    clear : function(){
        this.board = [[null,null,null],[null,null,null],[null,null,null]]

        return this.board;
    }




}