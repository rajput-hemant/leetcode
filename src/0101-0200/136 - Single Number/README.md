# 136. Single Number [![share]](https://leetcode.com/problems/single-number/)

![][easy]

## Problem Statement

<p>Given a <strong>non-empty</strong> array of integers <code>nums</code>, every element appears <em>twice</em> except for one. Find that single one.</p>
<p>You must implement a solution with a linear runtime complexity and use only constant extra space.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: nums = [2,2,1]
Output: 1
```

<p><strong class="example">Example 2:</strong></p>

```
Input: nums = [4,1,2,1,2]
Output: 4
```

<p><strong class="example">Example 3:</strong></p>

```
Input: nums = [1]
Output: 1
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
<li><code>-3 * 10<sup>4</sup> &lt;= nums[i] &lt;= 3 * 10<sup>4</sup></code></li>
<li>Each element in the array appears twice except for one element which appears only once.</li>
</ul>

## Solutions

### [_Rust_](single_number.rs)

```rs [Rust]
impl Solution {
    pub fn single_number(nums: Vec<i32>) -> i32 {
        let mut res = 0;
        for num in nums {
            // a ^ a = 0
            // a ^ a ^ a = a
            // a ^ a ^ b = b
            // also position of a and b doesn't matter
            res ^= num;
        }

        res
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
