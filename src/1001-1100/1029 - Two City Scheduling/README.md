# 1029. Two City Scheduling [![share]](https://leetcode.com/problems/two-city-scheduling/)

![][medium]

## Problem Statement

<p>A company is planning to interview <code>2n</code> people. Given the array <code>costs</code> where <code>costs[i] = [aCost<sub>i</sub>, bCost<sub>i</sub>]</code>, the cost of flying the <code>i<sup>th</sup></code> person to city <code>a</code> is <code>aCost<sub>i</sub></code>, and the cost of flying the <code>i<sup>th</sup></code> person to city <code>b</code> is <code>bCost<sub>i</sub></code>.</p>
<p>Return <em>the minimum cost to fly every person to a city</em> such that exactly <code>n</code> people arrive in each city.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: costs = [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation:
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
Output: 1859
```

<p><strong class="example">Example 3:</strong></p>

```
Input: costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
Output: 3086
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 * n == costs.length</code></li>
<li><code>2 &lt;= costs.length &lt;= 100</code></li>
<li><code>costs.length</code> is even.</li>
<li><code>1 &lt;= aCost<sub>i</sub>, bCost<sub>i</sub> &lt;= 1000</code></li>
</ul>

## Solutions

### [_Rust_](two_city_scheduling.rs)

```rs [Rust]
impl Solution {
    pub fn two_city_sched_cost(costs: Vec<Vec<i32>>) -> i32 {
        let mut costs = costs;

        let mut total = 0;
        let n = costs.len() / 2;

        // sort by a gain which company has
        // by sending a person to city A and not to city B
        costs.sort_by(|a, b| (a[0] - a[1]).cmp(&(b[0] - b[1])));

        // to optimize the company expenses,
        // send the first n persons to the city A
        // and the others to the city B
        for i in 0..n {
            total += costs[i][0] + costs[i + n][1]; // city A + city B
        }

        total
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
