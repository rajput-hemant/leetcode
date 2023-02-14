class Solution:
    def subsets(self, nums: list[int]) -> list[list[int]]:
        res, curr = [], []

        def backtrack(i: int) -> None:
            if i >= len(nums):
                print(curr.copy())
                res.append(curr.copy())
                return

            # include the current element
            curr.append(nums[i])
            backtrack(i + 1)

            # exclude the current element
            curr.pop()
            backtrack(i + 1)

        backtrack(0)

        return res
