import math


class Solution:
    def minEatingSpeed(self, p: list[int], h: int) -> int:
        left, right = 1, max(p)

        while left <= right:
            m = (left+right)//2
            # t = sum((i+m-1)//m for i in p)
            # t = sum(-(-i//m) for i in p)
            t = sum(math.ceil(i/m) for i in p)
            if t > h:
                left = m+1
            else:
                right = m-1
        return left
