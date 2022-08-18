public class ReverseString {
  public void reverseString(char[] s) {
    for (int left = 0, right = s.length - 1; left < right; left++, right--)
      swap(s, left, right);
  }

  private void swap(char[] s, int a, int b) {
    char temp = s[a];
    s[a] = s[b];
    s[b] = temp;
  }
}
