package main

func isIsomorphic(s string, t string) bool {
	const max = 256

	var (
		sMap [max]int
		tMap [max]int
	)

	for i := 0; i < len(s); i++ {
		sIndex := s[i] - 'a'
		tIndex := t[i] - 'a'

		if sMap[sIndex] != tMap[tIndex] {
			return false
		}

		sMap[sIndex] = i + 1
		tMap[tIndex] = i + 1
	}

	return true
}
