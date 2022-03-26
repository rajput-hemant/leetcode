# https://leetcode.com/problems/remove-duplicates-from-sorted-array/


def removeDuplicates(self, nums: list[int]) -> int:
    k = 0
    for i in range(len(nums)):
        if i < len(nums) - 1 and nums[i] == nums[i + 1]:
            continue
        nums[k] = nums[i]
        k += 1
    return k
