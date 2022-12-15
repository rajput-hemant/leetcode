# 222. Count Complete Tree Nodes [![share]](https://leetcode.com/problems/count-complete-tree-nodes/)

![][medium]

## Problem Statement:

Given the `root` of a **complete** binary tree, return the number of the nodes in the tree.

According to [Wikipedia][wikipedia], every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between `1` and <code>2<sup>h</sup></code> nodes inclusive at the last level `h`.

Design an algorithm that runs in less than `O(n)` time complexity.

### Example 1:

```
Input: root = [1,2,3,4,5,6]
Output: 6
```

### Example 2:

```
Input: root = []
Output: 0
```

### Example 3:

```
Input: root = [1]
Output: 1
```

### Constraints:

- The number of nodes in the tree is in the range [0, 5 * 10<sup>4</sup>].
- 0 <= Node.val <= 5 \* 10<sup>4</sup>]
- The tree is guaranteed to be **complete**.

## Solutions:

### [_Java_](#)

```java
// Approach 1
// Time Complexity -> O(n)
public int countNodes(TreeNode root) {
    if (root == null)
        return 0;
    return countNodes(root.left) + countNodes(root.right) + 1;
}
```

```java
// Approach 2
// Time Complexity -> O(logn * logn)
public int countNodes2(TreeNode root) {
    int leftHeight = 0, rightHeight = 0;
    TreeNode currentNode = root;
    while (currentNode != null) {
        leftHeight++;
        currentNode = currentNode.left;
    }
    currentNode = root;
    while (currentNode != null) {
        rightHeight++;
        currentNode = currentNode.right;
    }
    if (leftHeight == rightHeight)
        return (int) Math.pow(2, leftHeight) - 1;
    return countNodes2(root.left) + countNodes2(root.right) + 1;
}
```

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[wikipedia]: https://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees
