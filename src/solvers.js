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

  var solution;
  var board = new Board({n: n});

  var rooksSolver = function (curRow) {
    if (curRow === n) {
      solution = board.rows();
      return;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(curRow, i);
      if (!board.hasAnyRooksConflicts()) {
        rooksSolver(curRow + 1);
      } else {
        board.togglePiece(curRow, i);
      }
    }
  };
  rooksSolver(0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;


};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var solutionCount = 0;
  var board = new Board({n: n});

  var rooksCounter = function (curRow) {
    if (curRow === n) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(curRow, i);
      if (!board.hasAnyRooksConflicts()) {
        rooksCounter(curRow + 1);
      }
      board.togglePiece(curRow, i);

    }
  };
  rooksCounter(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var solution;
  var board = new Board({n: n});

  if (n === 2 || n === 3) {
    return board.rows();
  }

  var queenSolver = function (curRow) {
    if (curRow === n) {
      solution = board.rows();
      return;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(curRow, i);
      if (!board.hasAnyQueenConflictsOn(curRow, i)) {
        queenSolver(curRow + 1);
      }
      if (solution) {
        return solution;
      }
      board.togglePiece(curRow, i);
    }
  };
  queenSolver(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};
// debuggger;
// var solutionBoard = new Board(findNQueensSolution(n));

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  var solutionCount = 0;
  var board = new Board({n: n});

  var queensCounter = function (curRow) {
    if (curRow === n) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(curRow, i);
      if (!board.hasAnyQueensConflicts()) {
        queensCounter(curRow + 1);
      }
      board.togglePiece(curRow, i);

    }
  };
  queensCounter(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
