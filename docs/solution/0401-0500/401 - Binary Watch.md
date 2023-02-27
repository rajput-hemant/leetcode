# 401. Binary Watch [![share]](https://leetcode.com/problems/binary-watch/)

![][easy]

## Problem Statement

<p>A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.</p>
<ul>
<li>For example, the below binary watch reads <code>"4:51"</code>.</li>
</ul>
<p><img alt="" src="https://assets.leetcode.com/uploads/2021/04/08/binarywatch.jpg" style="width: 500px; height: 500px;"/></p>
<p>Given an integer <code>turnedOn</code> which represents the number of LEDs that are currently on (ignoring the PM), return <em>all possible times the watch could represent</em>. You may return the answer in <strong>any order</strong>.</p>
<p>The hour must not contain a leading zero.</p>
<ul>
<li>For example, <code>"01:00"</code> is not valid. It should be <code>"1:00"</code>.</li>
</ul>
<p>The minute must be consist of two digits and may contain a leading zero.</p>
<ul>
<li>For example, <code>"10:2"</code> is not valid. It should be <code>"10:02"</code>.</li>
</ul>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: turnedOn = 1
Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
```

<p><strong class="example">Example 2:</strong></p>

```
Input: turnedOn = 9
Output: []
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt;= turnedOn &lt;= 10</code></li>
</ul>

::: details _Click to open Hints_

- Simplify by seeking for solutions that involve comparing bit counts.
- Consider calculating all possible times for comparison purposes.

:::

## Solution:

::: code-group

```rs [Rust]
impl Solution {
    pub fn read_binary_watch(turned_on: i32) -> Vec<String> {
        let mut res = Vec::new();

        // 12 hours, 60 minutes
        // here we use 0_i32 to avoid the warning of type inference
        for i in 0_i32..12 {
            for j in 0_i32..60 {
                // if the sum of the number of 1s in the binary representation
                // of the hour and minute is equal to turned_on,
                // then the time is added to the res
                if i.count_ones() + j.count_ones() == turned_on as u32 {
                    res.push(format!("{}:{:02}", i, j));
                }
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
