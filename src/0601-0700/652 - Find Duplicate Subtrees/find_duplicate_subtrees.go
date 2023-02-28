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
