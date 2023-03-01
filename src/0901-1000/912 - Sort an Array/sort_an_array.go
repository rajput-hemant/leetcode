package main

func sortArray(nums []int) []int {
	quickSort(nums, 0, len(nums)-1)

	return nums
}

func quickSort(nums []int, start, end int) {
	if start >= end {
		return
	}

	pivot := partition(nums, start, end)
	quickSort(nums, start, pivot-1)
	quickSort(nums, pivot+1, end)
}

func partition(arr []int, start int, end int) int {
	pivot := arr[end]
	i := start

	for j := start; j < end; j++ {
		if arr[j] < pivot {
			arr[i], arr[j] = arr[j], arr[i]
			i++
		}
	}

	arr[i], arr[end] = arr[end], arr[i]

	return i
}
