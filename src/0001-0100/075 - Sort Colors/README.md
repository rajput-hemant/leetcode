# 75. Sort Colors [![share]](https://leetcode.com/problems/sort-colors)

![][medium]

## Problem Statement:

Given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

### Example 1:

```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

### Example 2:

```
Input: nums = [2,0,1]
Output: [0,1,2]
```

### Constraints:

- n == nums.length
- 1 <= n <= 300
- nums[i] is either 0, 1, or 2.

**Follow up:** Could you come up with a one-pass algorithm using only constant extra space?

## Solution:

### [_Java_](./SortColors.java)

```java
public void sortColors(int[] nums) {
  int low = 0, mid = 0, high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] == 0) {
      swap(nums, low, mid);
      low++;
      mid++;
    } else if (nums[mid] == 1)
      mid++;
    else {
      swap(nums, mid, high);
      high--;
    }
  }
}

private void swap(int[] nums, int a, int b) {
  int temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

// BruteForce
public void sortColors1(int[] nums) {
  int zeroes = 0, ones = 0, twos = 0;
  for (int i : nums) {
    if (i == 0)
      zeroes++;
    if (i == 1)
      ones++;
    if (i == 2)
      twos++;
  }
  for (int i = 0; i < nums.length; i++) {
    if (zeroes != 0) {
      nums[i] = 0;
      zeroes--;
      continue;
    } else if (ones != 0) {
      nums[i] = 1;
      ones--;
      continue;
    } else if (twos != 0) {
      nums[i] = 2;
      twos--;
    }
  }
}
```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[medium]: https://img.shields.io/badge/Difficulty-Medium-green.svg
