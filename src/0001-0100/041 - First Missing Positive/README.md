# 41. First Missing Positive [![share]](https://leetcode.com/problems/first-missing-positive/)

![][hard]

## Problem Statement

<p>Given an unsorted integer array <code>nums</code>, return the smallest missing positive integer.</p>
<p>You must implement an algorithm that runs in <code>O(n)</code> time and uses <code>O(1)</code> auxiliary space.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
```

<p><strong class="example">Example 3:</strong></p>

```
Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

<details>
<summary>

#### _Click to open Hints_

</summary>

- Think about how you would solve the problem in non-constant space. Can you apply that logic to the existing space?
- We don't care about duplicates or non-positive integers
- Remember that O(2n) = O(n)

</details>

## Solutions

### [_Go_](first_missing_positive.go)

```go [Go]
package main

func firstMissingPositive(nums []int) int {
	i := 0

	for i < len(nums) {
		if nums[i] > 0 && nums[i] <= len(nums) && nums[nums[i]-1] != nums[i] {
			nums[nums[i]-1], nums[i] = nums[i], nums[nums[i]-1]
		} else {
			i++
		}
	}

	for i, num := range nums {
		if num != i+1 {
			return i + 1
		}
	}

	return len(nums) + 1
}

```

### [_Rust_](first_missing_positive.rs)

```rs [Rust]
impl Solution {
    pub fn first_missing_positive(nums: Vec<i32>) -> i32 {
        let (mut nums, mut i) = (nums, 0);

        while i < nums.len() {
            let num = nums[i];

            // if the number is in the range [1, nums.len()] and not in the right position
            // swap it with the number at the right position
            if num > 0 && num <= nums.len() as i32 && num != nums[num as usize - 1] {
                nums.swap(i, num as usize - 1);
            } else {
                i += 1;
            }
        }

        // find the first missing positive number
        for (i, num) in nums.iter().enumerate() {
            if num != &(i as i32 + 1) {
                return i as i32 + 1;
            }
        }

        nums.len() as i32 + 1
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
