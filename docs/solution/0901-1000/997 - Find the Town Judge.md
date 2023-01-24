# 997. Find the Town Judge [![share]](https://leetcode.com/problems/find-the-town-judge/)

![][easy]

## Problem Statement

<p>In a town, there are <code>n</code> people labeled from <code>1</code> to <code>n</code>. There is a rumor that one of these people is secretly the town judge.</p>
<p>If the town judge exists, then:</p>
<ol>
<li>The town judge trusts nobody.</li>
<li>Everybody (except for the town judge) trusts the town judge.</li>
<li>There is exactly one person that satisfies properties <strong>1</strong> and <strong>2</strong>.</li>
</ol>
<p>You are given an array <code>trust</code> where <code>trust[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> representing that the person labeled <code>a<sub>i</sub></code> trusts the person labeled <code>b<sub>i</sub></code>.</p>
<p>Return <em>the label of the town judge if the town judge exists and can be identified, or return </em><code>-1</code><em> otherwise</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: n = 2, trust = [[1,2]]
Output: 2
```

<p><strong class="example">Example 2:</strong></p>

```
Input: n = 3, trust = [[1,3],[2,3]]
Output: 3
```

<p><strong class="example">Example 3:</strong></p>

```
Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 1000</code></li>
<li><code>0 &lt;= trust.length &lt;= 10<sup>4</sup></code></li>
<li><code>trust[i].length == 2</code></li>
<li>All the pairs of <code>trust</code> are <strong>unique</strong>.</li>
<li><code>a<sub>i</sub> != b<sub>i</sub></code></li>
<li><code>1 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt;= n</code></li>
</ul>

## Solution:

::: code-group

```py [Python]
class Solution:
    def findJudge(self, n: int, trust: list[list[int]]) -> int:
        count = [0] * (n + 1)
        for i, j in trust:
            count[i] -= 1
            count[j] += 1

        for i in range(1, n + 1):
            if count[i] == n - 1:
                return i

        return -1

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
