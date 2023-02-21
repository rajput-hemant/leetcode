# 258. Add Digits [![share]](https://leetcode.com/problems/add-digits/)

![][easy]

## Problem Statement

<p>Given an integer <code>num</code>, repeatedly add all its digits until the result has only one digit, and return it.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: num = 38
Output: 2
Explanation: The process is
38 --&gt; 3 + 8 --&gt; 11
11 --&gt; 1 + 1 --&gt; 2
Since 2 has only one digit, return it.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: num = 0
Output: 0
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt;= num &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
<p> </p>
<p><strong>Follow up:</strong> Could you do it without any loop/recursion in <code>O(1)</code> runtime?</p>

<details>
<summary>

#### _Click to open Hints_

</summary>

- A naive implementation of the above process is trivial. Could you come up with other methods?
- What are all the possible results?
- How do they occur, periodically or randomly?
- You may find this <a href="https://en.wikipedia.org/wiki/Digital_root" target="_blank">Wikipedia article</a> useful.

</details>

## Solutions

### [_Rust_](add_digits.rs)

```rs [Rust]
impl Solution {
    pub fn add_digits(num: i32) -> i32 {
        let mut num = num;

        // loop while the number is greater than 9
        while num > 9 {
            let mut sum = 0;
            // loop while the number is greater than 0,
            // add the last digit to the sum,
            // and divide the number by 10
            while num > 0 {
                sum += num % 10;
                num /= 10;
            }
            // set the number to the sum
            num = sum;
        }

        num
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
