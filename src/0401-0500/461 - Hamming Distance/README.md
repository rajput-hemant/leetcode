# 461. Hamming Distance [![share]](https://leetcode.com/problems/hamming-distance/)

![][easy]

## Problem Statement

<p>The <a href="https://en.wikipedia.org/wiki/Hamming_distance" target="_blank">Hamming distance</a> between two integers is the number of positions at which the corresponding bits are different.</p>
<p>Given two integers <code>x</code> and <code>y</code>, return <em>the <strong>Hamming distance</strong> between them</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: x = 3, y = 1
Output: 1
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt;= x, y &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

## Solutions

### [_Rust_](hamming_distance.rs)

```rs [Rust]
impl Solution {
    pub fn hamming_distance(x: i32, y: i32) -> i32 {
        let (mut x, mut y) = (x, y);
        let mut count = 0;

        while x != 0 || y != 0 {
            if x % 2 != y % 2 {
                count += 1;
            }
            x /= 2;
            y /= 2;
        }

        count
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
