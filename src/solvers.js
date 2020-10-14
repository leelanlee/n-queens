/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  // toggle from rows(0) to rows(n)
  // each row toggle a Rook from col(0) to col(n)
  // if conflict go back to previous row and next col
  // otherwise, move to next row

  // I: current board, n for size, n for number of pieces
  //    value for base case,
  // O:
  // C:
  // E:



  var board = new Board({n: n});

  var solution = undefined;

  var rookSolver = function (board, curRow) {
    // iterate first row
    if (curRow === n - 1) {
      return board.rows();
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(curRow, i);
      if (!board.hasAnyRooksConflicts()) {
        rookSolver(board, curRow + 1);
      } else {
        board.togglePiece(curRow, i);
      }
    }
  };

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
