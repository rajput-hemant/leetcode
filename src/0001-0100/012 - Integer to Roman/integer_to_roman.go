package main

func intToRoman(num int) string {
	ones := []string{"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"}
	tens := []string{"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"}
	hundreds := []string{"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"}
	thousands := []string{"", "M", "MM", "MMM"}

	thousand := num / 1000
	hundred := (num / 100) % 10
	ten := (num / 10) % 10
	one := num % 10

	return thousands[thousand] + hundreds[hundred] + tens[ten] + ones[one]
}
