package main

func kidsWithCandies(candies []int, extraCandies int) []bool {
	max := 0

	for _, candy := range candies {
		if candy > max {
			max = candy
		}
	}

	result := make([]bool, len(candies))

	for i, candy := range candies {
		if candy+extraCandies >= max {
			result[i] = true
		}
	}

	return result
}
