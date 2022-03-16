package tree.binarytree;

// https://leetcode.com/problems/maximum-depth-of-binary-tree/
public class MaximumDepthOfBinaryTree {

    public static int maxDepth(TreeNode root) {
        if (root == null)
            return 0;
        int depth = Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
        return depth;
    }
}
