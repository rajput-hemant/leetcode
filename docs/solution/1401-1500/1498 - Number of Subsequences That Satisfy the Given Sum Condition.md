# 1498. Number of Subsequences That Satisfy the Given Sum Condition [![share]](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition)

![][medium]

## Problem Statement:

You are given an array of integers `nums` and an integer `target`.

Return the number of **non-empty** subsequences of `nums` such that the sum of the minimum and maximum element on it is less or equal to `target`. Since the answer may be too large, return it modulo <code>10<sup>9</sup> + 7.</code>

### Example 1:

```
Input: nums = [3,5,6,7], target = 9
Output: 4
Explanation: There are 4 subsequences that satisfy the condition.
[3] -> Min value + max value <= target (3 + 3 <= 9)
[3,5] -> (3 + 5 <= 9)
[3,5,6] -> (3 + 6 <= 9)
[3,6] -> (3 + 6 <= 9)
```

### Example 2:

```
Input: nums = [3,3,6,8], target = 10
Output: 6
Explanation: There are 6 subsequences that satisfy the condition. (nums can have repeated numbers).
[3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]
```

### Example 3:

```
Input: nums = [2,3,3,4,6,7], target = 12
Output: 61
Explanation: There are 63 non-empty subsequences, two of them do not satisfy the condition ([6,7], [7]).
Number of valid subsequences (63 - 2 = 61).
```

### Constraints:

- 1 <= nums.length <= 10<sup>5</sup>
- 1 <= nums[i] <= 10<sup>6</sup>
- 1 <= target <= 10<sup>6</sup>

## Solutions:

### [_Java_](#)

```java
public int numSubseq(int[] nums, int target) {
  Arrays.sort(nums);
  int count = 0,
      len = nums.length,
      left = 0,
      right = len - 1;
  int[] pow2 = new int[len];
  pow2[0] = 1;
  for (int i = 1; i < len; i++)
    pow2[i] = pow2[i - 1] * 2 % 1000000007;
  while (left <= right) {
    if (nums[left] + nums[right] > target)
      right--;
    else {
      count += pow2[right - left++];
      count %= 1000000007;
    }
  }
  return count;
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
