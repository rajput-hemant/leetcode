package main

import "math"

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func getMinimumDifference(root *TreeNode) int {
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
