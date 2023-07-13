enum Direction {
    Up,
    Down,
}

impl Solution {
    pub fn find_diagonal_order(mat: Vec<Vec<i32>>) -> Vec<i32> {
        let mut result = vec![];
        let mut direction = Direction::Up;
        let (mut row, mut col) = (0, 0);
        let (row_len, col_len) = (mat.len(), mat[0].len());

        while row < row_len && col < col_len {
            // push the current element to the result vector
            result.push(mat[row][col]);

            match direction {
                Direction::Up => {
                    if row == 0 || col == col_len - 1 {
                        // if we are at the top row or the rightmost column, change direction to "Down"
                        direction = Direction::Down;

                        if col == col_len - 1 {
                            // if at the rightmost column, move to the next row
                            row += 1;
                        } else {
                            // otherwise, move to the next column
                            col += 1;
                        }
                    } else {
                        // move diagonally upward
                        row -= 1;
                        col += 1;
                    }
                }
                Direction::Down => {
                    if col == 0 || row == row_len - 1 {
                        // if we are at the leftmost column or the bottom row, change direction to "Up"
                        direction = Direction::Up;

                        if row == row_len - 1 {
                            // if at the bottom row, move to the next column
                            col += 1;
                        } else {
                            // otherwise, move to the next row
                            row += 1;
                        }
                    } else {
                        // move diagonally downward
                        row += 1;
                        col -= 1;
                    }
                }
            }
        }

        result
    }
}
