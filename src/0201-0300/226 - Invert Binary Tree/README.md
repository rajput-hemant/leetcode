# 226. Invert Binary Tree [![share]](https://leetcode.com/problems/invert-binary-tree/)

![][easy]

## Problem Statement

<p>Given the <code>root</code> of a binary tree, invert the tree, and return <em>its root</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg" style="width: 500px; height: 165px;"/>

```
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
```

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg" style="width: 500px; height: 120px;"/>

```
Input: root = [2,1,3]
Output: [2,3,1]
```

<p><strong class="example">Example 3:</strong></p>

```
Input: root = []
Output: []
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the tree is in the range <code>[0, 100]</code>.</li>
<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
</ul>

## Solutions

### [_Go_](invert_binary_tree.go)

```go [Go]
package main

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func invertTree(root *TreeNode) *TreeNode {
	if root == nil {
		return nil
	}

	invertTree(root.Left)
	invertTree(root.Right)

	root.Left, root.Right = root.Right, root.Left

	return root
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
