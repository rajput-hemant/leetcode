# 463. Island Perimeter [![share]](https://leetcode.com/problems/island-perimeter/)

![][easy]

## Problem Statement

<p>You are given <code>row x col</code> <code>grid</code> representing a map where <code>grid[i][j] = 1</code> represents land and <code>grid[i][j] = 0</code> represents water.</p>
<p>Grid cells are connected <strong>horizontally/vertically</strong> (not diagonally). The <code>grid</code> is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).</p>
<p>The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>
<img src="https://assets.leetcode.com/uploads/2018/10/12/island.png" style="width: 221px; height: 213px;"/>

```
Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: grid = [[1]]
Output: 4
```

<p><strong class="example">Example 3:</strong></p>

```
Input: grid = [[1,0]]
Output: 4
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>row == grid.length</code></li>
<li><code>col == grid[i].length</code></li>
<li><code>1 &lt;= row, col &lt;= 100</code></li>
<li><code>grid[i][j]</code> is <code>0</code> or <code>1</code>.</li>
<li>There is exactly one island in <code>grid</code>.</li>
</ul>

## Solution:

::: code-group

```rs [Rust]
impl Solution {
    pub fn island_ erimeter(grid: Vec<Vec<i32>>) -> i32 {
        let mut perimeter = 0;

        for i in 0..grid.len() {
            for j in 0..grid[i].len() {
                if grid[i][j] == 1 {
                    perimeter += 4;

                    if i != 0 && grid[i - 1][j] == 1 {
                        perimeter -= 2;
                    }
                    if j != 0 && grid[i][j - 1] == 1 {
                        perimeter -= 2;
                    }
                }
            }
        }

        perimeter
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
