impl Solution {
    pub fn max_area_of_island(grid: Vec<Vec<i32>>) -> i32 {
        let mut grid = grid;
        let (rows, cols) = (grid.len(), grid[0].len());

        let mut max_area = 0;

        for row in 0..rows {
            for col in 0..cols {
                max_area = max_area.max(Self::dfs(&mut grid, row, col))
            }
        }

        max_area
    }

    fn dfs(grid: &mut Vec<Vec<i32>>, row: usize, col: usize) -> i32 {
        let (rows, cols) = (grid.len(), grid[0].len());
        if row >= rows || col >= cols || grid[row][col] == 0 {
            return 0;
        }

        grid[row][col] = 0;

        1 + Self::dfs(grid, row + 1, col)
            + Self::dfs(grid, row, col + 1)
            + Self::dfs(grid, row - 1, col)
            + Self::dfs(grid, row, col - 1)
    }
}
