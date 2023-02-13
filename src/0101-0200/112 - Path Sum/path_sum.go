package main

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func hasPathSum(root *TreeNode, targetSum int) bool {
	return dfs(root, targetSum, 0)
}

func dfs(node *TreeNode, targetSum int, sum int) bool {
	if node == nil {
		return false
	}

	sum += node.Val

	if node.Left == nil && node.Right == nil {
		return sum == targetSum
	}

	return dfs(node.Left, targetSum, sum) || dfs(node.Right, targetSum, sum)
}
