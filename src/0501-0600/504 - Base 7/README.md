# 504. Base 7 [![share]](https://leetcode.com/problems/base-7/)

![][easy]

## Problem Statement

<p>Given an integer <code>num</code>, return <em>a string of its <strong>base 7</strong> representation</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: num = 100
Output: "202"
```

<p><strong class="example">Example 2:</strong></p>

```
Input: num = -7
Output: "-10"
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>-10<sup>7</sup> &lt;= num &lt;= 10<sup>7</sup></code></li>
</ul>

## Solutions

### [_Rust_](base_7.rs)

```rs [Rust]
impl Solution {
    pub fn convert_to_base7(num: i32) -> String {
        if num == 0 {
            return "0".to_string();
        }

        let mut result = String::default();
        let is_negative = num < 0;
        let mut num = num.abs();

        while num > 0 {
            let rem = num % 7;
            result.push_str(&rem.to_string());
            num /= 7;
        }

        if is_negative {
            result.push('-');
        }

        result.chars().rev().collect()
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
