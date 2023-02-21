package main

func singleNonDuplicate(nums []int) int {
	res := 0

	for _, num := range nums {
		// a ^ a = 0
		// a ^ a ^ a = a
		// a ^ a ^ b = b
		// also position of a and b doesn't matter
		res ^= num
	}

	return res
}
