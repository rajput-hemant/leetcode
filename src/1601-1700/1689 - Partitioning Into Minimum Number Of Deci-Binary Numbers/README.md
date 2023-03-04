# 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers [![share]](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/)

![][medium]

## Problem Statement

<p>A decimal number is called <strong>deci-binary</strong> if each of its digits is either <code>0</code> or <code>1</code> without any leading zeros. For example, <code>101</code> and <code>1100</code> are <strong>deci-binary</strong>, while <code>112</code> and <code>3001</code> are not.</p>
<p>Given a string <code>n</code> that represents a positive decimal integer, return <em>the <strong>minimum</strong> number of positive <strong>deci-binary</strong> numbers needed so that they sum up to </em><code>n</code><em>.</em></p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: n = "32"
Output: 3
Explanation: 10 + 11 + 11 = 32
```

<p><strong class="example">Example 2:</strong></p>

```
Input: n = "82734"
Output: 8
```

<p><strong class="example">Example 3:</strong></p>

```
Input: n = "27346209830709182346"
Output: 9
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n.length &lt;= 10<sup>5</sup></code></li>
<li><code>n</code> consists of only digits.</li>
<li><code>n</code> does not contain any leading zeros and represents a positive integer.</li>
</ul>

<details>
<summary>

#### _Click to open Hints_

</summary>

- Think about if the input was only one digit. Then you need to add up as many ones as the value of this digit.
- If the input has multiple digits, then you can solve for each digit independently, and merge the answers to form numbers that add up to that input.
- Thus the answer is equal to the max digit.

</details>

## Solutions

### [_Rust_](partitioning_into_minimum_number_of_deci_binary_numbers.rs)

```rs [Rust]
impl Solution {
    pub fn min_partitions(n: String) -> i32 {
        // this will be slightly faster as it doesn't need to convert the char to a digit
        // as the max() function will return the max char value (in ASCII) which is the same as the max digit value

        // n.chars().max().unwrap().to_digit(10).unwrap() as i32

        n.chars().map(|c| c.to_digit(10).unwrap()).max().unwrap() as i32
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
