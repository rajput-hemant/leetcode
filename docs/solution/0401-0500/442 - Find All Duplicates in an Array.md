# 442. Find All Duplicates in an Array [![share]](https://leetcode.com/problems/find-all-duplicates-in-an-array/)

![][medium]

## Problem Statement:

Given an integer array `nums` of length `n` where all the integers of `nums` are in the range `[1, n]` and each integer appears **once** or **twice**, return an array of all the integers that appears **twice**.

You must write an algorithm that runs in `O(n)` time and uses only constant extra space.

### Example 1:

```
Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
```

### Example 2:

```
Input: nums = [1,1,2]
Output: [1]
```

### Example 3:

```
Input: nums = [1]
Output: []
```

### Constraints:

- n == nums.length
- 1 <= n <= 10<sup>5</sup>
- 1 <= nums[i] <= n
- Each element in nums appears **once** or **twice**.

## Solution:

### [_Java_](#)

```java
public List<Integer> findDuplicates(int[] nums) {
  ArrayList<Integer> list = new ArrayList<>();
  for (int i = 0; i < nums.length; i++) {
    int n = Math.abs(nums[i]);
    if (nums[n - 1] < 0)
      list.add(n);
    else
      nums[n - 1] = -nums[n - 1];
  }
return list;
}
```

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
