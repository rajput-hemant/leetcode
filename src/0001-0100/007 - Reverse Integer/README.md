# 7. Reverse Integer [![share]](https://leetcode.com/problems/reverse-integer)

![][medium]

## Problem Statement:

Given a signed 32-bit integer `x`, return x with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range <code>[-2<sup>31</sup>, 2<sup>31</sup> - 1]</code>, then return `0`.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

### Example 1:

```
Input: x = 123
Output: 321
```

### Example 2:

```
Input: x = -123
Output: -321
```

### Example 3:

```
Input: x = 120
Output: 21
```

### Constraints:

- -231 <= x <= 231 -

## Solution:

### [_Java_](./ReverseInteger.java)

```java
public static int reverse(int x) {
  String reversed = new StringBuilder().append(Math.abs(x)).reverse().toString();
  try {
    return x < 0 ? Integer.parseInt(reversed) * -1 : Integer.parseInt(reversed);
  } catch (Exception e) {
    return 0;
  }
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
