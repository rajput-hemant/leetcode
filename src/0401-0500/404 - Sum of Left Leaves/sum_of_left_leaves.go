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
