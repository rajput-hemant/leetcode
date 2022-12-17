# 300. Longest Increasing Subsequence [![share]](https://leetcode.com/problems/longest-increasing-subsequence/)

![][medium]

## Problem Statement:

Given an integer array `nums`, return the length of the longest strictly increasing subsequence.

### Example 1:

```
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
```

### Example 2:

```
Input: nums = [0,1,0,3,2,3]
Output: 4
```

### Example 3:

```
Input: nums = [7,7,7,7,7,7,7]
Output: 1
```

### Constraints:

- 1 <= nums.length <= 2500
- -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>

**Follow up**: Can you come up with an algorithm that runs in O(n log(n)) time complexity?

## Solution:

::: code-group

```java
public int lengthOfLIS(int[] nums) {
  int[] lis = new int[nums.length];
  lis[0] = 1;
  for (int i = 1; i < lis.length; i++) {
  lis[i] = 1;
  for (int j = 0; j < i; j++) {
      if (nums[i] > nums[j])
      lis[i] = Math.max(lis[i], lis[j] + 1);
  }
  }
  int res = lis[0];
  for (int i : lis)
  res = Math.max(i, res);
  return res;
}
```

:::

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
