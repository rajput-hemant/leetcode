package main

func mySqrt(x int) int {
	start := 0
	end := x

	for start < end {
		// this is to floor the mid value
		// mid of 8 will be 4 , (8+1)/2 = 4.5
		// mid of 9 will be 5 , (9+1)/2 = 5
		mid := start + (end-start+1)/2
		if mid*mid > x {
			end = mid - 1
		} else {
			start = mid
		}
	}

	return end
}
