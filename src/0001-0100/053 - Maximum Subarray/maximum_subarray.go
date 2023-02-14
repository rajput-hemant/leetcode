package main

import "math"

func maxSubArray(nums []int) int {
	currSum, maxSum := 0, math.MinInt

	for _, num := range nums {
		currSum += num
		maxSum = int(math.Max(float64(maxSum), float64(currSum)))
		if currSum < 0 {
			currSum = 0
		}
	}

	return maxSum
}
