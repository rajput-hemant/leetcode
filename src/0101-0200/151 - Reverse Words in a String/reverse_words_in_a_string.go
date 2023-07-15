package main

import (
	"strings"
)

func reverseWords(s string) string {
	words := strings.Fields(s) // split the string by whitespace

	// reverse the order of the words
	for i, j := 0, len(words)-1; i < j; i, j = i+1, j-1 {
		words[i], words[j] = words[j], words[i]
	}

	return strings.Join(words, " ")
}
