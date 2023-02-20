# 103. Binary Tree Zigzag Level Order Traversal [![share]](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)

![][medium]

## Problem Statement:

Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

### Example 1:

![](https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg)

```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
```

### Example 2:

```
Input: root = [1]
Output: [[1]]
```

### Example 3:

```
Input: root = []
Output: []
```

### Constraints:

- The number of nodes in the tree is in the range [0, 2000].
- -100 <= Node.val <= 100

## Solution:

::: code-group

```java [Java]
import java.util.LinkedList;
import java.util.List;
import java.util.Stack;
import definitions.TreeNode;

public class BinaryTreeZigzagLevelOrderTraversal {
    public static List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> result = new LinkedList<>();
        if (root == null)
            return result;
        Stack<TreeNode> stk1 = new Stack<>(), stk2 = new Stack<>();
        stk1.push(root);
        while (!stk1.isEmpty() || !stk2.isEmpty()) {
            List<Integer> list1 = new LinkedList<>();
            while (!stk1.isEmpty()) {
                TreeNode currentNode = stk1.pop();
                list1.add(currentNode.val);
                if (currentNode.left != null)
                    stk2.push(currentNode.left);
                if (currentNode.right != null)
                    stk2.push(currentNode.right);
            }
            if (!list1.isEmpty())
                result.add(list1);
            List<Integer> list2 = new LinkedList<>();
            while (!stk2.isEmpty()) {
                TreeNode currentNode = stk2.pop();
                list2.add(currentNode.val);
                if (currentNode.right != null)
                    stk1.push(currentNode.right);
                if (currentNode.left != null)
                    stk1.push(currentNode.left);
            }
            if (!list2.isEmpty())
                result.add(list2);
        }
        return result;
    }
}

```

```go [Go]
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

```

:::

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
