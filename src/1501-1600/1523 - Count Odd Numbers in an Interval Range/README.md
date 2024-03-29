# 1523. Count Odd Numbers in an Interval Range [![share]](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/)

![][easy]

## Problem Statement

<p>Given two non-negative integers <code>low</code> and <code><font face="monospace">high</font></code>. Return the <em>count of odd numbers between </em><code>low</code><em> and </em><code><font face="monospace">high</font></code><em> (inclusive)</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

````

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].```

<p><strong class="example">Example 2:</strong></p>

````

Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt;= low &lt;= high &lt;= 10^9</code></li>
</ul>

<details>
<summary>

#### _Click to open Hints_

</summary>

- If the range (high - low + 1) is even, the number of even and odd numbers in this range will be the same.
- If the range (high - low + 1) is odd, the solution will depend on the parity of high and low.

</details>

## Solutions

### [_Rust_](count_odd_numbers_in_an_interval_range.rs)

```rs [Rust]
impl Solution {
    pub fn count_odds(low: i32, high: i32) -> i32 {
        // ((high + 1) / 2) - (low / 2)
        ((high + 1) >> 1) - (low >> 1) // same as above
    }
}

```

### [_Go_](count_odd_numbers_in_an_interval_range.go)

```go [Go]
package main

func countOdds(low int, high int) int {
	return ((high + 1) / 2) - (low / 2)
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
