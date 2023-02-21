# 257. Binary Tree Paths [![share]](https://leetcode.com/problems/binary-tree-paths/)

![][easy]

## Problem Statement

<p>Given the <code>root</code> of a binary tree, return <em>all root-to-leaf paths in <strong>any order</strong></em>.</p>
<p>A <strong>leaf</strong> is a node with no children.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/12/paths-tree.jpg" style="width: 207px; height: 293px;"/>

```
Input: root = [1,2,3,null,5]
Output: ["1-&gt;2-&gt;5","1-&gt;3"]
```

<p><strong class="example">Example 2:</strong></p>

```
Input: root = [1]
Output: ["1"]
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the tree is in the range <code>[1, 100]</code>.</li>
<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
</ul>

## Solutions

### [_Go_](binary_tree_paths.go)

```go [Go]
package main

import "fmt"

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func binaryTreePaths(root *TreeNode) []string {
	if root == nil {
		return nil
	}

	paths := make([]string, 0)

	// if root is leaf node
	if root.Left == nil && root.Right == nil {
		paths = append(paths, fmt.Sprint(root.Val))
		return paths
	}

	// traverse left subtree and append root value
	for _, path := range binaryTreePaths(root.Left) {
		paths = append(paths, fmt.Sprint(root.Val, "->", path))
	}

	// traverse right subtree and append root value
	for _, path := range binaryTreePaths(root.Right) {
		paths = append(paths, fmt.Sprint(root.Val, "->", path))
	}

	return paths
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
