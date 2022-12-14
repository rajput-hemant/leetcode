# 389. Find the Difference [![share]](https://leetcode.com/problems/find-the-difference/)

![][easy]

## Problem Statement:

You are given two strings `s` and `t`.

String `t` is generated by random shuffling string `s` and then add one more letter at a random position.

Return the letter that was added to `t`.

### Example 1:

```
Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.
```

### Example 2:

```
Input: s = "", t = "y"
Output: "y"
```

### Constraints:

- 0 <= s.length <= 1000
- t.length == s.length + 1
- s and t consist of lowercase English letters.

## Solution:

::: code-group

```java
public char findTheDifference(String s, String t) {
  char c = 0;
  for (int i = 0; i < s.length(); ++i)
    c ^= s.charAt(i);
  for (int i = 0; i < t.length(); ++i)
    c ^= t.charAt(i);
  return c;
}
```

:::

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
