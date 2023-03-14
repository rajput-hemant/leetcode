# 2187. Minimum Time to Complete Trips [![share]](https://leetcode.com/problems/minimum-time-to-complete-trips/)

![][medium]

## Problem Statement

<p>You are given an array <code>time</code> where <code>time[i]</code> denotes the time taken by the <code>i<sup>th</sup></code> bus to complete <strong>one trip</strong>.</p>
<p>Each bus can make multiple trips <strong>successively</strong>; that is, the next trip can start <strong>immediately after</strong> completing the current trip. Also, each bus operates <strong>independently</strong>; that is, the trips of one bus do not influence the trips of any other bus.</p>
<p>You are also given an integer <code>totalTrips</code>, which denotes the number of trips all buses should make <strong>in total</strong>. Return <em>the <strong>minimum time</strong> required for all buses to complete <strong>at least</strong> </em><code>totalTrips</code><em> trips</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: time = [1,2,3], totalTrips = 5
Output: 3
Explanation:
- At time t = 1, the number of trips completed by each bus are [1,0,0].
  The total number of trips completed is 1 + 0 + 0 = 1.
- At time t = 2, the number of trips completed by each bus are [2,1,0].
  The total number of trips completed is 2 + 1 + 0 = 3.
- At time t = 3, the number of trips completed by each bus are [3,1,1].
  The total number of trips completed is 3 + 1 + 1 = 5.
So the minimum time needed for all buses to complete at least 5 trips is 3.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: time = [2], totalTrips = 1
Output: 2
Explanation:
There is only one bus, and it will complete its first trip at t = 2.
So the minimum time needed to complete 1 trip is 2.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= time.length &lt;= 10<sup>5</sup></code></li>
<li><code>1 &lt;= time[i], totalTrips &lt;= 10<sup>7</sup></code></li>
</ul>

<details>
<summary>

#### _Click to open Hints_

</summary>

- For a given amount of time, how can we count the total number of trips completed by all buses within that time?
- Consider using binary search.

</details>

## Solutions

### [_Rust_](minimum_time_to_complete_trips.rs)

```rs [Rust]
impl Solution {
    pub fn minimum_time(time: Vec<i32>, total_trips: i32) -> i64 {
        let mut time = time;
        time.sort();

        let mut left = 0_i64;
        let mut right = 100_000_000_000_000;
        let mut ans = right;

        while left < right {
            let mid = (left + right) / 2;
            let mut trips = 0;
            for i in 0..time.len() {
                trips += mid / time[i] as i64;
            }
            if trips >= total_trips as i64 {
                ans = ans.min(mid);
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        ans
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
