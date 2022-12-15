# 1480. Running Sum of 1d Array [![share]](https://leetcode.com/problems/running-sum-of-1d-array/)

![][easy]

## Problem Statement:

Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]…nums[i])`.

Return the running sum of `nums`.

### Example 1:

```
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
```

### Explanation:

```
Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
```

### Example 2:

```
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
```

### Explanation:

```
Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
```

### Example 3:

```
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
```

### Constraints:

- 1 <= nums.length <= 1000
- -10<sup>6</sup> <= nums[i] <= 10<sup>6</sup>

## Solutions:

### [_Java_](#)

```java
public class RunningSumOfOneDimensionalArray {
    public static int[] runningSum(int[] nums) {
        int sum = 0;
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            nums[i] = sum;
        }
        return nums;
    }

    public static void main(String[] args) {
        int[] nums = { 1, 1, 1, 1, 1 };
        for (int i : runningSum(nums))
            System.out.print(i + " ");
    }
}
```

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
