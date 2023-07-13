# 498. Diagonal Traverse [![share]](https://leetcode.com/problems/diagonal-traverse/)

![][medium]

## Problem Statement

<p>Given an <code>m x n</code> matrix <code>mat</code>, return <em>an array of all the elements of the array in a diagonal order</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/10/diag1-grid.jpg" style="width: 334px; height: 334px;"/>

```
Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]
```

<p><strong class="example">Example 2:</strong></p>

```
Input: mat = [[1,2],[3,4]]
Output: [1,2,3,4]
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>m == mat.length</code></li>
<li><code>n == mat[i].length</code></li>
<li><code>1 &lt;= m, n &lt;= 10<sup>4</sup></code></li>
<li><code>1 &lt;= m * n &lt;= 10<sup>4</sup></code></li>
<li><code>-10<sup>5</sup> &lt;= mat[i][j] &lt;= 10<sup>5</sup></code></li>
</ul>

## Solutions

### [_Go_](diagonal_traverse.go)

```go [Go]
package main

type Direction int

const (
	Up Direction = iota
	Down
)

func findDiagonalOrder(mat [][]int) []int {
	direction := Up
	row, col := 0, 0
	row_len, col_len := len(mat), len(mat[0])
	res := make([]int, row_len*col_len)

	for i := 0; i < row_len*col_len; i++ {
		res[i] = mat[row][col]

		if direction == Up {
			if row == 0 || col == col_len-1 {
				direction = Down

				if col == col_len-1 {
					row++
				} else {
					col++
				}

			} else {
				row--
				col++
			}
		} else {
			if col == 0 || row == row_len-1 {
				direction = Up

				if row == row_len-1 {
					col++
				} else {
					row++
				}

			} else {
				row++
				col--
			}
		}
	}

	return res
}

```

### [_Rust_](diagonal_traverse.rs)

```rs [Rust]
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

```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://graph.org/file/3ea5234dda646b71c574a.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
