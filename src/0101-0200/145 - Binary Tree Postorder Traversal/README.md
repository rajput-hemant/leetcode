# 145. Binary Tree Postorder Traversal [![share]](https://leetcode.com/problems/binary-tree-postorder-traversal)

![easy]

## Problem Statement:

Given the `root` of a binary tree, return the postorder traversal of its nodes' values.

### Example 1:

![](https://assets.leetcode.com/uploads/2020/08/28/pre1.jpg)

Input: root = [1,null,2,3]
Output: [3,2,1]

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

- The number of the nodes in the tree is in the range [0, 100].
- -100 <= Node.val <= 100

**Follow up:** Recursive solution is trivial, could you do it iteratively?

## Solution:

### [_Java_](./BinaryTreePostorderTraversal.java)

```java
private LinkedList<Integer> list = new LinkedList<>();

public List<Integer> postorderTraversal(TreeNode root) {
  if (root == null)
    return list;
  Stack<TreeNode> stack = new Stack<>();
  stack.push(root);
  while (!stack.isEmpty()) {
    TreeNode current = stack.pop();
    list.addFirst(current.val);
    if (current.left != null)
      stack.push(current.left);
    if (current.right != null)
      stack.push(current.right);
  }
  return list;
}

public List<Integer> postorderTraversalRecursive(TreeNode root) {
  if (root == null)
    return list;
  postorderTraversalRecursive(root.left);
  postorderTraversalRecursive(root.right);
  list.add(root.val);
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
