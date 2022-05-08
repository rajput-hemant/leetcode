package stack;

import java.util.Stack;

// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

public class RemoveAllAdjacentDuplicatesInString {
    public static String removeDuplicates(String s) {
        Stack<Character> stk = new Stack<>();
        for (char ch : s.toCharArray()) {
            if (!stk.isEmpty() && ch == stk.peek())
                stk.pop();
            else
                stk.push(ch);
        }
        StringBuilder sb = new StringBuilder();
        for (char ch : stk)
            sb.append(ch);
        return sb.toString();
    }

    public static void main(String[] args) {
        System.out.println(removeDuplicates("azxxzy"));
        System.out.println(removeDuplicates("abbaca"));
    }
}
