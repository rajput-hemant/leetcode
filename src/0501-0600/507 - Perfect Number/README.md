# 507. Perfect Number [![share]](https://leetcode.com/problems/perfect-number/)

![][easy]

## Problem Statement

<p>A <a href="https://en.wikipedia.org/wiki/Perfect_number" target="_blank"><strong>perfect number</strong></a> is a <strong>positive integer</strong> that is equal to the sum of its <strong>positive divisors</strong>, excluding the number itself. A <strong>divisor</strong> of an integer <code>x</code> is an integer that can divide <code>x</code> evenly.</p>
<p>Given an integer <code>n</code>, return <code>true</code><em> if </em><code>n</code><em> is a perfect number, otherwise return </em><code>false</code>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: num = 28
Output: true
Explanation: 28 = 1 + 2 + 4 + 7 + 14
1, 2, 4, 7, and 14 are all divisors of 28.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: num = 7
Output: false
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= num &lt;= 10<sup>8</sup></code></li>
</ul>

## Solutions

### [_Rust_](perfect_number.rs)

```rs [Rust]
impl Solution {
    pub fn check_perfect_number(num: i32) -> bool {
        if num == 1 {
            return false;
        }

        let (mut sum, mut i) = (1, 2);

        while i * i <= num {
            // if i is a factor of num, add i and num / i to sum
            if num % i == 0 {
                sum += i;
                if i * i != num {
                    sum += num / i;
                }
            }
            i += 1;
        }

        sum == num
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
