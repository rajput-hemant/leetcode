package main

import (
	"fmt"
	"sort"
)

func findRelativeRanks(score []int) []string {
	sorted_score := append([]int(nil), score...)
	sort.Slice(sorted_score, func(i, j int) bool {
		return sorted_score[i] > sorted_score[j]
	})

	rank := make(map[int]string)

	for i, v := range sorted_score {
		switch i {
		case 0:
			rank[v] = "Gold Medal"
		case 1:
			rank[v] = "Silver Medal"
		case 2:
			rank[v] = "Bronze Medal"
		default:
			rank[v] = fmt.Sprintf("%d", i+1)
		}
	}

	result := make([]string, len(score))
	for i, v := range score {
		result[i] = rank[v]
	}

	return result
}
