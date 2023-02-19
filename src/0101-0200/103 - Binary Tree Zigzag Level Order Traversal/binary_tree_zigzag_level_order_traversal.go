package main

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func zigzagLevelOrder(root *TreeNode) [][]int {
	if root == nil {
		return nil
	}

	var res [][]int
	var stk1 []*TreeNode
	var stk2 []*TreeNode

	stk1 = append(stk1, root)

	for len(stk1) > 0 || len(stk2) > 0 {
		var list1 []int
		for len(stk1) > 0 {
			// pop
			node := stk1[len(stk1)-1]
			stk1 = stk1[:len(stk1)-1]

			list1 = append(list1, node.Val)
			if node.Left != nil {
				stk2 = append(stk2, node.Left)
			}
			if node.Right != nil {
				stk2 = append(stk2, node.Right)
			}
		}

		if len(list1) > 0 {
			res = append(res, list1)
		}

		var list2 []int
		for len(stk2) > 0 {
			// pop
			node := stk2[len(stk2)-1]
			stk2 = stk2[:len(stk2)-1]

			list2 = append(list2, node.Val)
			if node.Right != nil {
				stk1 = append(stk1, node.Right)
			}
			if node.Left != nil {
				stk1 = append(stk1, node.Left)
			}
		}

		if len(list2) > 0 {
			res = append(res, list2)
		}
	}

	return res
}
