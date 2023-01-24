# 35. Search Insert Position [![share]](https://leetcode.com/problems/search-insert-position/)

![][easy]

## Problem Statement

<p>Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.</p>
<p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: nums = [1,3,5,6], target = 5
Output: 2
```

<p><strong class="example">Example 2:</strong></p>

```
Input: nums = [1,3,5,6], target = 2
Output: 1
```

<p><strong class="example">Example 3:</strong></p>

```
Input: nums = [1,3,5,6], target = 7
Output: 4
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
<li><code>nums</code> contains <strong>distinct</strong> values sorted in <strong>ascending</strong> order.</li>
<li><code>-10<sup>4</sup> &lt;= target &lt;= 10<sup>4</sup></code></li>
</ul>

## Solutions

### [_Python_](solution.py)

```py [Python]
class Solution:
    def searchInsert(self, nums: list[int], target: int) -> int:
        if target in nums:
            return nums.index(target)
        else:
            nums.append(target)
            nums.sort()
            return nums.index(target)

        # Using binary search
        # start = 0
        # end = len(nums) - 1
        # while start <= end:
        #     mid = (start + end) // 2
        #     if nums[mid] == target:
        #         return mid
        #     elif nums[mid] < target:
        #         start = mid + 1
        #     else:
        #         end = mid - 1
        # return start

```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://graph.org/file/3ea5234dda646b71c574a.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
