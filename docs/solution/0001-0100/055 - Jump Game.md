# 55. Jump Game [![share]](https://leetcode.com/problems/jump-game)

![][medium]

## Problem Statement:

You are given an integer array `nums`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.

Return `true` if you can reach the last index, or `false` otherwise.

### Example 1:

```
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

### Example 2:

```
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
```

### Constraints:

- 1 <= nums.length <= 10<sup>4</sup>
- 0 <= nums[i] <= 10<sup>5</sup>

## Soltuion:

### [_Java_](#)

```java
public boolean canJump(int[] nums) {
  int n = nums.length,
      max = 0;
  if (n == 1)
    return true;
  for (int i = 0; i < n - 1 && max >= i; i++) {
    if (max < i + nums[i])
      max = i + nums[i];
    if (max >= n - 1)
      return true;
  }
  return false;
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
