# 106. Construct Binary Tree from Inorder and Postorder Traversal [![share]](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

![][medium]

## Problem Statement

<p>Given two integer arrays <code>inorder</code> and <code>postorder</code> where <code>inorder</code> is the inorder traversal of a binary tree and <code>postorder</code> is the postorder traversal of the same tree, construct and return <em>the binary tree</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/tree.jpg" style="width: 277px; height: 302px;"/>

```
Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]
```

<p><strong class="example">Example 2:</strong></p>

```
Input: inorder = [-1], postorder = [-1]
Output: [-1]
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= inorder.length &lt;= 3000</code></li>
<li><code>postorder.length == inorder.length</code></li>
<li><code>-3000 &lt;= inorder[i], postorder[i] &lt;= 3000</code></li>
<li><code>inorder</code> and <code>postorder</code> consist of <strong>unique</strong> values.</li>
<li>Each value of <code>postorder</code> also appears in <code>inorder</code>.</li>
<li><code>inorder</code> is <strong>guaranteed</strong> to be the inorder traversal of the tree.</li>
<li><code>postorder</code> is <strong>guaranteed</strong> to be the postorder traversal of the tree.</li>
</ul>

## Solution:

::: code-group

```go [Go]
package main

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func buildTree(inorder []int, postorder []int) *TreeNode {
	mapInOrder := make(map[int]int)

	for i, v := range inorder {
		mapInOrder[v] = i
	}

	var helper func(int, int) *TreeNode
	helper = func(left, right int) *TreeNode {
		if left > right {
			return nil
		}

		pop := postorder[len(postorder)-1]
		postorder = postorder[:len(postorder)-1]

		root := &TreeNode{Val: pop}
		mid := mapInOrder[pop]
		root.Right = helper(mid+1, right)
		root.Left = helper(left, mid-1)

		return root
	}

	return helper(0, len(inorder)-1)
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
