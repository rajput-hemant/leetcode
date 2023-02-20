# 228. Summary Ranges [![share]](https://leetcode.com/problems/summary-ranges/)

![][easy]

## Problem Statement

<p>You are given a <strong>sorted unique</strong> integer array <code>nums</code>.</p>
<p>A <strong>range</strong> <code>[a,b]</code> is the set of all integers from <code>a</code> to <code>b</code> (inclusive).</p>
<p>Return <em>the <strong>smallest sorted</strong> list of ranges that <strong>cover all the numbers in the array exactly</strong></em>. That is, each element of <code>nums</code> is covered by exactly one of the ranges, and there is no integer <code>x</code> such that <code>x</code> is in one of the ranges but not in <code>nums</code>.</p>
<p>Each range <code>[a,b]</code> in the list should be output as:</p>
<ul>
<li><code>"a-&gt;b"</code> if <code>a != b</code></li>
<li><code>"a"</code> if <code>a == b</code></li>
</ul>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: nums = [0,1,2,4,5,7]
Output: ["0-&gt;2","4-&gt;5","7"]
Explanation: The ranges are:
[0,2] --&gt; "0-&gt;2"
[4,5] --&gt; "4-&gt;5"
[7,7] --&gt; "7"
```

<p><strong class="example">Example 2:</strong></p>

```
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2-&gt;4","6","8-&gt;9"]
Explanation: The ranges are:
[0,0] --&gt; "0"
[2,4] --&gt; "2-&gt;4"
[6,6] --&gt; "6"
[8,9] --&gt; "8-&gt;9"
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt;= nums.length &lt;= 20</code></li>
<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
<li>All the values of <code>nums</code> are <strong>unique</strong>.</li>
<li><code>nums</code> is sorted in ascending order.</li>
</ul>

## Solutions

### [_Go_](summary_ranges.go)

```go [Go]
package main

import (
	"fmt"
)

func summaryRanges(nums []int) []string {
	list := []string{}
	n := len(nums)

	for i := 0; i < n; i++ {
		start := nums[i]
		println(i)
		for i+1 < n && nums[i+1] == nums[i]+1 {
			i++
		}
		if start == nums[i] {
			list = append(list, fmt.Sprint(start))
		} else {
			list = append(list, fmt.Sprint(start, "->", nums[i]))
		}
	}

	return list
}

```

### [_Rust_](summary_ranges.rs)

```rs [Rust]
impl Solution {
    pub fn summary_ranges(nums: Vec<i32>) -> Vec<String> {
        let mut list = Vec::new();
        let n = nums.len();
        let mut i = 0;

        while i < n {
            let start = nums[i];

            while i + 1 < n && nums[i + 1] == nums[i] + 1 {
                i += 1;
            }

            if start == nums[i] {
                list.push(format!("{}", start));
            } else {
                list.push(format!("{}->{}", start, nums[i]));
            }

            i += 1;
        }

        list
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
