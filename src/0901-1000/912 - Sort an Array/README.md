# 912. Sort an Array [![share]](https://leetcode.com/problems/sort-an-array/)

![][medium]

## Problem Statement

<p>Given an array of integers <code>nums</code>, sort the array in ascending order and return it.</p>
<p>You must solve the problem <strong>without using any built-in</strong> functions in <code>O(nlog(n))</code> time complexity and with the smallest space complexity possible.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
```

<p><strong class="example">Example 2:</strong></p>

```
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 5 * 10<sup>4</sup></code></li>
<li><code>-5 * 10<sup>4</sup> &lt;= nums[i] &lt;= 5 * 10<sup>4</sup></code></li>
</ul>

## Solutions

### [_Go_](sort_an_array.go)

```go [Go]
package main

func sortArray(nums []int) []int {
	quickSort(nums, 0, len(nums)-1)

	return nums
}

func quickSort(nums []int, start, end int) {
	if start >= end {
		return
	}

	pivot := partition(nums, start, end)
	quickSort(nums, start, pivot-1)
	quickSort(nums, pivot+1, end)
}

func partition(arr []int, start int, end int) int {
	pivot := arr[end]
	i := start

	for j := start; j < end; j++ {
		if arr[j] < pivot {
			arr[i], arr[j] = arr[j], arr[i]
			i++
		}
	}

	arr[i], arr[end] = arr[end], arr[i]

	return i
}

```

### [_Rust_](sort_an_array.rs)

```rs [Rust]
impl Solution {
    pub fn sort_array(nums: Vec<i32>) -> Vec<i32> {
        let len = nums.len() as i32;
        let mut nums = nums;

        Self::quick_sort(&mut nums, 0, len - 1);

        nums
    }

    fn quick_sort(nums: &mut Vec<i32>, start: i32, end: i32) {
        if start >= end {
            return;
        }

        let pivot = Self::partition(nums, start, end);
        Self::quick_sort(nums, start, pivot - 1);
        Self::quick_sort(nums, pivot + 1, end);
    }

    fn partition(nums: &mut Vec<i32>, start: i32, end: i32) -> i32 {
        let pivot_index = Self::choose_pivot(nums, start as usize, end as usize);
        let pivot = nums[pivot_index as usize];
        nums.swap(pivot_index as usize, end as usize);

        let mut i = start;

        for j in start..end {
            if nums[j as usize] < pivot {
                nums.swap(i as usize, j as usize);
                i += 1;
            }
        }

        nums.swap(i as usize, end as usize);

        i
    }

		// this is to optimize the pivot selection
    fn choose_pivot(nums: &mut Vec<i32>, start: usize, end: usize) -> usize {
        let mid = start + (end - start) / 2;
        if nums[start] <= nums[mid] && nums[mid] <= nums[end] {
            mid
        } else if nums[start] <= nums[end] && nums[end] <= nums[mid] {
            end
        } else {
            start
        }
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
