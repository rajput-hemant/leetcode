package main

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func sortedArrayToBST(nums []int) *TreeNode {
	if len(nums) == 0 {
		return nil
	}

	return contructBST(nums, 0, len(nums)-1)
}

func contructBST(nums []int, left, right int) *TreeNode {
	if left > right {
		return nil
	}

	mid := (left + right) / 2
	node := &TreeNode{Val: nums[mid]}
	node.Left = contructBST(nums, left, mid-1)
	node.Right = contructBST(nums, mid+1, right)
	return node
}
