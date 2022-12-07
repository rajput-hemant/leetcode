public class ReverseStringII {
  public String reverseStr(String s, int k) {
    String res = "";
    int index = 0,
        flag = 0,
        len = s.length();
    while (index < len) {
      StringBuilder sb = new StringBuilder(s.substring(index, (index + k > len) ? len : index + k));
      res += (flag++ % 2 == 0) ? sb.reverse() : sb;
      index += k;
    }
    return res;
  }
}