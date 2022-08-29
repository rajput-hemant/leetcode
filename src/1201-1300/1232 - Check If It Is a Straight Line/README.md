# 1232. Check If It Is a Straight Line [![share]](https://leetcode.com/problems/check-if-it-is-a-straight-line)

![][easy]

## Problem Statement:

You are given an array `coordinates`, `coordinates[i] = [x, y]`, where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

### Example 1:

![](https://assets.leetcode.com/uploads/2019/10/15/untitled-diagram-2.jpg)

```
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
```

### Example 2:

![](https://assets.leetcode.com/uploads/2019/10/09/untitled-diagram-1.jpg)

```
Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
```

### Constraints:

- 2 <= coordinates.length <= 1000
- coordinates[i].length == 2
- -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
- coordinates contains no duplicate point.

## Solution:

### [_Java_](./CheckIfItIsAStraightLine.java)

```java
 /*
  * slope = tan0 = (x - x1) / (y - y1)
  * for line being straight line,
  * slope b/w every two points must be equal, i.e.
  * (x - x1) / (y - y1) = (x1 - x0) / (y1 - y0)
  */

public boolean checkStraightLine(int[][] coordinates) {
  if (coordinates.length == 2)
    return true;
  int x0 = coordinates[0][0], y0 = coordinates[0][1],
      x1 = coordinates[1][0], y1 = coordinates[1][1];
  int dx = x1 - x0,
      dy = y1 - y0;
  for (int[] coordinate : coordinates) {
    int x = coordinate[0], y = coordinate[1];
    if (dx * (y - y1) != dy * (x - x1))
      return false;
  }
  return true;
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
