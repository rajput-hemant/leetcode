# 404. Sum of Left Leaves [![share]](https://leetcode.com/problems/sum-of-left-leaves/)

![][easy]

## Problem Statement

<p>Given the <code>root</code> of a binary tree, return <em>the sum of all left leaves.</em></p>
<p>A <strong>leaf</strong> is a node with no children. A <strong>left leaf</strong> is a leaf that is the left child of another node.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/08/leftsum-tree.jpg" style="width: 277px; height: 302px;"/>

```
Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: root = [1]
Output: 0
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the tree is in the range <code>[1, 1000]</code>.</li>
<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>
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

// Recursion
func sumOfLeftLeaves(root *TreeNode) int {
	if root == nil {
		return 0
	}

	// if root.Left is a leaf node
	if root.Left != nil && root.Left.Left == nil && root.Left.Right == nil {
		return root.Left.Val + sumOfLeftLeaves(root.Right)
	}

	return sumOfLeftLeaves(root.Left) + sumOfLeftLeaves(root.Right)
}

// Iteration
func sumOfLeftLeaves2(root *TreeNode) int {
	if root == nil {
		return 0
	}

	sum := 0
	stack := []*TreeNode{root}

	for len(stack) > 0 {
		// pop
		node := stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		if node.Left != nil {
			// if node.Left is a leaf node
			if node.Left.Left == nil && node.Left.Right == nil {
				sum += node.Left.Val
			} else {
				stack = append(stack, node.Left)
			}
		}

		if node.Right != nil {
			stack = append(stack, node.Right)
		}
	}

	return sum
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
