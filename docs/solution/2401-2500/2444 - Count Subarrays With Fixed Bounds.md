# 2444. Count Subarrays With Fixed Bounds [![share]](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/)

![][hard]

## Problem Statement

<p>You are given an integer array <code>nums</code> and two integers <code>minK</code> and <code>maxK</code>.</p>
<p>A <strong>fixed-bound subarray</strong> of <code>nums</code> is a subarray that satisfies the following conditions:</p>
<ul>
<li>The <strong>minimum</strong> value in the subarray is equal to <code>minK</code>.</li>
<li>The <strong>maximum</strong> value in the subarray is equal to <code>maxK</code>.</li>
</ul>
<p>Return <em>the <strong>number</strong> of fixed-bound subarrays</em>.</p>
<p>A <strong>subarray</strong> is a <strong>contiguous</strong> part of an array.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: nums = [1,3,5,2,7,5], minK = 1, maxK = 5
Output: 2
Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].
```

<p><strong class="example">Example 2:</strong></p>

```
Input: nums = [1,1,1,1], minK = 1, maxK = 1
Output: 10
Explanation: Every subarray of nums is a fixed-bound subarray. There are 10 possible subarrays.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
<li><code>1 &lt;= nums[i], minK, maxK &lt;= 10<sup>6</sup></code></li>
</ul>

::: details _Click to open Hints_

- Can you solve the problem if all the numbers in the array were between minK and maxK inclusive?
- Think of the inclusion-exclusion principle.
- Divide the array into multiple subarrays such that each number in each subarray is between minK and maxK inclusive, solve the previous problem for each subarray, and sum all the answers.

:::

## Solution:

::: code-group

```rs [Rust]
impl Solution {
    pub fn count_subarrays(nums: Vec<i32>, min_k: i32, max_k: i32) -> i64 {
        let (mut bad, mut min, mut max) = (-1, -1, -1);
        // bad is the index of the first number that is not in the range [min_k, max_k]
        let mut res = 0;

        for (i, &num) in nums.iter().enumerate() {
            let i = i as i64;

            // set i to bad index if it is not in the range [min_k, max_k]
            if !(min_k <= num && num <= max_k) {
                bad = i;
            }

            // set i to min index if num is equal to min_k
            if min_k == num {
                min = i;
            }
            // set i to max index if num is equal to max_k
            if max_k == num {
                max = i;
            }

            // it is the last starting point for the subarray
            let start = min.min(max);
            if start > bad {
                res += start - bad; // add the number of subarrays b/w [bad + 1, start]
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
