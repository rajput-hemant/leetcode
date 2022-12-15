# 704. Binary Search [![share]](https://leetcode.com/problems/binary-search)

![][easy]

## Problem Statement:

Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

### Example 1:

```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
```

### Example 2:

```
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
```

### Constraints:

- 1 <= nums.length <= 10<sup>4</sup>
- -10<sup>4</sup> < nums[i], target < 10<sup>4</sup>
- All the integers in nums are unique.
- nums is sorted in ascending order.

## Solution:

### [_Java_](#)

```java
public int search(int[] nums, int target) {
  int low = 0,
      mid = 0,
      high = nums.length - 1;
  while (low <= high) {
    mid = low + (high - low) / 2;
    if (nums[mid] == target)
      return mid;
    else if (nums[mid] < target)
      low = mid + 1;
    else
      high = mid - 1;
  }
  return -1;
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
