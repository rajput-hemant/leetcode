package main

func generate(numRows int) [][]int {
	pascal := make([][]int, numRows)
	for i := 0; i < numRows; i++ {
		row := make([]int, i+1)
		row[0] = 1
		row[i] = 1
		for j := 1; j < i; j++ {
			row[j] = pascal[i-1][j-1] + pascal[i-1][j]
		}
		pascal[i] = row
	}

	return pascal
}
