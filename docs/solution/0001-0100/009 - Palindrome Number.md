# 9. Palindrome Number [![share]](https://leetcode.com/problems/palindrome-number)

![][easy]

## Problem Statement:

Given an integer `x`, return `true` if `x` is palindrome integer.

An integer is a **palindrome** when it reads the same backward as forward.

- For example, `121` is a palindrome while `123` is not.

### Example 1:

```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

### Example 2:

```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

### Example 3:

```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

### Constraints:

- -231 <= x <= 231 - 1

**Follow up**: Could you solve it without converting the integer to a string?

## Solution:

::: code-group

```java
public static boolean isPalindrome(int x) {
  if (x < 0 || x % 10 == 0 && x != 0)
    return false;
  int reverseNum = 0;
  while (x > reverseNum) {
    reverseNum = reverseNum * 10 + x % 10;
    x /= 10;
  }
  return x == reverseNum || x == reverseNum / 10;
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
