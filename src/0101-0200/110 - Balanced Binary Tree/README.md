# 110. Balanced Binary Tree [![share]](https://leetcode.com/problems/balanced-binary-tree/)

![][easy]

## Problem Statement:

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

> a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

### Example 1:

```
Input: root = [3,9,20,null,null,15,7]
Output: true
```

### Example 2:

```
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
```

### Example 3:

```
Input: root = []
Output: true
```

### Constraints:

- The number of nodes in the tree is in the range [0, 5000].
- -10<sup>4</sup> <= Node.val <= 10<sup>4</sup>

## Solutions:

### [_Java_](./BalancedBinaryTree.java)

```java
public class BalancedBinaryTree {
    public boolean isBalancedTree(TreeNode root) {
        return !(isBalTree(root) == -1);
    }

    private int isBalTree(TreeNode root) {
        if (root == null)
            return 0;
        int leftHeight = isBalTree(root.left);
        if (leftHeight == -1)
            return -1;
        int rightHeight = isBalTree(root.right);
        if (rightHeight == -1)
            return -1;
        if (Math.abs(leftHeight - rightHeight) > 1)
            return -1;
        else
            return Math.max(leftHeight, rightHeight) + 1;
    }
}
```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-green.svg
