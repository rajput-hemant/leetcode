package main

func containsNearbyDuplicate(nums []int, k int) bool {
	if len(nums) <= 1 {
		return false
	}

	set := make(map[int]int)

	// iterate over the array
	for i, v := range nums {
		// check if the value is in the set
		if _, ok := set[v]; ok {
			// if the value is in the set,
			// check if the difference between the current index and the index of the value in the set
			// is less than or equal to k
			if i-set[v] <= k {
				return true
			}
		}
		// add the value to the set
		set[v] = i
	}

	return false
}
