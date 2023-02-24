# 342. Power of Four [![share]](https://leetcode.com/problems/power-of-four/)

![][easy]

## Problem Statement

<p>Given an integer <code>n</code>, return <em><code>true</code> if it is a power of four. Otherwise, return <code>false</code></em>.</p>
<p>An integer <code>n</code> is a power of four, if there exists an integer <code>x</code> such that <code>n == 4<sup>x</sup></code>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: n = 16
Output: true
```

<p><strong class="example">Example 2:</strong></p>

```
Input: n = 5
Output: false
```

<p><strong class="example">Example 3:</strong></p>

```
Input: n = 1
Output: true
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>-2<sup>31</sup> &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
<p> </p>
<strong>Follow up:</strong> Could you solve it without loops/recursion?

## Solution:

::: code-group

```rs [Rust]
impl Solution {
    pub fn is_power_of_four(n: i32) -> bool {
        if n <= 0 {
            return false;
        }

        let mut n = n;
        while n % 4 == 0 {
            n /= 4;
        }

        n == 1
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
