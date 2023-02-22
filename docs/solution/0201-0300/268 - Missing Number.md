# 268. Missing Number [![share]](https://leetcode.com/problems/missing-number/)

![][easy]

## Problem Statement

<p>Given an array <code>nums</code> containing <code>n</code> distinct numbers in the range <code>[0, n]</code>, return <em>the only number in the range that is missing from the array.</em></p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
```

<p><strong class="example">Example 3:</strong></p>

```
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == nums.length</code></li>
<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>
<li><code>0 &lt;= nums[i] &lt;= n</code></li>
<li>All the numbers of <code>nums</code> are <strong>unique</strong>.</li>
</ul>
<p> </p>
<p><strong>Follow up:</strong> Could you implement a solution using only <code>O(1)</code> extra space complexity and <code>O(n)</code> runtime complexity?</p>

## Solution:

::: code-group

```rs [Rust]
impl Solution {
    pub fn missing_number(nums: Vec<i32>) -> i32 {
        let len = nums.len();
        let mut sum = len * (len + 1) / 2;

        for num in nums {
            sum -= num as usize;
        }

        sum as i32
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
