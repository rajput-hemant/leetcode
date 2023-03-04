# 2396. Strictly Palindromic Number [![share]](https://leetcode.com/problems/strictly-palindromic-number/)

![][medium]

## Problem Statement

<p>An integer <code>n</code> is <strong>strictly palindromic</strong> if, for <strong>every</strong> base <code>b</code> between <code>2</code> and <code>n - 2</code> (<strong>inclusive</strong>), the string representation of the integer <code>n</code> in base <code>b</code> is <strong>palindromic</strong>.</p>
<p>Given an integer <code>n</code>, return <code>true</code> <em>if </em><code>n</code><em> is <strong>strictly palindromic</strong> and </em><code>false</code><em> otherwise</em>.</p>
<p>A string is <strong>palindromic</strong> if it reads the same forward and backward.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: n = 9
Output: false
Explanation: In base 2: 9 = 1001 (base 2), which is palindromic.
In base 3: 9 = 100 (base 3), which is not palindromic.
Therefore, 9 is not strictly palindromic so we return false.
Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: n = 4
Output: false
Explanation: We only consider base 2: 4 = 100 (base 2), which is not palindromic.
Therefore, we return false.

```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>4 &lt;= n &lt;= 10<sup>5</sup></code></li>
</ul>

::: details _Click to open Hints_

- Consider the representation of the given number in the base n - 2.
- The number n in base (n - 2) is always 12, which is not palindromic.

:::

## Solution:

::: code-group

```rs [Rust]
impl Solution {
    pub fn is_strictly_palindromic(n: i32) -> bool {
        let mut n = n;
        let mut rev = 0;

        while n > 0 {
            rev = rev * 10 + n % 10;
            n /= 10;
        }

        rev == n
    }
}

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
