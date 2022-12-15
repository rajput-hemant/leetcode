# 231. Power of Two [![share]](https://leetcode.com/problems/power-of-two/)

![][easy]

## Problem Statement:

Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.

An integer `n` is a power of two, if there exists an integer `x` such that <code>n == 2<sup>x</sup></code>.

### Example 1:

```
Input: n = 1
Output: true
Explanation: 20 = 1
```

### Example 2:

```
Input: n = 16
Output: true
Explanation: 24 = 16
```

### Example 3:

```
Input: n = 3
Output: false
```

### Constraints:

- -2<sup>31</sup> <= n <= 2<sup>31</sup> - 1

**Follow up:** Could you solve it without loops/recursion?

## Solution:

### [_Java_](#)

```java
public boolean isPowerOfTwo(int n) {
  if (n == 0)
    return false;
  long x = (long) n;
  return (x & x - 1) == 0;
}
```

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
