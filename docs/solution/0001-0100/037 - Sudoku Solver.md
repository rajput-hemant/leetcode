# 37. Sudoku Solver [![share]](https://leetcode.com/problems/sudoku-solver/)

![][hard]

## Problem Statement:

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy **all of the following rules:**

- Each of the digits `1-9` must occur exactly once in each row.
- Each of the digits `1-9` must occur exactly once in each column.
- Each of the digits `1-9` must occur exactly once in each of the 9 `3x3` sub-boxes of the grid.
- The '.' character indicates empty cells.

### Example 1:

![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)

```
Input: board =
[["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]]

Output:
[["5","3","4","6","7","8","9","1","2"],
["6","7","2","1","9","5","3","4","8"],
["1","9","8","3","4","2","5","6","7"],
["8","5","9","7","6","1","4","2","3"],
["4","2","6","8","5","3","7","9","1"],
["7","1","3","9","2","4","8","5","6"],
["9","6","1","5","3","7","2","8","4"],
["2","8","7","4","1","9","6","3","5"],
["3","4","5","2","8","6","1","7","9"]]
```

**Explanation**: The input board is shown above and the only valid solution is shown below:

![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png)

### Constraints:

- board.length == 9
- board[i].length == 9
- board[i][j] is a digit or '.'.
- It is **guaranteed** that the input board has only one solution.

## Solutions:

### [_Java_](#)

```java
/*
A sudoku solution must satisfy all of the following rules:
-> Each of the digits 1-9 must occur exactly once in each row.
-> Each of the digits 1-9 must occur exactly once in each column.
-> Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The "." character indicates empty cells.
*/

public class SudokuSolver2 {
    public void solveSudoku(char[][] board) {
        helper(board, 0, 0);
    }

    // a utility function to solve the board
    boolean helper(char[][] board, int row, int col) {
        // base case -> recursion stops at the 10th row
        if (row == board.length)
            return true;
        int newRow = 0, newCol = 0;
        // when its the last col of the board, goto next row & first col
        if (col == board.length - 1) {
            newRow = row + 1;
            newCol = 0;
        }
        // else, keep increasing the col by one & the row remains the same
        else {
            newRow = row;
            newCol = col + 1;
        }
        // if the cell isn't empty, i.e. there is a number present in that cell
        if (board[row][col] != '.') {
            // do a recursive call, if the fn returns true, i.e. the board is solved,
            // we'll also return true
            if (helper(board, newRow, newCol))
                return true;
        }
        // if cell is empty
        else {
            for (int i = 1; i <= 9; i++) {
                // if it's safe to place 'i' at that cell
                if (isValidPlacement(board, row, col, i)) {
                    board[row][col] = (char) (i + '0');
                    // after placing the number, do a recursive call,
                    // if the fn returns true, we'll also return true
                    if (helper(board, newRow, newCol))
                        return true;
                    // if the recursive call returns false, i.e. it wasn't safe to place 'i',
                    // we'll empty the cell & and will try for the next value of 'i' (backtracking)
                    else
                        board[row][col] = '.';
                }
            }
        }
        // return false if it isn't posssible to place a number in the cell
        return false;
    }

    // a utility fn to check for valid placement of a number in cell of Sudoku Board
    boolean isValidPlacement(char[][] board, int row, int col, int number) {
        // to check if 'number' is present in the row or the col
        for (int i = 0; i < board.length; i++) {
            // return false if 'number' is present in the col
            if (board[i][col] == (char) (number + '0'))
                return false;
            // return false if 'number' is present in the row
            if (board[row][i] == (char) (number + '0'))
                return false;
        }
        // to check if the 'number' is present in the 3X3 grid
        // There are two ways to get the initial row and column of 3X3 grid
        // 1
        int startingRow = (row / 3) * 3;
        int startingCol = (col / 3) * 3;
        // 2
        // int startingRow = (row % 3) - row;
        // int startingCol = (col % 3) - col;
        for (int i = startingRow; i < startingRow + 3; i++)
            for (int j = startingCol; j < startingCol + 3; j++)
                // return false if 'number' is present in the 3X3 grid or matrix
                if (board[i][j] == (char) (number + '0'))
                    return false;
        // return true if 'number' isn't present in row, col & grid
        return true;
    }
}
```

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
