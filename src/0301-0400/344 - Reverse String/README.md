# 344. Reverse String [![share]](https://leetcode.com/problems/reverse-string)

![][easy]

## Problem Statement:

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array `in-place` with `O(1)` extra memory.

### Example 1:

```
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

### Example 2:

```
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

### Constraints:

- 1 <= s.length <= 10<sup>5</sup>
- s[i] is a printable ascii character.

## Solutions:

### [_Java_](./ReverseString.java)

```java
public void reverseString(char[] s) {
  for (int left = 0, right = s.length - 1; left < right; left++, right--)
    swap(s, left, right);
}

private void swap(char[] s, int a, int b) {
  char temp = s[a];
  s[a] = s[b];
  s[b] = temp;
}
```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
