package main

func numIslands(grid [][]byte) int {
	result := 0

	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[i]); j++ {
			if grid[i][j] == '1' {
				dfs(grid, i, j)
				result++
			}
		}
	}

	return result
}

func dfs(grid [][]byte, row, col int) {
	// return if it is out of bound horizontally
	if row < 0 || row >= len(grid) {
		return
	}

	// return if it is out of bound vertically
	if col < 0 || col >= len(grid[row]) {
		return
	}

	// return if it is not an island
	if grid[row][col] == '0' {
		return
	}

	// mark the current cell as visited
	grid[row][col] = '0'

	dfs(grid, row-1, col)
	dfs(grid, row+1, col)

	dfs(grid, row, col-1)
	dfs(grid, row, col+1)
}
