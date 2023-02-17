# 78. Subsets [![share]](https://leetcode.com/problems/subsets/)

![][medium]

## Problem Statement

<p>Given an integer array <code>nums</code> of <strong>unique</strong> elements, return <em>all possible</em> <span data-keyword="subset"><em>subsets</em></span> <em>(the power set)</em>.</p>
<p>The solution set <strong>must not</strong> contain duplicate subsets. Return the solution in <strong>any order</strong>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

<p><strong class="example">Example 2:</strong></p>

```
Input: nums = [0]
Output: [[],[0]]
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10</code></li>
<li><code>-10 &lt;= nums[i] &lt;= 10</code></li>
<li>All the numbers of <code>nums</code> are <strong>unique</strong>.</li>
</ul>

## Solutions

### [_Go_](subsets.go)

```go [Go]
package main

func subsets(nums []int) [][]int {
	res := make([][]int, 0)
	curr_subset := make([]int, 0)

	var backtrack func(i int)

	backtrack = func(i int) {
		println(i)
		if i >= len(nums) {
			curr_dup := make([]int, len(curr_subset))
			copy(curr_dup, curr_subset)
			res = append(res, curr_dup)
			return
		}

		// include the current element
		curr_subset = append(curr_subset, nums[i])
		backtrack(i + 1)

		// exclude the current element
		curr_subset = curr_subset[:len(curr_subset)-1] // pop the last element
		backtrack(i + 1)
	}

	backtrack(0)

	return res
}

```

### [_Python_](subsets.py)

```py [Python]
class Solution:
    def subsets(self, nums: list[int]) -> list[list[int]]:
        res, curr = [], []

        def backtrack(i: int) -> None:
            if i >= len(nums):
                print(curr.copy())
                res.append(curr.copy())
                return

            # include the current element
            curr.append(nums[i])
            backtrack(i + 1)

            # exclude the current element
            curr.pop()
            backtrack(i + 1)

        backtrack(0)

        return res

```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://graph.org/file/3ea5234dda646b71c574a.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
