package main

func canPlaceFlowers(flowerbed []int, n int) bool {
	empty := 0
	if flowerbed[0] == 0 {
		empty = 1
	}

	for _, f := range flowerbed {
		if f == 0 {
			empty++
		} else {
			n -= (empty - 1) / 2
			empty = 0
		}
	}
	n -= empty / 2

	return n <= 0
}
