# 66. Plus One [![share]](https://leetcode.com/problems/plus-one/)

![][easy]

## Problem Statement

<p>You are given a <strong>large integer</strong> represented as an integer array <code>digits</code>, where each <code>digits[i]</code> is the <code>i<sup>th</sup></code> digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading <code>0</code>'s.</p>
<p>Increment the large integer by one and return <em>the resulting array of digits</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
```

<p><strong class="example">Example 2:</strong></p>

```
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
```

<p><strong class="example">Example 3:</strong></p>

```
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= digits.length &lt;= 100</code></li>
<li><code>0 &lt;= digits[i] &lt;= 9</code></li>
<li><code>digits</code> does not contain any leading <code>0</code>'s.</li>
</ul>

## Solution:

::: code-group

```py [Python]
class Solution:
    def plusOne(self, digits: list[int]) -> list[int]:
        carry = 0
        for i in range(len(digits) - 1, -1, -1):
            if i == len(digits) - 1:
                digits[i] += 1

            digits[i] += carry
            carry = digits[i] // 10
            digits[i] %= 10

        if carry:
            digits.insert(0, carry)
        return digits

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
