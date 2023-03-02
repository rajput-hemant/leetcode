# 2469. Convert the Temperature [![share]](https://leetcode.com/problems/convert-the-temperature/)

![][easy]

## Problem Statement

<p>You are given a non-negative floating point number rounded to two decimal places <code>celsius</code>, that denotes the <strong>temperature in Celsius</strong>.</p>
<p>You should convert Celsius into <strong>Kelvin</strong> and <strong>Fahrenheit</strong> and return it as an array <code>ans = [kelvin, fahrenheit]</code>.</p>
<p>Return <em>the array <code>ans</code>. </em>Answers within <code>10<sup>-5</sup></code> of the actual answer will be accepted.</p>
<p><strong>Note that:</strong></p>
<ul>
<li><code>Kelvin = Celsius + 273.15</code></li>
<li><code>Fahrenheit = Celsius * 1.80 + 32.00</code></li>
</ul>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: celsius = 36.50
Output: [309.65000,97.70000]
Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: celsius = 122.11
Output: [395.26000,251.79800]
Explanation: Temperature at 122.11 Celsius converted in Kelvin is 395.26 and converted in Fahrenheit is 251.798.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt;= celsius &lt;= 1000</code></li>
</ul>

<details>
<summary>

#### _Click to open Hints_

</summary>

- Implement formulas that are given in the statement.

</details>

## Solutions

### [_Rust_](convert_the_temperature.rs)

```rs [Rust]
impl Solution {
    pub fn convert_temperature(celsius: f64) -> Vec<f64> {
        let fahrenheit = celsius * 1.8 + 32.0;

        let kelvin = celsius + 273.15;

        vec![fahrenheit, kelvin]
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
