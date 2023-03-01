# 652. Find Duplicate Subtrees [![share]](https://leetcode.com/problems/find-duplicate-subtrees/)

![][medium]

## Problem Statement

<p>Given the <code>root</code> of a binary tree, return all <strong>duplicate subtrees</strong>.</p>
<p>For each kind of duplicate subtrees, you only need to return the root node of any <b>one</b> of them.</p>
<p>Two trees are <strong>duplicate</strong> if they have the <strong>same structure</strong> with the <strong>same node values</strong>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/16/e1.jpg" style="width: 450px; height: 354px;"/>

```
Input: root = [1,2,3,4,null,2,4,null,null,4]
Output: [[2,4],[4]]
```

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/16/e2.jpg" style="width: 321px; height: 201px;"/>

```
Input: root = [2,1,1]
Output: [[1]]
```

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/16/e33.jpg" style="width: 450px; height: 303px;"/>

```
Input: root = [2,2,2,3,null,3,null]
Output: [[2,3],[3]]
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of the nodes in the tree will be in the range <code>[1, 5000]</code></li>
<li><code>-200 &lt;= Node.val &lt;= 200</code></li>
</ul>

## Solutions

### [_Go_](find_duplicate_subtrees.go)

```go [Go]
package main

import "strconv"

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func findDuplicateSubtrees(root *TreeNode) []*TreeNode {
	// to store the hash value of subtrees
	hashMap := make(map[string]int)
	// to store the result
	res := make([]*TreeNode, 0)
	// traverse the tree
	traverse(root, hashMap, &res)
	return res
}

// traverse the tree
func traverse(root *TreeNode, hashMap map[string]int, res *[]*TreeNode) string {
	// if the root is nil, return "#"
	if root == nil {
		return "#"
	}
	// traverse the left and right subtree
	left := traverse(root.Left, hashMap, res)
	right := traverse(root.Right, hashMap, res)
	// get the hash value of the subtree
	subTree := left + "," + right + "," + strconv.Itoa(root.Val)
	// if the hash value of the subtree is 1, it means that the subtree is duplicated
	if hashMap[subTree] == 1 {
		*res = append(*res, root)
	}
	// add the hash value of the subtree to the hashMap
	hashMap[subTree]++
	return subTree
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
