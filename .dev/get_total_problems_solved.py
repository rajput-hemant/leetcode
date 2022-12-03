import os

SRC_FOLDER = "./src"


def get_total_problems_solved():
    total_dir = 0
    for _, dirs, _ in os.walk(SRC_FOLDER):
        for _ in dirs:
            total_dir += 1

    return total_dir - 15  # excluding the subdirectories in src/


with open("README.md", "r", encoding="utf-8") as file:
    data = file.readlines()

data[97] = f"### **Total Problems Solved: _{get_total_problems_solved()}_**\n"

with open("README.md", "w", encoding="utf-8") as file:
    file.writelines(data)
