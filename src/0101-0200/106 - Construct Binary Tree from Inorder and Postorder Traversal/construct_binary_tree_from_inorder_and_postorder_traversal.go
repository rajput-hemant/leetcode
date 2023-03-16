package main

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func buildTree(inorder []int, postorder []int) *TreeNode {
	mapInOrder := make(map[int]int)

	for i, v := range inorder {
		mapInOrder[v] = i
	}

	var helper func(int, int) *TreeNode
	helper = func(left, right int) *TreeNode {
		if left > right {
			return nil
		}

		pop := postorder[len(postorder)-1]
		postorder = postorder[:len(postorder)-1]

		root := &TreeNode{Val: pop}
		mid := mapInOrder[pop]
		root.Right = helper(mid+1, right)
		root.Left = helper(left, mid-1)

		return root
	}

	return helper(0, len(inorder)-1)
}
