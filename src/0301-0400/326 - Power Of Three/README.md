# 326. Power Of Three [![share]](https://leetcode.com/problems/power-of-three/)

![][easy]

## Problem Statement

<p>Given an integer <code>n</code>, return <em><code>true</code> if it is a power of three. Otherwise, return <code>false</code></em>.</p>
<p>An integer <code>n</code> is a power of three, if there exists an integer <code>x</code> such that <code>n == 3<sup>x</sup></code>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: n = 27
Output: true
Explanation: 27 = 33
```

<p><strong class="example">Example 2:</strong></p>

```
Input: n = 0
Output: false
Explanation: There is no x where 3x = 0.
```

<p><strong class="example">Example 3:</strong></p>

```
Input: n = -1
Output: false
Explanation: There is no x where 3x = (-1).
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>-2<sup>31</sup> &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
<p> </p>
<strong>Follow up:</strong> Could you solve it without loops/recursion?

## Solutions

### [_Rust_](power_of_three.rs)

```rs [Rust]
impl Solution {
    pub fn is_power_of_three(n: i32) -> bool {
        if n <= 0 {
            return false;
        }

        let mut n = n;
        while n % 3 == 0 {
            n /= 3;
        }

        n == 1
    }
}

```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://graph.org/file/3ea5234dda646b71c574a.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
