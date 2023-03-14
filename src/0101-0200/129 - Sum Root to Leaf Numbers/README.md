# 129. Sum Root to Leaf Numbers [![share]](https://leetcode.com/problems/sum-root-to-leaf-numbers/)

![][medium]

## Problem Statement

<p>You are given the <code>root</code> of a binary tree containing digits from <code>0</code> to <code>9</code> only.</p>
<p>Each root-to-leaf path in the tree represents a number.</p>
<ul>
<li>For example, the root-to-leaf path <code>1 -&gt; 2 -&gt; 3</code> represents the number <code>123</code>.</li>
</ul>
<p>Return <em>the total sum of all root-to-leaf numbers</em>. Test cases are generated so that the answer will fit in a <strong>32-bit</strong> integer.</p>
<p>A <strong>leaf</strong> node is a node with no children.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/num1tree.jpg" style="width: 212px; height: 182px;"/>

```
Input: root = [1,2,3]
Output: 25
Explanation:
The root-to-leaf path 1-&gt;2 represents the number 12.
The root-to-leaf path 1-&gt;3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
```

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/num2tree.jpg" style="width: 292px; height: 302px;"/>

```
Input: root = [4,9,0,5,1]
Output: 1026
Explanation:
The root-to-leaf path 4-&gt;9-&gt;5 represents the number 495.
The root-to-leaf path 4-&gt;9-&gt;1 represents the number 491.
The root-to-leaf path 4-&gt;0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the tree is in the range <code>[1, 1000]</code>.</li>
<li><code>0 &lt;= Node.val &lt;= 9</code></li>
<li>The depth of the tree will not exceed <code>10</code>.</li>
</ul>

## Solutions

### [_Go_](sum_root_to_leaf_numbers.go)

```go [Go]
package main

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func sumNumbers(root *TreeNode) int {
	return dfs(root, 0)
}

func dfs(root *TreeNode, num int) int {
	if root == nil {
		return 0
	}

	num = num*10 + root.Val
	if root.Left == nil && root.Right == nil {
		return num
	}

	return dfs(root.Left, num) + dfs(root.Right, num)
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
