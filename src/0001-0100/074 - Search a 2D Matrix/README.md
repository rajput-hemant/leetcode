# 74. Search a 2D Matrix [![share]](https://leetcode.com/problems/search-a-2d-matrix/)

![][medium]

## Problem Statement

<p>You are given an <code>m x n</code> integer matrix <code>matrix</code> with the following two properties:</p>
<ul>
<li>Each row is sorted in non-decreasing order.</li>
<li>The first integer of each row is greater than the last integer of the previous row.</li>
</ul>
<p>Given an integer <code>target</code>, return <code>true</code> <em>if</em> <code>target</code> <em>is in</em> <code>matrix</code> <em>or</em> <code>false</code> <em>otherwise</em>.</p>
<p>You must write a solution in <code>O(log(m * n))</code> time complexity.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/05/mat.jpg" style="width: 322px; height: 242px;"/>

```
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
```

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/05/mat2.jpg" style="width: 322px; height: 242px;"/>

```
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>m == matrix.length</code></li>
<li><code>n == matrix[i].length</code></li>
<li><code>1 &lt;= m, n &lt;= 100</code></li>
<li><code>-10<sup>4</sup> &lt;= matrix[i][j], target &lt;= 10<sup>4</sup></code></li>
</ul>

## Solutions

### [_Rust_](search_a_2d_matrix.rs)

```rs [Rust]
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

```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://graph.org/file/3ea5234dda646b71c574a.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
