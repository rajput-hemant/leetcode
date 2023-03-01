# 476. Number Complement [![share]](https://leetcode.com/problems/number-complement/)

![][easy]

## Problem Statement

<p>The <strong>complement</strong> of an integer is the integer you get when you flip all the <code>0</code>'s to <code>1</code>'s and all the <code>1</code>'s to <code>0</code>'s in its binary representation.</p>
<ul>
<li>For example, The integer <code>5</code> is <code>"101"</code> in binary and its <strong>complement</strong> is <code>"010"</code> which is the integer <code>2</code>.</li>
</ul>
<p>Given an integer <code>num</code>, return <em>its complement</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: num = 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: num = 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= num &lt; 2<sup>31</sup></code></li>
</ul>
<p> </p>
<p><strong>Note:</strong> This question is the same as 1009: <a href="https://leetcode.com/problems/complement-of-base-10-integer/" target="_blank">https://leetcode.com/problems/complement-of-base-10-integer/</a></p>

## Solutions

### [_Rust_](num_complement.rs)

```rs [Rust]
impl Solution {
    pub fn find_complement(num: i32) -> i32 {
        let mut res = String::default();

        for ch in format!("{:b}", num).chars() {
            if ch == '0' {
                res += "1";
            } else {
                res += "0";
            }
        }

        i32::from_str_radix(&res, 2).unwrap()
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
