class Solution {
  public int minDeletionSize(String[] strs) {
    if (strs == null || strs.length == 0)
      return 0;

    int count = 0;

    for (int i = 0; i < strs[0].length(); i++) {
      char ch = strs[0].charAt(i);
      for (int j = 0; j < strs.length; j++) {
        char curr = strs[j].charAt(i);
        if (curr < ch) {
          count++;
          break;
        }
        ch = curr;
      }
    }

    return count;
  }
}