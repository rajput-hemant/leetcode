# 695. Max Area of Island [![share]](https://leetcode.com/problems/max-area-of-island/)

![][medium]

## Problem Statement

<p>You are given an <code>m x n</code> binary matrix <code>grid</code>. An island is a group of <code>1</code>'s (representing land) connected <strong>4-directionally</strong> (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.</p>
<p>The <strong>area</strong> of an island is the number of cells with a value <code>1</code> in the island.</p>
<p>Return <em>the maximum <strong>area</strong> of an island in </em><code>grid</code>. If there is no island, return <code>0</code>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/05/01/maxarea1-grid.jpg" style="width: 500px; height: 310px;"/>

```
Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>m == grid.length</code></li>
<li><code>n == grid[i].length</code></li>
<li><code>1 &lt;= m, n &lt;= 50</code></li>
<li><code>grid[i][j]</code> is either <code>0</code> or <code>1</code>.</li>
</ul>

## Solution:

::: code-group

```rs [Rust]
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

```

:::

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://graph.org/file/3ea5234dda646b71c574a.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
