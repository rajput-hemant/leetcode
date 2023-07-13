# 111. Minimum Depth of Binary Tree [![share]](https://leetcode.com/problems/minimum-depth-of-binary-tree/)

![][easy]

## Problem Statement:

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

**Note**: A leaf is a node with no children.

### Example 1:

![](https://assets.leetcode.com/uploads/2020/10/12/ex_depth.jpg)

```
Input: root = [3,9,20,null,null,15,7]
Output: 2
```

### Example 2:

```
Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
```

### Constraints:

- The number of nodes in the tree is in the range [0, 10<sup>5</sup>].
- -1000 <= Node.val <= 1000

## Solution:

::: code-group

```rs [Rust]
impl Solution {
    pub fn min_depth(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        match root {
            Some(node) => {
                let left = Self::min_depth(node.borrow().left.clone());
                let right = Self::min_depth(node.borrow().right.clone());

                if left == 0 || right == 0 {
                    left.max(right) + 1
                } else {
                    left.min(right) + 1
                }
            }

            None => 0,
        }
    }
}

```

```java [Java]
import definitions.TreeNode;

public class MinDepthOfBinaryTree {
    // Approach 1
    public static int minDepth(TreeNode root) {
        if (root == null)
            return 0;
        if (root.left == null && root.right == null)
            return 1;
        if (root.left == null)
            return minDepth(root.right) + 1;
        if (root.right == null)
            return minDepth(root.left) + 1;
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    }

    // Approach 2
    int min = Integer.MAX_VALUE;

    public int minDepth2(TreeNode root) {
        if (root == null)
            return 0;
        minDepth2(root, 0);
        return min;
    }

    public void minDepth2(TreeNode root, int level) {
        if (root == null)
            return;
        level++;
        if (root.left == null && root.right == null)
            min = Math.min(min, level);
        minDepth2(root.left, level);
        minDepth2(root.right, level);
    }
}

```

:::

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-green.svg
