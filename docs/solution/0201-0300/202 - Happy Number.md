# 202. Happy Number [![share]](https://leetcode.com/problems/happy-number/)

![][easy]

## Problem Statement

<p>Write an algorithm to determine if a number <code>n</code> is happy.</p>
<p>A <strong>happy number</strong> is a number defined by the following process:</p>
<ul>
<li>Starting with any positive integer, replace the number by the sum of the squares of its digits.</li>
<li>Repeat the process until the number equals 1 (where it will stay), or it <strong>loops endlessly in a cycle</strong> which does not include 1.</li>
<li>Those numbers for which this process <strong>ends in 1</strong> are happy.</li>
</ul>
<p>Return <code>true</code> <em>if</em> <code>n</code> <em>is a happy number, and</em> <code>false</code> <em>if not</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

<p><strong class="example">Example 2:</strong></p>

```
Input: n = 2
Output: false
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

## Solution:

::: code-group

```rs [Rust]
impl Solution {
    pub fn is_happy(n: i32) -> bool {
        let (mut slow, mut fast) = (n, n);

        loop {
            slow = Self::sum_of_squares(slow);
            fast = Self::sum_of_squares(Self::sum_of_squares(fast));

            if slow == 1 || fast == 1 {
                return true;
            }

            // Floyd's cycle detection
            if slow == fast {
                return false;
            }
        }
    }

    pub fn sum_of_squares(mut num: i32) -> i32 {
        let mut sum = 0;

        while num > 0 {
            let digit = num % 10;
            sum += digit * digit;
            num /= 10;
        }

        sum
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
