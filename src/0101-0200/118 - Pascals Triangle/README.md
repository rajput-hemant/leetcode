# 118. Pascals Triangle [![share]](https://leetcode.com/problems/pascals-triangle/)

![][easy]

## Problem Statement

<p>Given an integer <code>numRows</code>, return the first numRows of <strong>Pascal's triangle</strong>.</p>
<p>In <strong>Pascal's triangle</strong>, each number is the sum of the two numbers directly above it as shown:</p>
<img alt="" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif" style="height:240px; width:260px"/>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
```

<p><strong class="example">Example 2:</strong></p>

```
Input: numRows = 1
Output: [[1]]
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= numRows &lt;= 30</code></li>
</ul>

## Solutions

### [_Go_](pascals_triangle.go)

```go [Go]
package main

func generate(numRows int) [][]int {
	pascal := make([][]int, numRows)
	for i := 0; i < numRows; i++ {
		row := make([]int, i+1)
		row[0] = 1
		row[i] = 1
		for j := 1; j < i; j++ {
			row[j] = pascal[i-1][j-1] + pascal[i-1][j]
		}
		pascal[i] = row
	}

	return pascal
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
