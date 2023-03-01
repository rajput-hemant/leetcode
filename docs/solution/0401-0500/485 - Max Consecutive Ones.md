# 485. Max Consecutive Ones [![share]](https://leetcode.com/problems/max-consecutive-ones/)

![][easy]

## Problem Statement

<p>Given a binary array <code>nums</code>, return <em>the maximum number of consecutive </em><code>1</code><em>'s in the array</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: nums = [1,0,1,1,0,1]
Output: 2
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
<li><code>nums[i]</code> is either <code>0</code> or <code>1</code>.</li>
</ul>

::: details _Click to open Hints_

- You need to think about two things as far as any window is concerned. One is the starting point for the window. How do you detect that a new window of 1s has started? The next part is detecting the ending point for this window.

How do you detect the ending point for an existing window? If you figure these two things out, you will be able to detect the windows of consecutive ones. All that remains afterward is to find the longest such window and return the size.

:::

## Solution:

::: code-group

```rs [Rust]
impl Solution {
    pub fn find_max_consecutive_ones(nums: Vec<i32>) -> i32 {
        let (mut count, mut max) = (0, 0);

        for i in nums {
            if i == 1 {
                count += 1;
            } else {
                if count > max {
                    max = count;
                }
                count = 0;
            }
        }

        if count > max {
            max = count;
        }

        max
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
