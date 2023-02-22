# 263. Ugly Number [![share]](https://leetcode.com/problems/ugly-number/)

![][easy]

## Problem Statement

<p>An <strong>ugly number</strong> is a positive integer whose prime factors are limited to <code>2</code>, <code>3</code>, and <code>5</code>.</p>
<p>Given an integer <code>n</code>, return <code>true</code> <em>if</em> <code>n</code> <em>is an <strong>ugly number</strong></em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: n = 6
Output: true
Explanation: 6 = 2 × 3
```

<p><strong class="example">Example 2:</strong></p>

```
Input: n = 1
Output: true
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
```

<p><strong class="example">Example 3:</strong></p>

```
Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>-2<sup>31</sup> &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

## Solutions

### [_Rust_](ugly_number.rs)

```rs [Rust]
impl Solution {
    pub fn is_ugly(n: i32) -> bool {
        if n < 1 {
            return false;
        }

        let divisors = [2, 3, 5];
        let mut n = n;

        for divisor in divisors {
            // Divide n by divisor as many times as possible
            while n % divisor == 0 {
                n /= divisor;
            }
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
