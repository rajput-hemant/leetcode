class Solution {
  public String makeFancyString(String s) {
    int n = s.length();

    if (n == 1 || n == 2)
      return s;

    StringBuilder sb = new StringBuilder(s.substring(0, 2));

    for (int i = 2; i < n; i++)
      if (s.charAt(i) != s.charAt(i - 1) || s.charAt(i) != s.charAt(i - 2))
        sb.append(s.charAt(i));

    return sb.toString();
  }
}