# 219. Contains Duplicate II [![share]](https://leetcode.com/problems/contains-duplicate-ii/)

![][easy]

## Problem Statement

<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <code>true</code> <em>if there are two <strong>distinct indices</strong> </em><code>i</code><em> and </em><code>j</code><em> in the array such that </em><code>nums[i] == nums[j]</code><em> and </em><code>abs(i - j) &lt;= k</code>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: nums = [1,2,3,1], k = 3
Output: true
```

<p><strong class="example">Example 2:</strong></p>

```
Input: nums = [1,0,1,1], k = 1
Output: true
```

<p><strong class="example">Example 3:</strong></p>

```
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
<li><code>0 &lt;= k &lt;= 10<sup>5</sup></code></li>
</ul>

## Solution:

::: code-group

```go [Go]
package main

func containsNearbyDuplicate(nums []int, k int) bool {
	if len(nums) <= 1 {
		return false
	}

	set := make(map[int]int)

	// iterate over the array
	for i, v := range nums {
		// check if the value is in the set
		if _, ok := set[v]; ok {
			// if the value is in the set,
			// check if the difference between the current index and the index of the value in the set
			// is less than or equal to k
			if i-set[v] <= k {
				return true
			}
		}
		// add the value to the set
		set[v] = i
	}

	return false
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
