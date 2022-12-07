# 541. Reverse String II [![share]](https://leetcode.com/problems/reverse-string-ii/)

![][easy]

## Problem Statement:

Given a string `s` and an integer `k`, reverse the first `k` characters for every 2k characters counting from the start of the string.

If there are fewer than `k` characters left, reverse all of them. If there are less than `2k` but greater than or equal to `k` characters, then reverse the first `k` characters and leave the other as original.

### Example 1:

```
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
```

### Example 2:

```
Input: s = "abcd", k = 2
Output: "bacd"
```

### Constraints:

- 1 <= s.length <= 10<sup>4</sup>
- s consists of only lowercase English letters.
- 1 <= k <= 10<sup>4</sup>

## Solution:

### [_Java_](./ReverseStringII.java)

```java
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
```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
