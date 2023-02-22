# 540. Single Element in a Sorted Array [![share]](https://leetcode.com/problems/single-element-in-a-sorted-array/)

![][medium]

## Problem Statement

<p>You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.</p>
<p>Return <em>the single element that appears only once</em>.</p>
<p>Your solution must run in <code>O(log n)</code> time and <code>O(1)</code> space.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
```

<p><strong class="example">Example 2:</strong></p>

```
Input: nums = [3,3,7,7,10,11,11]
Output: 10
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
<li><code>0 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>

## Solutions

### [_Go_](single_element_in_a_sorted_array.go)

```go [Go]
package main

func singleNonDuplicate(nums []int) int {
	res := 0

	for _, num := range nums {
		// a ^ a = 0
		// a ^ a ^ a = a
		// a ^ a ^ b = b
		// also position of a and b doesn't matter
		res ^= num
	}

	return res
}

```

### [_Rust_](single_element_in_a_sorted_array.rs)

```rs [Rust]
impl Solution {
    pub fn single_non_duplicate(nums: Vec<i32>) -> i32 {
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
