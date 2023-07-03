# 279. Perfect Squares [![share]](https://leetcode.com/problems/perfect-squares/)

![][medium]

## Problem Statement

<p>Given an integer <code>n</code>, return <em>the least number of perfect square numbers that sum to</em> <code>n</code>.</p>
<p>A <strong>perfect square</strong> is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, <code>1</code>, <code>4</code>, <code>9</code>, and <code>16</code> are perfect squares while <code>3</code> and <code>11</code> are not.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>
</ul>

## Solutions

### [_Rust_](perfect_square.rs)

```rs [Rust]
use std::cmp::min;

impl Solution {
    pub fn num_squares(n: i32) -> i32 {
        // make a dp array of size n + 1 and filled with 0
        let mut dp = vec![n; n as usize + 1];

        // set the first element to 0
        dp[0] = 0;

        // iterate from 1 to n
        for i in 1..=n as usize {
            // iterate from 1 to sqrt(i)
            for j in 1..=(i as f64).sqrt() as usize {
                // set dp[i] to the minimum of dp[i] and dp[i - j * j] + 1
                dp[i] = min(dp[i], dp[i - j * j] + 1);
            }
        }

        dp[n as usize]
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
