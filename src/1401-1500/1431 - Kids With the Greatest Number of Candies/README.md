# 1431. Kids With the Greatest Number of Candies [![share]](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/)

![][easy]

## Problem Statement

<p>There are <code>n</code> kids with candies. You are given an integer array <code>candies</code>, where each <code>candies[i]</code> represents the number of candies the <code>i<sup>th</sup></code> kid has, and an integer <code>extraCandies</code>, denoting the number of extra candies that you have.</p>
<p>Return <em>a boolean array </em><code>result</code><em> of length </em><code>n</code><em>, where </em><code>result[i]</code><em> is </em><code>true</code><em> if, after giving the </em><code>i<sup>th</sup></code><em> kid all the </em><code>extraCandies</code><em>, they will have the <strong>greatest</strong> number of candies among all the kids</em><em>, or </em><code>false</code><em> otherwise</em>.</p>
<p>Note that <strong>multiple</strong> kids can have the <strong>greatest</strong> number of candies.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true]
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false]
Explanation: There is only 1 extra candy.
Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
```

<p><strong class="example">Example 3:</strong></p>

```
Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == candies.length</code></li>
<li><code>2 &lt;= n &lt;= 100</code></li>
<li><code>1 &lt;= candies[i] &lt;= 100</code></li>
<li><code>1 &lt;= extraCandies &lt;= 50</code></li>
</ul>

<details>
<summary>

#### _Click to open Hints_

</summary>

- Use greedy approach. For each kid check if candies[i] + extraCandies ≥ maximum in Candies[i].

</details>

## Solutions

### [_Go_](kids_with_the_greatest_number_of_candies.go)

```go [Go]
package main

func kidsWithCandies(candies []int, extraCandies int) []bool {
	max := 0

	for _, candy := range candies {
		if candy > max {
			max = candy
		}
	}

	result := make([]bool, len(candies))

	for i, candy := range candies {
		if candy+extraCandies >= max {
			result[i] = true
		}
	}

	return result
}

```

### [_Rust_](kids_with_the_greatest_number_of_candies.rs)

```rs [Rust]
impl Solution {
    pub fn kids_with_candies(candies: Vec<i32>, extra_candies: i32) -> Vec<bool> {
        let mut max = 0;

        for i in 0..candies.len() {
            if candies[i] > max {
                max = candies[i];
            }
        }

        let mut result = Vec::new();

        for i in 0..candies.len() {
            if candies[i] + extra_candies >= max {
                result.push(true);
            } else {
                result.push(false);
            }
        }

        result
    }
}

```

### [_Java_](KidsWithTheGreatestNumberOfCandies.java)

```java [Java]
import java.util.ArrayList;
import java.util.List;

class Solution {
  public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
    int max = 0;

    for (int candy : candies) {
      if (candy > max) {
        max = candy;
      }
    }

    List<Boolean> res = new ArrayList<>();

    for (int i = 0; i < candies.length; i++) {
      if (candies[i] + extraCandies >= max) {
        res.add(true);
      } else {
        res.add(false);
      }
    }

    return res;
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
