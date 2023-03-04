# 1512. Number of Good Pairs [![share]](https://leetcode.com/problems/number-of-good-pairs/)

![][easy]

## Problem Statement

<p>Given an array of integers <code>nums</code>, return <em>the number of <strong>good pairs</strong></em>.</p>
<p>A pair <code>(i, j)</code> is called <em>good</em> if <code>nums[i] == nums[j]</code> and <code>i</code> &lt; <code>j</code>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
```

<p><strong class="example">Example 3:</strong></p>

```
Input: nums = [1,2,3]
Output: 0
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 100</code></li>
<li><code>1 &lt;= nums[i] &lt;= 100</code></li>
</ul>

::: details _Click to open Hints_

- Count how many times each number appears. If a number appears n times, then n \* (n – 1) // 2 good pairs can be made with this number.

:::

## Solution:

::: code-group

```rs [Rust]
impl Solution {
    pub fn num_identical_pairs(nums: Vec<i32>) -> i32 {
        let mut count = 0;
        let mut map = std::collections::HashMap::new();

        for num in nums {
            let entry = map.entry(num).or_insert(0);
            count += *entry;
            *entry += 1;
        }

        count
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
