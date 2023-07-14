package main

func longestSubsequence(arr []int, difference int) int {
	dp := make(map[int]int)

	for _, v := range arr {
		dp[v] = dp[v-difference] + 1
	}

	max := 0

	for _, v := range dp {
		if v > max {
			max = v
		}
	}

	return max
}
