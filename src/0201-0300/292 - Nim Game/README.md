# 292. Nim Game [![share]](https://leetcode.com/problems/nim-game/)

![][easy]

## Problem Statement

<p>You are playing the following Nim Game with your friend:</p>
<ul>
<li>Initially, there is a heap of stones on the table.</li>
<li>You and your friend will alternate taking turns, and <strong>you go first</strong>.</li>
<li>On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.</li>
<li>The one who removes the last stone is the winner.</li>
</ul>
<p>Given <code>n</code>, the number of stones in the heap, return <code>true</code><em> if you can win the game assuming both you and your friend play optimally, otherwise return </em><code>false</code>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: n = 4
Output: false
Explanation: These are the possible outcomes:
1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
In all outcomes, your friend wins.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: n = 1
Output: true
```

<p><strong class="example">Example 3:</strong></p>

```
Input: n = 2
Output: true
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

<details>
<summary>

#### _Click to open Hints_

</summary>

- If there are 5 stones in the heap, could you figure out a way to remove the stones such that you will always be the winner?

</details>

## Solutions

### [_Rust_](nim_game.rs)

```rs [Rust]
impl Solution {
    pub fn can_win_nim(n: i32) -> bool {
        // if n is divisible by 4, then the first player will always lose
        if n % 4 == 0 {
            return false;
        }

        true
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
