class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for i in s:
            if i in ["(", "[", "{"]:
                stack.append(i)
            elif i == ")" and (stack == [] or stack.pop() != "("):
                return False
            elif i == "]" and (stack == [] or stack.pop() != "["):
                return False
            elif i == "}" and (stack == [] or stack.pop() != "{"):
                return False
        return stack == []
