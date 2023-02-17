# 1470. Shuffle the Array [![share]](https://leetcode.com/problems/shuffle-the-array/)

![][easy]

## Problem Statement

<p>Given the array <code>nums</code> consisting of <code>2n</code> elements in the form <code>[x<sub>1</sub>,x<sub>2</sub>,...,x<sub>n</sub>,y<sub>1</sub>,y<sub>2</sub>,...,y<sub>n</sub>]</code>.</p>
<p><em>Return the array in the form</em> <code>[x<sub>1</sub>,y<sub>1</sub>,x<sub>2</sub>,y<sub>2</sub>,...,x<sub>n</sub>,y<sub>n</sub>]</code>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```

Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7]
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
```

<p><strong class="example">Example 2:</strong></p>

```

Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]
```

<p><strong class="example">Example 3:</strong></p>

```

Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 500</code></li>
<li><code>nums.length == 2n</code></li>
<li><code>1 &lt;= nums[i] &lt;= 10^3</code></li>
</ul>

::: details _Click to open Hints_

- Use two pointers to create the new array of 2n elements. The first starting at the beginning and the other starting at (n+1)th position. Alternate between them and create the new array.

:::

## Solution:

::: code-group

```go [Go]
package main

func shuffle(nums []int, n int) []int {
	res := make([]int, n*2)

	for i := 0; i < n; i++ {
		// at even indices, put the slice of the array from 0 to n
		res[i*2] = nums[i]
		// at odd indices, put the slice of the array from n to the end
		res[i*2+1] = nums[n+i]
	}

	return res
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
