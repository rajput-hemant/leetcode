# 374. Guess Number Higher or Lower [![share]](https://leetcode.com/problems/guess-number-higher-or-lower/)

![][easy]

## Problem Statement

<p>We are playing the Guess Game. The game is as follows:</p>
<p>I pick a number from <code>1</code> to <code>n</code>. You have to guess which number I picked.</p>
<p>Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.</p>
<p>You call a pre-defined API <code>int guess(int num)</code>, which returns three possible results:</p>
<ul>
<li><code>-1</code>: Your guess is higher than the number I picked (i.e. <code>num &gt; pick</code>).</li>
<li><code>1</code>: Your guess is lower than the number I picked (i.e. <code>num &lt; pick</code>).</li>
<li><code>0</code>: your guess is equal to the number I picked (i.e. <code>num == pick</code>).</li>
</ul>
<p>Return <em>the number that I picked</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: n = 10, pick = 6
Output: 6
```

<p><strong class="example">Example 2:</strong></p>

```
Input: n = 1, pick = 1
Output: 1
```

<p><strong class="example">Example 3:</strong></p>

```
Input: n = 2, pick = 1
Output: 1
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
<li><code>1 &lt;= pick &lt;= n</code></li>
</ul>

## Solutions

### [_Rust_](guess_num_higher_or_lower.rs)

```rs [Rust]
impl Solution {
    unsafe fn guessNumber(n: i32) -> i32 {
        let (mut left, mut right) = (1, n);

        while left < right {
            let mid = left + (right - left) / 2;

            if guess(mid) == 1 {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        left
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
