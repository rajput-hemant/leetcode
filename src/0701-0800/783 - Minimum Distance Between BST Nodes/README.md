# 783. Minimum Distance Between BST Nodes [![share]](https://leetcode.com/problems/minimum-distance-between-bst-nodes/)

![][easy]

## Problem Statement

<p>Given the <code>root</code> of a Binary Search Tree (BST), return <em>the minimum difference between the values of any two different nodes in the tree</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/05/bst1.jpg" style="width: 292px; height: 301px;"/>

```
Input: root = [4,2,6,1,3]
Output: 1
```

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/05/bst2.jpg" style="width: 282px; height: 301px;"/>

```
Input: root = [1,0,48,null,null,12,49]
Output: 1
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the tree is in the range <code>[2, 100]</code>.</li>
<li><code>0 &lt;= Node.val &lt;= 10<sup>5</sup></code></li>
</ul>
<p> </p>
<p><strong>Note:</strong> This question is the same as 530: <a href="https://leetcode.com/problems/minimum-absolute-difference-in-bst/" target="_blank">https://leetcode.com/problems/minimum-absolute-difference-in-bst/</a></p>

## Solutions

### [_Go_](min_distance_btw_bst_nodes.go)

```go [Go]
package main

import "math"

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func minDiffInBST(root *TreeNode) int {
	var (
		minDiff = math.MaxInt
		prev    = -1
	)

	var dfs func(*TreeNode)
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}

		dfs(node.Left)

		if prev != -1 {
			minDiff = int(math.Min(float64(minDiff), float64(node.Val-prev)))
		}
		prev = node.Val

		dfs(node.Right)
	}

	dfs(root)

	return minDiff
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
