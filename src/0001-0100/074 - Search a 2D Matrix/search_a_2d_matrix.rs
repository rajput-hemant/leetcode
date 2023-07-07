impl Solution {
    pub fn search_matrix(matrix: Vec<Vec<i32>>, target: i32) -> bool {
        let (mut rows, mut cols) = (0, matrix[0].len() - 1);

        while rows < matrix.len() && cols > 0 {
            if matrix[rows][cols] == target {
                return true;
            } else if matrix[rows][cols] > target {
                cols -= 1;
            } else {
                rows += 1;
            }
        }

        false
    }
}
