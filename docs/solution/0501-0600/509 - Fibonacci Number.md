# 509. Fibonacci Number [![share]](https://leetcode.com/problems/fibonacci-number/)

![][easy]

## Problem Statement:

The **Fibonacci numbers**, commonly denoted `F(n)` form a sequence, called the **Fibonacci sequence**, such that each number is the sum of the two preceding ones, starting from `0` and `1`. That is,

```
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
```

### Example 1:

```
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
```

### Example 2:

```
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
```

### Example 3:

```
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
```

### Constraints:

- 0 <= n <= 30

## Solution:

### [_Java_](#)

```java
public int fib(int n) {
  if(n == 0 || n == 1)
    return n;
  int[] dp = new int[n + 1];
  dp[0] = 0;
  dp[1] = 1;
  for (int i = 2; i < n + 1; i++)
    dp[i] = dp[i - 1] + dp[i - 2];
  return dp[n];
}

public int fib2(int n) {
  if (n <= 1)
    return n;
  return fib(n - 1) + fib(n - 2);
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
