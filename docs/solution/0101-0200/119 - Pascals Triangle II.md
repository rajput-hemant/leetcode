# 119. Pascals Triangle II [![share]](https://leetcode.com/problems/pascals-triangle-ii/)

![][easy]

## Problem Statement

<p>Given an integer <code>rowIndex</code>, return the <code>rowIndex<sup>th</sup></code> (<strong>0-indexed</strong>) row of the <strong>Pascal's triangle</strong>.</p>
<p>In <strong>Pascal's triangle</strong>, each number is the sum of the two numbers directly above it as shown:</p>
<img alt="" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif" style="height:240px; width:260px"/>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: rowIndex = 3
Output: [1,3,3,1]
```

<p><strong class="example">Example 2:</strong></p>

```
Input: rowIndex = 0
Output: [1]
```

<p><strong class="example">Example 3:</strong></p>

```
Input: rowIndex = 1
Output: [1,1]
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt;= rowIndex &lt;= 33</code></li>
</ul>
<p> </p>
<p><strong>Follow up:</strong> Could you optimize your algorithm to use only <code>O(rowIndex)</code> extra space?</p>

## Solution:

::: code-group

```rs [Rust]
impl Solution {
    pub fn get_row(row_index: i32) -> Vec<i32> {
        // create a vector of 1s with length row_index + 1
        let mut row = vec![1; (row_index + 1) as usize];

        // loop through the vector, starting at 1
        for i in 1..row_index {
            // loop through the vector, starting at i + 1 and going backwards
            for j in (1..i + 1).rev() {
                // add the value at the current index to the value at the previous index
                row[j as usize] += row[(j - 1) as usize];
            }
        }

        row
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
