package main

import "sort"

func isAnagram_eff(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	var sMap = make(map[rune]int)
	var tMap = make(map[rune]int)

	for _, v := range s {
		sMap[v]++
	}

	for _, v := range t {
		tMap[v]++
	}

	for k, v := range sMap {
		if tMap[k] != v {
			return false
		}
	}

	return true
}

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	sRunes := []rune(s)
	tRunes := []rune(t)

	sort.Slice(sRunes, func(i, j int) bool {
		return sRunes[i] < sRunes[j]
	})
	sort.Slice(tRunes, func(i, j int) bool {
		return tRunes[i] < tRunes[j]
	})

	for i := 0; i < len(sRunes); i++ {
		if sRunes[i] != tRunes[i] {
			return false
		}
	}

	return true
}
