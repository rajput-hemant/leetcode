# 543. Diameter of Binary Tree [![share]](https://leetcode.com/problems/diameter-of-binary-tree/)

![][easy]

## Problem Statement:

Given the `root` of a binary tree, return the length of the **diameter** of the tree.

The diameter of a binary tree is the **length** of the longest path between any two nodes in a tree. This path may or may not pass through the `root`.

The **length** of a path between two nodes is represented by the number of edges between them.

### Example 1:

```
Input: root = [1,2,3,4,5]
Output: 3
```

**Explanation:** 3 is the length of the path [4,2,1,3] or [5,2,1,3].

### Example 2:

```
Input: root = [1,2]
Output: 1
```

### Constraints:

- The number of nodes in the tree is in the range [1, 10<sup>4</sup>].
- -100 <= Node.val <= 100

## Solutions:

### [_Java_](#)

```java
public class DiameterOfBinaryTree {
    // Approach 1
    public static int diameterOfBinaryTree(TreeNode root) {
        if (root == null)
            return 0;
        int dia1 = diameterOfBinaryTree(root.left);
        int dia2 = diameterOfBinaryTree(root.right);
        int dia3 = MaximumDepthOfBinaryTree.maxDepth(root.left) + MaximumDepthOfBinaryTree.maxDepth(root.right) + 1;
        return Math.max(Math.max(dia1, dia2), dia3);
    }

    // Approach 2
    int diameter = 0;

    public int diameterOfBinaryTree2(TreeNode root) {
        getDiameter(root);
        return diameter - 1;
    }

    private int getDiameter(TreeNode root) {
        if (root == null)
            return 0;
        int leftHeight = getDiameter(root.left);
        int rightHeight = getDiameter(root.right);
        diameter = Math.max(diameter, leftHeight + rightHeight + 1);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

class MaximumDepthOfBinaryTree {

    public static int maxDepth(TreeNode root) {
        if (root == null)
            return 0;
        int depth = Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
        return depth;
    }
}
```

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-green.svg
