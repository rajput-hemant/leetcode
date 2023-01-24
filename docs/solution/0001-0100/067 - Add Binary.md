# 67. Add Binary [![share]](https://leetcode.com/problems/add-binary/)

![][easy]

## Problem Statement

<p>Given two binary strings <code>a</code> and <code>b</code>, return <em>their sum as a binary string</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: a = "11", b = "1"
Output: "100"
```

<p><strong class="example">Example 2:</strong></p>

```
Input: a = "1010", b = "1011"
Output: "10101"
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= a.length, b.length &lt;= 10<sup>4</sup></code></li>
<li><code>a</code> and <code>b</code> consist only of <code>'0'</code> or <code>'1'</code> characters.</li>
<li>Each string does not contain leading zeros except for the zero itself.</li>
</ul>

## Solution:

::: code-group

```py [Python]
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        sum = bin(int(a, 2) + int(b, 2))
        return sum[2:]  # remove 0b

```

:::

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://graph.org/file/3ea5234dda646b71c574a.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
