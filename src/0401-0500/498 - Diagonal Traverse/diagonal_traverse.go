package main

type Direction int

const (
	Up Direction = iota
	Down
)

func findDiagonalOrder(mat [][]int) []int {
	direction := Up
	row, col := 0, 0
	row_len, col_len := len(mat), len(mat[0])
	res := make([]int, row_len*col_len)

	for i := 0; i < row_len*col_len; i++ {
		res[i] = mat[row][col]

		if direction == Up {
			if row == 0 || col == col_len-1 {
				direction = Down

				if col == col_len-1 {
					row++
				} else {
					col++
				}

			} else {
				row--
				col++
			}
		} else {
			if col == 0 || row == row_len-1 {
				direction = Up

				if row == row_len-1 {
					col++
				} else {
					row++
				}

			} else {
				row++
				col--
			}
		}
	}

	return res
}
