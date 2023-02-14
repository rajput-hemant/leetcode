package main

func subsets(nums []int) [][]int {
	res := make([][]int, 0)
	curr_subset := make([]int, 0)

	var backtrack func(i int)

	backtrack = func(i int) {
		println(i)
		if i >= len(nums) {
			curr_dup := make([]int, len(curr_subset))
			copy(curr_dup, curr_subset)
			res = append(res, curr_dup)
			return
		}

		// include the current element
		curr_subset = append(curr_subset, nums[i])
		backtrack(i + 1)

		// exclude the current element
		curr_subset = curr_subset[:len(curr_subset)-1] // pop the last element
		backtrack(i + 1)
	}

	backtrack(0)

	return res
}
