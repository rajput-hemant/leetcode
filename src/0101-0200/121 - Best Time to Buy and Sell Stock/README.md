# 121. Best Time to Buy and Sell Stock [![share]](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

![][easy]

## Problem Statement

<p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p>
<p>You want to maximize your profit by choosing a <strong>single day</strong> to buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.</p>
<p>Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= prices.length &lt;= 10<sup>5</sup></code></li>
<li><code>0 &lt;= prices[i] &lt;= 10<sup>4</sup></code></li>
</ul>

## Solutions

### [_Rust_](best_time_to_buy_and_sell_stock.rs)

```rs [Rust]
impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        let (mut profit, mut min) = (0, prices[0]);

        // loop through the vector, starting at 1
        for i in 1..prices.len() {
            // if the current value is less than the minimum value, set the minimum value to the current value
            if prices[i] < min {
                min = prices[i];
            }
            // else if the current value minus the minimum value is greater than the current profit, set the profit to the current value minus the minimum value
            else if prices[i] - min > profit {
                profit = prices[i] - min;
            }
        }

        profit
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
