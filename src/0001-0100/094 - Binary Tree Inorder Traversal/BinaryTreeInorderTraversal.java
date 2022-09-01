import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

import definitions.TreeNode;

public class BinaryTreeInorderTraversal {
    private List<Integer> list = new ArrayList<>();

    // Iterative Approach
    public List<Integer> inorderTraversal(TreeNode root) {
        if (root == null)
            return list;
        Stack<TreeNode> stack = new Stack<>();
        TreeNode current = root;
        while (!stack.isEmpty() || current != null) {
            if (current != null) {
                stack.push(current);
                current = current.left;
            } else {
                current = stack.pop();
                list.add(current.val);
                current = current.right;
            }
        }
        return list;
    }

    // Recursive Approach
    public List<Integer> inorderTraversalRecursive(TreeNode root) {
        if (root == null)
            return list;
        inorderTraversalRecursive(root.left);
        list.add(root.val);
        inorderTraversalRecursive(root.right);
        return list;
    }
}
