# 1143. Longest Common Subsequence [![share]](https://leetcode.com/problems/longest-common-subsequence/)

![][medium]

## Problem Statement:

Given two strings `text1` and `text2`, return the length of their longest **common subsequence**. If there is no **common subsequence**, return `0`.

A **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

- For example, `"ace"` is a subsequence of `"abcde"`.
  A **common subsequence** of two strings is a subsequence that is common to both strings.

### Example 1:

```
Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.
```

### Example 2:

```
Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
```

### Example 3:

```
Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
```

### Constraints:

- 1 <= text1.length, text2.length <= 1000
- `text1` and `text2` consist of only lowercase English characters.

## Solution:

### [_Java_](#)

```java
public int longestCommonSubsequence(String str1, String str2) {
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

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
