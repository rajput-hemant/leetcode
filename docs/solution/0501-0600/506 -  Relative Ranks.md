# 506. Relative Ranks [![share]](https://leetcode.com/problems/relative-ranks)

![][easy]

## Problem Statement:

You are given an integer array `score` of size `n`, where `score[i]` is the score of the <code>i<sup>th</sup></code> athlete in a competition. All the scores are guaranteed to be **unique**.

The athletes are **placed** based on their scores, where the `1st` place athlete has the highest score, the 2nd place athlete has the `2nd` highest score, and so on. The placement of each athlete determines their rank:

- The <code>1<sup>st</sup></code> place athlete's rank is `"Gold Medal"`.
- The <code>2<sup>nd</sup></code> place athlete's rank is `"Silver Medal"`.
- The <code>3<sup>rd</sup></code> place athlete's rank is `"Bronze Medal"`.
- For the <code>4<sup>th</sup></code> place to the <code>n<sup>th</sup></code> place athlete, their rank is their placement number (i.e., the <code>x<sup>th</sup></code> place athlete's rank is `"x"`).

Return an array `answer` of size `n` where `answer[i]` is the **rank** of the <code>i<sup>th</sup></code> athlete.

### Example 1:

```
Input: score = [5,4,3,2,1]
Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].
```

### Example 2:

```
Input: score = [10,3,8,9,4]
Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].
```

### Constraints:

- n == score.length
- 1 <= n <= 10<sup>4</sup>
- 0 <= score[i] <= 10<sup>6</sup>
- All the values in `score` are **unique**.

## Solutions:

### [_Java_](#)

```java
public String[] findRelativeRanks(int[] score) {
  int[] temp = score.clone();
  Arrays.sort(temp);
  Map<Integer, String> rankMap = new HashMap<Integer, String>();
  String[] ranks = new String[score.length];
  for (int i = 0; i < score.length; i++) {
    if (i == score.length - 1)
      rankMap.put(temp[i], "Gold Medal");
    else if (i == score.length - 2)
      rankMap.put(temp[i], "Silver Medal");
    else if (i == score.length - 3)
      rankMap.put(temp[i], "Bronze Medal");
    else
      rankMap.put(temp[i], String.valueOf(score.length - i));
  }
  for (int i = 0; i < ranks.length; i++)
    ranks[i] = rankMap.get(score[i]);
  return ranks;
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
