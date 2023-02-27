# 412. Fizz Buzz [![share]](https://leetcode.com/problems/fizz-buzz/)

![][easy]

## Problem Statement

<p>Given an integer <code>n</code>, return <em>a string array </em><code>answer</code><em> (<strong>1-indexed</strong>) where</em>:</p>
<ul>
<li><code>answer[i] == "FizzBuzz"</code> if <code>i</code> is divisible by <code>3</code> and <code>5</code>.</li>
<li><code>answer[i] == "Fizz"</code> if <code>i</code> is divisible by <code>3</code>.</li>
<li><code>answer[i] == "Buzz"</code> if <code>i</code> is divisible by <code>5</code>.</li>
<li><code>answer[i] == i</code> (as a string) if none of the above conditions are true.</li>
</ul>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: n = 3
Output: ["1","2","Fizz"]
```

<p><strong class="example">Example 2:</strong></p>

```
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
```

<p><strong class="example">Example 3:</strong></p>

```
Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>
</ul>

## Solution:

::: code-group

```rs [Rust]
impl Solution {
    pub fn fizz_buzz(n: i32) -> Vec<String> {
        let mut res = Vec::new();

        for i in 1..=n {
            // same as divisible by 3 and 5
            if i % 15 == 0 {
                res.push("FizzBuzz".to_string());
            } else if i % 3 == 0 {
                res.push("Fizz".to_string());
            } else if i % 5 == 0 {
                res.push("Buzz".to_string());
            } else {
                res.push(i.to_string());
            }
        }

        res
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
