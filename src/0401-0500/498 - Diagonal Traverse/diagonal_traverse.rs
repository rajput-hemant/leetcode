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
            result.push(mat[row][col]);

            match direction {
                Direction::Up => {
                    // if we are at the top right corner, we need to go down
                    // else we need to go right
                    if row == 0 || col == col_len - 1 {
                        direction = Direction::Down;

                        // if we are at the top right corner, we need to go down
                        // else we need to go right
                        if col == col_len - 1 {
                            row += 1;
                        } else {
                            col += 1;
                        }
                    } else {
                        row -= 1;
                        col += 1;
                    }
                }
                Direction::Down => {
                    // if we are at the bottom left corner, we need to go up
                    // else we need to go down
                    if col == 0 || row == row_len - 1 {
                        direction = Direction::Up;

                        // if we are at the bottom left corner, we need to go right
                        // else we need to go down
                        if row == row_len - 1 {
                            col += 1;
                        } else {
                            row += 1;
                        }
                    } else {
                        row += 1;
                        col -= 1;
                    }
                }
            }
        }

        result
    }
}
