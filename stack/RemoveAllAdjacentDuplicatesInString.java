package stack;

import java.util.Stack;

// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

public class RemoveAllAdjacentDuplicatesInString {
    public static String removeDuplicates(String s) {
        Stack<Character> stk = new Stack<>();
        String res = "";
        for (char ch : s.toCharArray()) {
            if (stk.isEmpty())
                stk.push(ch);
            else if (ch == stk.peek())
                stk.pop();
            else
                stk.push(ch);
        }
        while (!stk.isEmpty())
            res = stk.pop() + res;
        return res;
    }

    public static void main(String[] args) {
        System.out.println(removeDuplicates("azxxzy"));
        System.out.println(removeDuplicates("abbaca"));
    }
}
