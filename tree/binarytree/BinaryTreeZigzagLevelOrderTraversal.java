package tree.binarytree;

// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

import java.util.LinkedList;
import java.util.List;
import java.util.Stack;

public class BinaryTreeZigzagLevelOrderTraversal {
    public static List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> result = new LinkedList<>();
        if (root == null)
            return result;
        Stack<TreeNode> stk1 = new Stack<>(), stk2 = new Stack<>();
        stk1.push(root);
        while (!stk1.isEmpty() || !stk2.isEmpty()) {
            List<Integer> list1 = new LinkedList<>();
            while (!stk1.isEmpty()) {
                TreeNode currentNode = stk1.pop();
                list1.add(currentNode.val);
                if (currentNode.left != null)
                    stk2.push(currentNode.left);
                if (currentNode.right != null)
                    stk2.push(currentNode.right);
            }
            if (!list1.isEmpty())
                result.add(list1);
            List<Integer> list2 = new LinkedList<>();
            while (!stk2.isEmpty()) {
                TreeNode currentNode = stk2.pop();
                list2.add(currentNode.val);
                if (currentNode.right != null)
                    stk1.push(currentNode.right);
                if (currentNode.left != null)
                    stk1.push(currentNode.left);
            }
            if (!list2.isEmpty())
                result.add(list2);
        }
        return result;
    }
}
