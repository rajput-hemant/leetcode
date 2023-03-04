# 2413. Smallest Even Multiple [![share]](https://leetcode.com/problems/smallest-even-multiple/)

![][easy]

## Problem Statement

Given a <strong>positive</strong> integer <code>n</code>, return <em>the smallest positive integer that is a multiple of <strong>both</strong> </em><code>2</code><em> and </em><code>n</code>.

<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: n = 5
Output: 10
Explanation: The smallest multiple of both 5 and 2 is 10.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: n = 6
Output: 6
Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 150</code></li>
</ul>

<details>
<summary>

#### _Click to open Hints_

</summary>

- A guaranteed way to find a multiple of 2 and n is to multiply them together. When is this the answer, and when is there a smaller answer?
- There is a smaller answer when n is even.

</details>

## Solutions

### [_Rust_](smallest_even_multiple.rs)

```rs [Rust]
impl Solution {
    pub fn smallest_even_multiple(n: i32) -> i32 {
        if n % 2 == 0 {
            return n;
        } else {
            return n * 2;
        }
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
