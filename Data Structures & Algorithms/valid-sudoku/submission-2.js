class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let mp = new Map();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] != "." && mp.has(board[i][j])) {
        return false;
      } else if (board[i][j] != ".") {
        mp.set(board[i][j]);
      }
    }
  

    mp.clear();
  }

  mp.clear();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] != "." && mp.has(board[j][i])) {
        return false;
      } else if (board[j][i] != ".") {
        mp.set(board[j][i]);
      }
    }
 

    mp.clear();
  }
  mp.clear();

  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j++) {
      if (j == 0 || j == 3 || j == 6) {
        mp.clear();
      }
      if (board[i][j] != "." && mp.has(board[i][j])) {
        return false;
        console.log(board[i][j]);
      } else {
        mp.set(board[i][j]);
      }
      if (board[i + 1][j] != "." && mp.has(board[i + 1][j])) {
        return false;
        console.log(board[i + 1][j]);
      } else {
        mp.set(board[i + 1][j]);
      }
      if (board[i + 2][j] != "." && mp.has(board[i + 2][j])) {
        return false;
        console.log(board[i + 2][j]);
      } else {
        mp.set(board[i + 2][j]);
      }
    }

    mp.clear();
  }

  return true;

    }
}
