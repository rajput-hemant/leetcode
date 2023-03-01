# 448. Find All Numbers Disappeared in an Array [![share]](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)

![][easy]

## Problem Statement

<p>Given an array <code>nums</code> of <code>n</code> integers where <code>nums[i]</code> is in the range <code>[1, n]</code>, return <em>an array of all the integers in the range</em> <code>[1, n]</code> <em>that do not appear in</em> <code>nums</code>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
```

<p><strong class="example">Example 2:</strong></p>

```
Input: nums = [1,1]
Output: [2]
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == nums.length</code></li>
<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
<li><code>1 &lt;= nums[i] &lt;= n</code></li>
</ul>
<p> </p>
<p><strong>Follow up:</strong> Could you do it without extra space and in <code>O(n)</code> runtime? You may assume the returned list does not count as extra space.</p>

<details>
<summary>

#### _Click to open Hints_

</summary>

- This is a really easy problem if you decide to use additional memory. For those trying to write an initial solution using additional memory, think <b>counters!</b>
- However, the trick really is to not use any additional space than what is already available to use. Sometimes, multiple passes over the input array help find the solution. However, there's an interesting piece of information in this problem that makes it easy to re-use the input array itself for the solution.
- The problem specifies that the numbers in the array will be in the range [1, n] where n is the number of elements in the array. Can we use this information and modify the array in-place somehow to find what we need?

</details>

## Solutions

### [_Rust_](find_all_nums_disappeared_in_an_array.rs)

```rs [Rust]
impl Solution {
    pub fn find_disappeared_numbers(nums: Vec<i32>) -> Vec<i32> {
        let mut res = Vec::new();
        let mut map = std::collections::HashMap::new();

        for i in 0..nums.len() {
            map.insert(nums[i], i);
        }

        for i in 1..=nums.len() {
            if !map.contains_key(&(i as i32)) {
                res.push(i as i32);
            }
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
