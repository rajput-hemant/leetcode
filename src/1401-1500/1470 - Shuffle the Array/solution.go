package main

func shuffle(nums []int, n int) []int {
	res := make([]int, n*2)

	for i := 0; i < n; i++ {
		// at even indices, put the slice of the array from 0 to n
		res[i*2] = nums[i]
		// at odd indices, put the slice of the array from n to the end
		res[i*2+1] = nums[n+i]
	}

	return res
}
