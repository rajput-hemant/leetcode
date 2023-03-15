package main

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isCompleteTree(root *TreeNode) bool {
	if root == nil {
		return true
	}

	q := []*TreeNode{root}

	for q[0] != nil {
		q = append(q, q[0].Left, q[0].Right)
		q = q[1:]
	}

	for _, node := range q {
		if node != nil {
			return false
		}
	}

	return true
}
