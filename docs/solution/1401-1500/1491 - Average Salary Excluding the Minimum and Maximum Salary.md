# 1491. Average Salary Excluding the Minimum and Maximum Salary [![share]](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary)

![easy]

## Problem Statement:

You are given an array of **unique** integers `salary` where` salary[i]` is the salary of the <code>i<sup>th</sup></code> employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within <code>10<sup>-5</sup></code> of the actual answer will be accepted.

### Example 1:

```
Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500
```

### Example 2:

```
Input: salary = [1000,2000,3000]
Output: 2000.00000
Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
Average salary excluding minimum and maximum salary is (2000) / 1 = 2000
```

### Constraints:

- 3 <= salary.length <= 100
- 1000 <= salary[i] <= 10<sup>6</sup>
- All the integers of salary are **unique**.

## Solutions:

### [_Java_](#)

```java
public double average(int[] salary) {
  Arrays.sort(salary);
  int len = salary.length;
  double res = 0;
  for (int i = 1; i < len - 1; i++)
    res += salary[i];
  return res / (len - 2);
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
