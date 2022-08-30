import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

import definitions.TreeNode;

public class BinaryTreePreorderTraversal {

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
}
