document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var board = {
  cells: [
    {row: 0, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    }, 
    {row: 0, col: 1, isMine: true, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 0, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 0, col: 3, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 0, col: 4, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 0, col: 5, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 1, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    }, 
    {row: 1, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 1, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 1, col: 3, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 1, col: 4, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 1, col: 5, isMine: true, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 2, col: 0, isMine: true, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    }, 
    {row: 2, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 2, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 2, col: 3, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 2, col: 4, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 2, col: 5, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 3, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    }, 
    {row: 3, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 3, col: 2, isMine: true, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 3, col: 3, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 3, col: 4, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 3, col: 5, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 4, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    }, 
    {row: 4, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 4, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 4, col: 3, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 4, col: 4, isMine: true, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 4, col: 5, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 5, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 5, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 5, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 5, col: 3, isMine: true, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 5, col: 4, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
    {row: 5, col: 5, isMine: false, isMarked: false, hidden: true, surroundingMines: (countSurroundingMines)
    },
  ]
} 






function startGame () {
  for (var i = 0; i < board.cells.length; i++) {board.cells[i].surroundingMines = countSurroundingMines(
        board.cells[i]);
  }
  document.addEventListener("click", checkForWin); //check for win conditions every time the left mouse is clicked
  document.addEventListener("contextMenu", checkForWin); // check for win every time the right mouse is clicked

  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  };  

//forward loop through the cells to find the number of surrounding mines

// array of objects = board.cells

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
for (i = 0; i < board.cells.length; i++) {
    var currentCell = board.cells[i]; // the current cell during the loop process
    if (currentCell.isMine == true && currentCell.isMarked == false) {
      return; 
    } else if (currentCell.isMine == false && currentCell.hidden == true) {
      return;
    } 
  }
  displayMessage("Congratulations! You've won!"); // when the conditions are satisfied, display the message

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) { // function name(parameter) {
  // code to be executed


  var mineCount = 0; //initiate loop

  var surroundingCells = getSurroundingCells(cell.row, cell.col); //retrieve cells around other cells that have bombs within the array

  for (var i = 0; i <
    surroundingCells.length; i++){ //if there are mines in the surrounding cells, add 1
      if (surroundingCells[i].isMine === true) 
        {mineCount ++; //boolean for the presence of mines
      }
    }
    return mineCount //return value
}

