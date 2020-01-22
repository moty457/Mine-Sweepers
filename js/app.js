'use strict';

//-------------------------------GLOBAL VARIABLES AND OBJECTS:--------------------------------

var gBoard;


var MINE = '**';
var FLAG = '&&';

var MINE_IMG = '<img src="img/mine.png" />';
var FLAG_IMG = '<img src="img/flag.png" />';


// This is an object in which you can keep and update the current game state:
//  isOn – boolean, when true we let the user play 
//  shownCount: how many cells are shown 
//  markedCount: how many cells are marked (with a flag) 
//  secsPassed: how many seconds passed
var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
};

// This is an object by which the board size is set (in this case: 4*4), and how many mines to put
var gLevel = {
    SIZE: 4,
    MINES: 2
};

//-------------------------------METHODS:--------------------------------

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// This is called when page loads 
function initGame() {
    gBoard = buildBoard(4);
    renderBoard(gBoard);
}

// Builds the board   Set mines at random locations Call 
// setMinesNegsCount() Return the created board 
function buildBoard(n) {
    var board = [];

    // Create the Matrix
    // var board = Mat(nXn)
    for (var i = 0; i < n; i++) {
        var row = []
        for (var j = 0; j < n; j++) {

            //cell objects:
            var cell = {
                pos: {
                    i: i,
                    j: j
                },
                minesAroundCount: 4,
                isShown: false,
                isMine: false,
                isMarked: true
            };
            row.push(cell)
        }
        board.push(row)
    }
    console.log(board);
    return board;
}

// Count mines around each cell and set the cell's minesAroundCount.
function setMinesNegsCount(board) {

}

// Render the board as a <table> to the page
function renderBoard(gBoard) {
    var strHtml = '';
    for (var i = 0; i < gBoard.length; i++) {
        var row = gBoard[i];
        strHtml += '<tr>';
        for (var j = 0; j < row.length; j++) {
            var cell = row[j];
            var tdId = `cell-${i}-${j}`;
            var className = 'empty';
            strHtml += `<td id="${tdId}" class="${className}" onclick="cellClicked(this)">${cell}</td>`
        }
        strHtml += '</tr>';
    }
    var elBoard = document.querySelector('.game-board');
    elBoard.innerHTML = strHtml;
    console.log(elBoard.innerHTML)
}

function renderCell(cell, isMine, isShown, isMarked) {
    var strHtml = '';
    var tdId = `cell-${cell.pos.i}-${cell.pos.j}`;
    if (isMine) {
        var className = 'isMine';

        if (isShown) {
            className = 'isShown';
        }
    }
    strHtml = `<td id="${tdId}" class="${className}" onclick="cellClicked(this)">${cell}</td>`
}

initGame();
gBoard[0][1].isMine = true;
// board[0][1].isShown = true;
var elBoard = document.querySelector('.game-board');
elBoard.row
console.log(" " );
console.log(" elBoarrd is:: " ,elBoard);
renderCell(gBoard[0][1],gBoard[0][1].isMine,false);

// board[2][3].isMine = true;
// board[2][3].isShown = true;

// renderCell(board[2][3]);




// Called when a cell (td) is clicked 
function cellClicked(elCell, i, j) {

}

// Called on right click to mark a cell (suspected to be a mine) 
// Search the web (and implement) how to hide the context menu on right click
function cellMarked(elCell) {

}

// Game ends when all mines are marked and all the other cells are show
function checkGameOver() {

}

// When user clicks a cell with no mines around, we need to open not only that cell, but also its neighbors.  
// NOTE: start with a basic implementation that only opens the non-mine 1st degree neighbors 
// BONUS: if you have the time later, try to work more like the real algorithm (see description at the Bonuses section below) 
function expandShown(board, elCell, i, j) {

}





