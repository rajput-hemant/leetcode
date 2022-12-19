import java.util.Map;

public class RomanToInteger {
  public int romanToInt(String s) {
    Map<Character, Integer> map = Map.of(
        'I', 1,
        'V', 5,
        'X', 10,
        'L', 50,
        'C', 100,
        'D', 500,
        'M', 1000);
    int res = map.get(s.charAt(s.length() - 1));
    for (int i = s.length() - 2; i >= 0; i--) {
      if (map.get(s.charAt(i)) < map.get(s.charAt(i + 1)))
        res -= map.get(s.charAt(i));
      else
        res += map.get(s.charAt(i));
    }
    return res;
  }
}