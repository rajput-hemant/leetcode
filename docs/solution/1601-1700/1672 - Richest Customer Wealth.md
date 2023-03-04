# 1672. Richest Customer Wealth [![share]](https://leetcode.com/problems/richest-customer-wealth/)

![][easy]

## Problem Statement

<p>You are given an <code>m x n</code> integer grid <code>accounts</code> where <code>accounts[i][j]</code> is the amount of money the <code>i​​​​​<sup>​​​​​​th</sup>​​​​</code> customer has in the <code>j​​​​​<sup>​​​​​​th</sup></code>​​​​ bank. Return<em> the <strong>wealth</strong> that the richest customer has.</em></p>
<p>A customer's <strong>wealth</strong> is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum <strong>wealth</strong>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
```

<p><strong class="example">Example 2:</strong></p>

````
Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation:
1st customer has wealth = 6
2nd customer has wealth = 10
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.```

<p><strong class="example">Example 3:</strong></p>

````

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17

````

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>m == accounts.length</code></li>
<li><code>n == accounts[i].length</code></li>
<li><code>1 &lt;= m, n &lt;= 50</code></li>
<li><code>1 &lt;= accounts[i][j] &lt;= 100</code></li>
</ul>


::: details _Click to open Hints_

- Calculate the wealth of each customer
- Find the maximum element in array.

:::

## Solution:

::: code-group

```rs [Rust]
impl Solution {
    pub fn maximum_wealth(accounts: Vec<Vec<i32>>) -> i32 {
        let mut max = 0;

        for account in accounts {
            let mut sum = 0;
            for money in account {
                sum += money;
            }
            if sum > max {
                max = sum;
            }
        }
        max
    }
}

````

:::

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://graph.org/file/3ea5234dda646b71c574a.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
