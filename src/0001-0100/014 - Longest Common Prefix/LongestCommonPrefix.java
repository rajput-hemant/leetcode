class Solution {

  public String longestCommonPrefix(String[] strs) {
    String res = strs[0];

    for (int i = 1; i < strs.length; i++)
      while (!strs[i].startsWith(res))
        res = res.substring(0, res.length() - 1);

    return res;
  }
}