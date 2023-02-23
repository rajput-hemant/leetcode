# 1011. Capacity To Ship Packages Within D Days [![share]](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)

![][medium]

## Problem Statement

<p>A conveyor belt has packages that must be shipped from one port to another within <code>days</code> days.</p>
<p>The <code>i<sup>th</sup></code> package on the conveyor belt has a weight of <code>weights[i]</code>. Each day, we load the ship with packages on the conveyor belt (in the order given by <code>weights</code>). We may not load more weight than the maximum weight capacity of the ship.</p>
<p>Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within <code>days</code> days.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```

Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
Output: 15
Explanation: A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10

Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.
```

<p><strong class="example">Example 2:</strong></p>

```

Input: weights = [3,2,2,4,1,4], days = 3
Output: 6
Explanation: A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
1st day: 3, 2
2nd day: 2, 4
3rd day: 1, 4
```

<p><strong class="example">Example 3:</strong></p>

```

Input: weights = [1,2,3,1,1], days = 4
Output: 3
Explanation:
1st day: 1
2nd day: 2
3rd day: 3
4th day: 1, 1
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= days &lt;= weights.length &lt;= 5 * 10<sup>4</sup></code></li>
<li><code>1 &lt;= weights[i] &lt;= 500</code></li>
</ul>

::: details _Click to open Hints_

- Binary search on the answer. We need a function possible(capacity) which returns true if and only if we can do the task in D days.

:::

## Solution:

::: code-group

```rs [Rust]
impl Solution {
    pub fn ship_within_days(weights: Vec<i32>, days: i32) -> i32 {
        let mut min_cap = 0; // it is the max of all weights
        let mut max_cap = 0; // sum of all weights

        for w in weights.iter() {
            // assign the max of all weights to min_cap
            min_cap = min_cap.max(*w);
            // add all the weights to right
            max_cap += w;
        }

        // binary search
        while min_cap < max_cap {
            let mid = (min_cap + max_cap) / 2;
            let mut days_used = 1;
            let mut cur_cap = 0;

            // for each weight, if the current capacity + weight is greater than mid,
            // then we need to use another day
            // otherwise, we can use the current day
            for w in weights.iter() {
                if cur_cap + w > mid {
                    days_used += 1;
                    cur_cap = 0;
                }
                cur_cap += w;
            }

            // if days_used is greater than days, then we need to increase the capacity
            if days_used > days {
                min_cap = mid + 1;
            } else {
                max_cap = mid;
            }
        }

        min_cap
    }
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
