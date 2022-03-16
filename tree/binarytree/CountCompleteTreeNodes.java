package tree.binarytree;

// https://leetcode.com/problems/count-complete-tree-nodes/

public class CountCompleteTreeNodes {

    public int countNodes(TreeNode root) {
        if (root == null)
            return 0;
        return countNodes(root.left) + countNodes(root.right) + 1;
    }
}
