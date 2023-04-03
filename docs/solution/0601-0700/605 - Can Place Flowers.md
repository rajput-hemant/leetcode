# 605. Can Place Flowers [![share]](https://leetcode.com/problems/can-place-flowers/)

![][easy]

## Problem Statement

<p>You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in <strong>adjacent</strong> plots.</p>
<p>Given an integer array <code>flowerbed</code> containing <code>0</code>'s and <code>1</code>'s, where <code>0</code> means empty and <code>1</code> means not empty, and an integer <code>n</code>, return <code>true</code> <em>if</em> <code>n</code> <em>new flowers can be planted in the</em> <code>flowerbed</code> <em>without violating the no-adjacent-flowers rule and</em> <code>false</code> <em>otherwise</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
```

<p><strong class="example">Example 2:</strong></p>

```
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= flowerbed.length &lt;= 2 * 10<sup>4</sup></code></li>
<li><code>flowerbed[i]</code> is <code>0</code> or <code>1</code>.</li>
<li>There are no two adjacent flowers in <code>flowerbed</code>.</li>
<li><code>0 &lt;= n &lt;= flowerbed.length</code></li>
</ul>

## Solution:

::: code-group

```py [Python]
class Solution:
    def canPlaceFlowers(self, flowerbed: list[int], n: int) -> bool:
        empty = 0 if flowerbed[0] else 1
        for f in flowerbed:
            if f:
                n -= int((empty - 1) / 2)
                empty = 0
            else:
                empty += 1

        n -= empty // 2
        return n <= 0

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
