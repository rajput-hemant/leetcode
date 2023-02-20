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
