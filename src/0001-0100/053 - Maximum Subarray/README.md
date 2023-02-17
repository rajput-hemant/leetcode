# 53. Maximum Subarray [![share]](https://leetcode.com/problems/maximum-subarray/)

![][medium]

## Problem Statement

<p>Given an integer array <code>nums</code>, find the <span data-keyword="subarray-nonempty">subarray</span> with the largest sum, and return <em>its sum</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
```

<p><strong class="example">Example 3:</strong></p>

```
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>
<p> </p>
<p><strong>Follow up:</strong> If you have figured out the <code>O(n)</code> solution, try coding another solution using the <strong>divide and conquer</strong> approach, which is more subtle.</p>

## Solutions

### [_Go_](maximum_subarray.go)

```go [Go]
package main

import "math"

func maxSubArray(nums []int) int {
	currSum, maxSum := 0, math.MinInt

	for _, num := range nums {
		currSum += num
		maxSum = int(math.Max(float64(maxSum), float64(currSum)))
		if currSum < 0 {
			currSum = 0
		}
	}

	return maxSum
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
