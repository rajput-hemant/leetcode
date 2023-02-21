package main

import "strings"

func wordPattern(pattern string, s string) bool {
	words := strings.Split(s, " ")

	if len(pattern) != len(words) {
		return false
	}

	map_ := make(map[byte]string)

	// loop through the pattern and process each character
	for i := 0; i < len(pattern); i++ {
		// if the word is already in the map, check if it matches the pattern
		if val, ok := map_[pattern[i]]; ok {
			if val != words[i] {
				return false
			}
		} else {
			// loop through the map to check if map contains the word
			for _, v := range map_ {
				// if the word is in the map, return false
				if v == words[i] {
					return false
				}
			}

			// if the word is not in the map, add it
			map_[pattern[i]] = words[i]
		}
	}

	return true
}
