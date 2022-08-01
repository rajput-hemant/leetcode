# 4. Median of Two Sorted Arrays [![share]](https://leetcode.com/problems/median-of-two-sorted-arrays)

![][hard]

## Problem Statement:

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median** of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

### Example 1:

```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

### Example 2:

```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```

### Constraints:

- nums1.length == m
- nums2.length == n
- 0 <= m <= 1000
- 0 <= n <= 1000
- 1 <= m + n <= 2000
- -10<sup>6</sup> <= nums1[i], nums2[i] <= 10<sup>6</sup>

## Solutions

### [_Java_](./MedianOfTwoSortedArrays.java)

```java
public class MedianOfTwoSortedArrays {
  public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
      int[] merged = new int[nums1.length + nums2.length];
      int startnums1 = 0, startnums2 = 0, i = 0;
      while (startnums1 < nums1.length && startnums2 < nums2.length) {
          if (nums1[startnums1] < nums2[startnums2])
              merged[i++] = nums1[startnums1++];
          else
              merged[i++] = nums2[startnums2++];
      }
      while (startnums1 < nums1.length)
          merged[i++] = nums1[startnums1++];
      while (startnums2 < nums2.length)
          merged[i++] = nums2[startnums2++];
      double median = 0;
      int mid = merged.length / 2;
      if (merged.length % 2 == 0)
          median = (double) (merged[mid] + merged[mid - 1]) / 2;
      else
          median = (double) merged[mid];
      return median;
  }
}
```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg