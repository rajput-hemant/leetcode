package main

import (
	"fmt"
)

func summaryRanges(nums []int) []string {
	list := []string{}
	n := len(nums)

	for i := 0; i < n; i++ {
		start := nums[i]
		println(i)
		for i+1 < n && nums[i+1] == nums[i]+1 {
			i++
		}
		if start == nums[i] {
			list = append(list, fmt.Sprint(start))
		} else {
			list = append(list, fmt.Sprint(start, "->", nums[i]))
		}
	}

	return list
}
