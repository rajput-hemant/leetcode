
from out.definitions.treenode import TreeNode


class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        return self._is_mirror(root, root)

    def _is_mirror(self, t1: TreeNode, t2: TreeNode) -> bool:
        if not t1 and not t2:
            return True
        if not t1 or not t2:
            return False

        return ((t1.val == t2.val) and
                self._is_mirror(t1.right, t2.left) and
                self._is_mirror(t1.left, t2.right))
