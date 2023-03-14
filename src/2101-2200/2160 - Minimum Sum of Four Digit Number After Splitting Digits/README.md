# 2160. Minimum Sum of Four Digit Number After Splitting Digits [![share]](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/)

![][easy]

## Problem Statement

<p>You are given a <strong>positive</strong> integer <code>num</code> consisting of exactly four digits. Split <code>num</code> into two new integers <code>new1</code> and <code>new2</code> by using the <strong>digits</strong> found in <code>num</code>. <strong>Leading zeros</strong> are allowed in <code>new1</code> and <code>new2</code>, and <strong>all</strong> the digits found in <code>num</code> must be used.</p>
<ul>
<li>For example, given <code>num = 2932</code>, you have the following digits: two <code>2</code>'s, one <code>9</code> and one <code>3</code>. Some of the possible pairs <code>[new1, new2]</code> are <code>[22, 93]</code>, <code>[23, 92]</code>, <code>[223, 9]</code> and <code>[2, 329]</code>.</li>
</ul>
<p>Return <em>the <strong>minimum</strong> possible sum of </em><code>new1</code><em> and </em><code>new2</code>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: num = 2932
Output: 52
Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: num = 4009
Output: 13
Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc.
The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1000 &lt;= num &lt;= 9999</code></li>
</ul>

<details>
<summary>

#### _Click to open Hints_

</summary>

- Notice that the most optimal way to obtain the minimum possible sum using 4 digits is by summing up two 2-digit numbers.
- We can use the two smallest digits out of the four as the digits found in the tens place respectively.
- Similarly, we use the final 2 larger digits as the digits found in the ones place.

</details>

## Solutions

### [_Rust_](min_sum_of_four_digits_num_after_splitting_digits.rs)

```rs [Rust]
impl Solution {
    pub fn minimum_sum(num: i32) -> i32 {
        let mut number: Vec<u32> = num
            .to_string()
            .chars()
            .map(|x| x.to_digit(10).unwrap())
            .collect();

        number.sort();

        let a: i32 = format!("{}{}", number[0], number[2]).parse().unwrap();
        let b: i32 = format!("{}{}", number[1], number[2]).parse().unwrap();

        a + b
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
