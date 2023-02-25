package main

func canConstruct(ransomNote string, magazine string) bool {
	if len(ransomNote) > len(magazine) {
		return false
	}
	// make a map of the magazine
	mag := make(map[rune]int)

	// count the number of each character in the magazine
	for _, c := range magazine {
		mag[c]++
	}

	// check if the ransom note can be made from the magazine
	for _, c := range ransomNote {
		if mag[c] == 0 {
			return false
		}
		mag[c]--
	}

	// // make a vector of the magazine
	// magVec := make([]int, 26)

	// for _, c := range magazine {
	// 	magVec[c-'a']++
	// }

	// // check if ransomNote can be constructed from magazine
	// for _, c := range ransomNote {
	// 	if magVec[c-'a'] == 0 {
	// 		return false
	// 	}
	// 	magVec[c-'a']--
	// }

	return true
}
