def removeDuplicates(self, nums: list[int]) -> int:
    k = 0
    for i, item in enumerate(nums):
        if i < len(nums) - 1 and item == nums[i + 1]:
            continue
        nums[k] = item
        k += 1
    return k
