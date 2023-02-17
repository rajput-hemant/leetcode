# 200. Number of Islands [![share]](https://leetcode.com/problems/number-of-islands/)

![][medium]

## Problem Statement

<p>Given an <code>m x n</code> 2D binary grid <code>grid</code> which represents a map of <code>'1'</code>s (land) and <code>'0'</code>s (water), return <em>the number of islands</em>.</p>
<p>An <strong>island</strong> is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
```

<p><strong class="example">Example 2:</strong></p>

```
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>m == grid.length</code></li>
<li><code>n == grid[i].length</code></li>
<li><code>1 &lt;= m, n &lt;= 300</code></li>
<li><code>grid[i][j]</code> is <code>'0'</code> or <code>'1'</code>.</li>
</ul>

## Solutions

### [_Go_](number_of_islands.go)

```go [Go]
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

```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://graph.org/file/3ea5234dda646b71c574a.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
