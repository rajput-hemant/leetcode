import java.util.LinkedList;
import java.util.List;
import java.util.Stack;

import definitions.TreeNode;

public class BinaryTreePostorderTraversal {
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
}