import definitions.TreeNode;

public class MaximumDepthOfBinaryTree {

    public static int maxDepth(TreeNode root) {
        if (root == null)
            return 0;
        int depth = Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
        return depth;
    }
}
