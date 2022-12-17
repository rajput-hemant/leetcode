# 516. Longest Palindromic Subsequence [![share]](https://leetcode.com/problems/longest-palindromic-subsequence/)

![][medium]

## Problem Statement:

Given a string `s`, find the longest palindromic subsequence's length in `s`.

A **subsequence** is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

### Example 1:

```
Input: s = "bbbab"
Output: 4
Explanation: One possible longest palindromic subsequence is "bbbb".
```

### Example 2:

```
Input: s = "cbbd"
Output: 2
Explanation: One possible longest palindromic subsequence is "bb".
```

### Constraints:

- 1 <= s.length <= 1000
- s consists only of lowercase English letters.

## Solution:

::: code-group

```java
public int longestPalindromeSubseq(String s) {
    String str1 = s,
        str2 = new StringBuilder(s).reverse().toString();
    int m = str1.length(),
        n = str2.length();
    int[][] dp = new int[m + 1][n + 1];
    for (int i = 0; i < m + 1; i++)
    for (int j = 0; j < n + 1; j++) {
        if (i == 0 || j == 0)
        dp[i][j] = 0;
        else if (str1.charAt(i - 1) == str2.charAt(j - 1))
        dp[i][j] = 1 + dp[i - 1][j - 1];
        else
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
    return dp[m][n];
}
```

:::

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
