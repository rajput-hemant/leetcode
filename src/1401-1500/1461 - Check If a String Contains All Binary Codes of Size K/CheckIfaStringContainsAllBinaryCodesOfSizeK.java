import java.util.HashSet;
import java.util.Set;

public class CheckIfaStringContainsAllBinaryCodesOfSizeK {
    public static boolean hasAllCodes(String s, int k) {
        int count = 1 << k; // this is same as 2^K
        Set<String> res = new HashSet<>();
        for (int i = k; i <= s.length(); i++) {
            String temp = s.substring(i - k, i);
            if (!res.contains(temp)) {
                res.add(temp);
                count--;
            }
            if (count == 0)
                return true;
        }
        return false;
    }

    public static void main(String[] args) {
        System.out.println(hasAllCodes("00110", 2));
    }
}
