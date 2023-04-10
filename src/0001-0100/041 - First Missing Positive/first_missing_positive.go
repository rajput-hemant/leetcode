package main

func firstMissingPositive(nums []int) int {
	i := 0

	for i < len(nums) {
		if nums[i] > 0 && nums[i] <= len(nums) && nums[nums[i]-1] != nums[i] {
			nums[nums[i]-1], nums[i] = nums[i], nums[nums[i]-1]
		} else {
			i++
		}
	}

	for i, num := range nums {
		if num != i+1 {
			return i + 1
		}
	}

	return len(nums) + 1
}
