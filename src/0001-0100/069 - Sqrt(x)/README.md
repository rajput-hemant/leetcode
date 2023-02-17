# 69. Sqrt(x) [![share]](https://leetcode.com/problems/sqrtx/)

![][easy]

## Problem Statement

<p>Given a non-negative integer <code>x</code>, return <em>the square root of </em><code>x</code><em> rounded down to the nearest integer</em>. The returned integer should be <strong>non-negative</strong> as well.</p>
<p>You <strong>must not use</strong> any built-in exponent function or operator.</p>
<ul>
<li>For example, do not use <code>pow(x, 0.5)</code> in c++ or <code>x ** 0.5</code> in python.</li>
</ul>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt;= x &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

<details>
<summary>

#### _Click to open Hints_

</summary>

- Try exploring all integers. (Credits: @annujoshi)
- Use the sorted property of integers to reduced the search space. (Credits: @annujoshi)

</details>

## Solutions

### [_Go_](sqrt_x.go)

```go [Go]
package main

func mySqrt(x int) int {
	start := 0
	end := x

	for start < end {
		// this is to floor the mid value
		// mid of 8 will be 4 , (8+1)/2 = 4.5
		// mid of 9 will be 5 , (9+1)/2 = 5
		mid := start + (end-start+1)/2
		if mid*mid > x {
			end = mid - 1
		} else {
			start = mid
		}
	}

	return end
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
