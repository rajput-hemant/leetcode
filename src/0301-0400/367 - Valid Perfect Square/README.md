# 367. Valid Perfect Square [![share]](https://leetcode.com/problems/valid-perfect-square)

![][easy]

## Problem Statement:

Given a **positive** integer num, write a function which returns True if num is a perfect square else False.

**Follow up: Do not** use any built-in library function such as `sqrt`.

### Example 1:

```
Input: num = 16
Output: true
```

### Example 2:

```
Input: num = 14
Output: false
```

### Constraints:

- 1 <= num <= 2<sup>31</sup> - 1

## Solutions:

### [_Java_](./ValidPerfectSquare.java)

```java
public boolean isPerfectSquare(int num) {
  if (num == 1)
    return true;
  long low = 1,
      mid = 0,
      high = num / 2;
  while (low <= high) {
    mid = low + (high - low) / 2;
    if (mid * mid == num)
      return true;
    else if (mid * mid < num)
      low = mid + 1;
    else
      high = mid - 1;
  }
  return false;
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
