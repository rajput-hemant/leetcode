class Solution:
    def findAnagrams(self, s: str, p: str) -> list[int]:
        s_len, p_len = len(s), len(p)
        if p_len > s_len:
            return []
        p_count, s_count = {}, {}
        # increment the count of each character in p and s,
        # for the first p_len characters in s
        # with get() we can set a default value if the key is not found
        for i in range(p_len):
            p_count[p[i]] = p_count.get(p[i], 0) + 1
            s_count[s[i]] = s_count.get(s[i], 0) + 1

        # if the counts are equal, we found an anagram
        res = [0] if p_count == s_count else []
        l = 0
        for r in range(p_len, s_len):
            # increment the count of the right character
            s_count[s[r]] = s_count.get(s[r], 0) + 1
            # decrement the count of the left character
            s_count[s[l]] -= 1

            # if the count of the left character is 0,
            # we can remove it from the dictionary
            if s_count[s[l]] == 0:
                del s_count[s[l]]
            # increment the left pointer
            l += 1
            # if the counts are equal, we found an anagram
            if p_count == s_count:
                res.append(l)
        return res
