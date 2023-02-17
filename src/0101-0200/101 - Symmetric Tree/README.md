# 101. Symmetric Tree [![share]](https://leetcode.com/problems/symmetric-tree/)

![][easy]

## Problem Statement

<p>Given the <code>root</code> of a binary tree, <em>check whether it is a mirror of itself</em> (i.e., symmetric around its center).</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg" style="width: 354px; height: 291px;"/>

```
Input: root = [1,2,2,3,4,4,3]
Output: true
```

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/symtree2.jpg" style="width: 308px; height: 258px;"/>

```
Input: root = [1,2,2,null,3,null,3]
Output: false
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the tree is in the range <code>[1, 1000]</code>.</li>
<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
</ul>
<p> </p>
<strong>Follow up:</strong> Could you solve it both recursively and iteratively?

## Solutions

### [_Go_](symmetric_tree.go)

```go [Go]
package main

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isSymmetric(root *TreeNode) bool {
	return isMirror(root, root)
}

func isMirror(t1, t2 *TreeNode) bool {
	if t1 == nil && t2 == nil {
		return true
	}

	if t1 == nil || t2 == nil {
		return false
	}

	return (t1.Val == t2.Val) && isMirror(t1.Left, t2.Right) && isMirror(t1.Right, t2.Left)
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
