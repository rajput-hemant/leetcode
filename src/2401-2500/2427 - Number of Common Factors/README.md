# 2427. Number of Common Factors [![share]](https://leetcode.com/problems/number-of-common-factors/)

![][easy]

## Problem Statement

<p>Given two positive integers <code>a</code> and <code>b</code>, return <em>the number of <strong>common</strong> factors of </em><code>a</code><em> and </em><code>b</code>.</p>
<p>An integer <code>x</code> is a <strong>common factor</strong> of <code>a</code> and <code>b</code> if <code>x</code> divides both <code>a</code> and <code>b</code>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: a = 12, b = 6
Output: 4
Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: a = 25, b = 30
Output: 2
Explanation: The common factors of 25 and 30 are 1, 5.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= a, b &lt;= 1000</code></li>
</ul>

<details>
<summary>

#### _Click to open Hints_

</summary>

- For each integer in range [1,1000], check if it’s divisible by both A and B.

</details>

## Solutions

### [_Rust_](num_of_common_factors.rs)

```rs [Rust]
impl Solution {
    pub fn common_factors(a: i32, b: i32) -> i32 {
        let mut count = 0;
        let limit = i32::min(a, b);

        for i in 1..=limit {
            if a % i == 0 && b % i == 0 {
                count += 1;
            }
        }

        count
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
