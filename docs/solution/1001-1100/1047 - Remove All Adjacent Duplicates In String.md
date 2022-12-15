# 1047. Remove All Adjacent Duplicates In String [![share]](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)

![][easy]

## Problem Statement:

You are given a string `s` consisting of lowercase English letters. A **duplicate removal** consists of choosing two **adjacent** and **equal** letters and removing them.

We repeatedly make **duplicate removals** on `s` until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is **unique**.

### Example 1:

```
Input: s = "abbaca"
Output: "ca"
```

### Explanation:

```
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move. The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
```

### Example 2:

```
Input: s = "azxxzy"
Output: "ay"
```

### Constraints:

- 1 <= s.length <= 10<sup>5</sup>
- s consists of lowercase English letters.

## Solutions:

### [_Java_](#)

```java
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
```


### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
