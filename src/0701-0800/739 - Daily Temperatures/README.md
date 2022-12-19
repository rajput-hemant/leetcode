# 739. Daily Temperatures [![share]](https://leetcode.com/problems/daily-temperatures/)

![][medium]

## Problem Statement:

Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the <code>i<sup>th</sup></code> day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.

### Example 1:

```
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
```

### Example 2:

```
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
```

### Example 3:

```
Input: temperatures = [30,60,90]
Output: [1,1,0]
```

### Constraints:

- 1 <= temperatures.length <= 10<sup>5</sup>
- 30 <= temperatures[i] <= 100

## Solutions:

### [_Java_](./DailyTemperatures.java)

```java
public int[] dailyTemperatures(int[] temp) {
  int n = temp.length;
  int[] days = new int[n];
  Stack<Integer> stk = new Stack<>();
  for (int i = n - 1; i >= 0; i--) {
    while (!stk.isEmpty() && temp[stk.peek()] <= temp[i])
      stk.pop();

    if (!stk.isEmpty())
      days[i] = stk.peek() - i;

    stk.push(i);
  }
  return days;
}
```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
