# 1920. Build Array from Permutation [![share]](https://leetcode.com/problems/build-array-from-permutation/)

![][easy]

## Problem Statement

<p>Given a <strong>zero-based permutation</strong> <code>nums</code> (<strong>0-indexed</strong>), build an array <code>ans</code> of the <strong>same length</strong> where <code>ans[i] = nums[nums[i]]</code> for each <code>0 &lt;= i &lt; nums.length</code> and return it.</p>
<p>A <strong>zero-based permutation</strong> <code>nums</code> is an array of <strong>distinct</strong> integers from <code>0</code> to <code>nums.length - 1</code> (<strong>inclusive</strong>).</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: nums = [0,2,1,5,3,4]
Output: [0,1,2,4,5,3]
Explanation: The array ans is built as follows:
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
    = [0,1,2,4,5,3]
```

<p><strong class="example">Example 2:</strong></p>

```
Input: nums = [5,0,1,2,3,4]
Output: [4,5,0,1,2,3]
Explanation: The array ans is built as follows:
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
    = [4,5,0,1,2,3]
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
<li><code>0 &lt;= nums[i] &lt; nums.length</code></li>
<li>The elements in <code>nums</code> are <strong>distinct</strong>.</li>
</ul>
<p> </p>
<p><strong>Follow-up:</strong> Can you solve it without using an extra space (i.e., <code>O(1)</code> memory)?</p>

::: details _Click to open Hints_

- Just apply what's said in the statement.
- Notice that you can't apply it on the same array directly since some elements will change after application

:::

## Solution:

::: code-group

```rs [Rust]
impl Solution {
    pub fn build_array(nums: Vec<i32>) -> Vec<i32> {
        let mut result = Vec::new();

        for i in 0..nums.len() {
            result.push(nums[nums[i] as usize]);
        }

        result
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
