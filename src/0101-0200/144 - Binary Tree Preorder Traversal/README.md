# 144. Binary Tree Preorder Traversal [![share]](https://leetcode.com/problems/binary-tree-preorder-traversal/submissions)

![][easy]

## Problem Statement:

Given the `root` of a binary tree, return the preorder traversal of its nodes' values.

![](https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg)

### Example 1:

```
Input: root = [1,null,2,3]
Output: [1,2,3]
```

### Example 2:

```
Input: root = []
Output: []
```

### Example 3:

```
Input: root = [1]
Output: [1]
```

### Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

Follow up: Recursive solution is trivial, could you do it iteratively?

## Solution:

### [_Java_]()

```java
List<Integer> list = new ArrayList<Integer>();

// Iterative Approach
public List<Integer> preorderTraversal(TreeNode root) {
  if (root == null)
    return list;
  Stack<TreeNode> stack = new Stack<>();
  stack.push(root);
  while (!stack.isEmpty()) {
    TreeNode current = stack.pop();
    list.add(current.val);
    if (current.right != null)
      stack.push(current.right);
    if (current.left != null)
      stack.push(current.left);
  }
  return list;
}

// Recursive Approach
public List<Integer> preorderTraversalRecursive(TreeNode root) {
  if (root != null) {
    list.add(root.val);
    preorderTraversalRecursive(root.left);
    preorderTraversalRecursive(root.right);
  }
  return list;
}
```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
