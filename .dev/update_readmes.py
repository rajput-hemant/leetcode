import os
import re
import time
import json
import hashlib
import requests
from bs4 import BeautifulSoup
from googlesearch import search
from logging import basicConfig, info as log

basicConfig(format="[%(asctime)s] - %(name)s - %(message)s", level="INFO")


SRC_FOLDER = "./src"
LOGS = ".dev/logs.json"
TOPICWISE = "./TOPICWISE.md"
SERIALWISE = "./src/README.md"
LANGS = {
    "cpp": "C++",
    "java": "Java",
    "py": "Python",
    "c": "C",
    "cs": "C#",
    "js": "JavaScript",
    "rb": "Ruby",
    "swift": "Swift",
    "go": "Go",
    "sc": "Scala",
    "kt": "Kotlin",
    "rs": "Rust",
    "php": "PHP",
    "ts": "Typescript",
    "rkt": "Racket",
    "erl": "Erlang",
    "ex": "Elixir",
    "dart": "Dart",
}
TAGS = {
    "Binary Indexed Tree": "BIT",
    "Binary Search": "BS",
    "Binary Search Tree": "BST",
    "Bit Manipulation": "Bit Manip",
    "Breadth First Search": "BFS",
    "Depth First Search": "DFS",
    "Divide and Conquer": "DNC",
    "Doubly Linked List": "DLL",
    "Dynamic Programming": "DP",
    "Linked List": "LL",
    "Memoization": "MEM",
    "Minimum Spanning Tree": "MST",
    "Queue": "Q",
    "Stack": "ST",
    "Tabulation": "TAB",
    "Two Pointers": "2P",
}


def refactor_readmes():
    """Refactors README.md files in the src folder."""

    log("Refactoring README.md files...")

    with open(SERIALWISE, encoding="utf=8") as file:
        serialwise = file.readlines()
    with open(TOPICWISE, encoding="utf=8") as file:
        topicwise = file.readlines()

    total_dir = 0

    for path, dirs, _ in sorted(os.walk(SRC_FOLDER)):
        total_dir += 1
        for dir_ in sorted(dirs):
            if re.match(r"\d{4}-\d{4}", dir_) or ("definitions" in dir_):
                continue
            subdir = os.path.join(path, dir_)
            problems = os.listdir(subdir)
            idx = re.match(r"\d{1,4}", dir_)[0]
            if "README.md" not in problems:
                url = gsearch(dir_)
                question = parse_json(url)
                write_readme(subdir, question, url)
                serialwise, line = refactor_serialwise(
                    serialwise,
                    question,
                    subdir,
                )
                topicwise = refactor_topicewise(
                    topicwise,
                    line,
                    question,
                    subdir,
                )
            elif generate_logs(idx, subdir, problems):
                update_sols(subdir)

    update_total_problems_solved(total_dir)
    with open(SERIALWISE, "w", encoding="utf=8") as file:
        file.writelines(serialwise)
    with open(TOPICWISE, "w", encoding="utf=8") as file:
        file.writelines(topicwise)


def generate_logs(index, path, problems):
    """
    Generates logs.json file.
    params: index (str), path (str), problems (list)
    returns: file_changed (bool)
    """

    log(f"Generating logs for {path.split('/')[-1]}")

    idx = int(index)

    def _check_checksum():
        for problem in problems:
            if problem == "README.md":
                continue
            file_path = os.path.join(path, problem)
            checksum = file_checksum(file_path)
            if checksum != logs[f"{idx}"]["sols"][problem]:
                logs[f"{idx}"]["sols"][problem] = checksum
                return True
        return False

    with open(LOGS, encoding="utf=8") as file:
        logs = json.load(file)

        if logs[f"{idx}"]["len"] == len(problems):
            file_changed = _check_checksum()
        else:
            file_changed = True
            logs[f"{idx}"]["len"] = len(problems)

        with open(LOGS, "w", encoding="utf=8") as file:
            json.dump(logs, file, indent=2)

        return file_changed


def file_checksum(path):
    """
    Calculates the checksum of the file.
    params: path (str)
    returns: checksum (str)
    """

    log(f"Calculating checksum of {path.split('/')[-1]}")

    with open(path, "rb") as file:
        checksum = hashlib.sha256(file.read()).hexdigest()

    return checksum


def gsearch(query):
    """
    Searches Google for the query and returns the link of first result.
    params: query (str)
    returns: link (str)
    """

    log(f"Searching Google for {query}")

    user_agent = (
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"
        + " (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
    )
    for url in search(
        "site:leetcode.com " + query,
        stop=1,
        tld="com",
        user_agent=user_agent,
    ):
        link = re.match(r"https:\/\/leetcode.com\/problems\/[a-z-]+\/", url)[0]

        log(f"Found link: {link}")
        return link


def parse_json(url):
    """
    Parses the JSON data from the LeetCode page.
    params: url (str)
    returns: question data (dict)
    """

    log(f"Parsing JSON data from {url}")

    page = requests.get(url)
    soup = BeautifulSoup(page.text, "html.parser")
    data = soup.find("script", id="__NEXT_DATA__")
    json_ = json.loads(data.contents[0])
    queries = json_["props"]["pageProps"]["dehydratedState"]["queries"]
    id = queries[0]["state"]["data"]["question"]["questionFrontendId"]
    title = queries[0]["state"]["data"]["question"]["title"]
    question = queries[7]["state"]["data"]["question"]["content"]
    difficulty = queries[0]["state"]["data"]["question"]["difficulty"]
    hints = queries[6]["state"]["data"]["question"]["hints"]
    tags = [i["name"] for i in queries[9]["state"]["data"]["question"]["topicTags"]]
    # tags = [
    #     (lambda x: x.replace(x, TAGS.get(x, i["name"])))(i["name"])
    #     for i in queries[9]["state"]["data"]["question"]["topicTags"]
    # ]

    return {
        "id": id,
        "title": title,
        "question": question,
        "difficulty": difficulty,
        "hints": hints,
        "tags": tags,
    }


def write_readme(path, question, url):
    """
    Writes the README.md file.
    params: path (str), question (dict), url (str)
    """

    log(f"Writing README.md for {question['title']}")

    hints = """\n<details>
<summary>\n
#### _Click to open Hints_\n
</summary>\n
- {}\n
</details>
""".format(
        "\n- ".join(question["hints"])
    )

    with open(path + "/README.md", "w") as file:
        file.write(
            """# {0} [![share]]({1})\n
![][{2}]\n
## Problem Statement\n
{3}\n{4}
## Solutions
{5}
### [_..._]()\n
```\n
```\n
<!----------------------------------{{ link }}--------------------------------->\n
[share]: https://graph.org/file/3ea5234dda646b71c574a.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
""".format(
                path.split("/")[-1].replace(" -", ".").lstrip("0"),
                url,
                question["difficulty"].lower(),
                question["question"],
                hints if question["hints"] else "",
                get_sols(path),
            )
        )


def get_sols(path):
    """
    Gets the solutions from the solution folder.
    params: path (str)
    returns: sols_str (str)
    """

    log("Getting Solutions for " + path)

    sols = os.listdir(path)
    sols_str = ""
    for sol in sols:
        if sol == "README.md":
            continue
        ext = sol.split(".")[-1]
        with open(path + "/" + sol, "r") as file:
            code = file.read()
        sols_str += """\n### [_{}_]({})\n\n```{}\n{}\n```\n""".format(
            LANGS[ext], sol, ext, code
        )

    return sols_str


def update_sols(path):
    """
    Gets the solutions from the solution folder.
    params: path (str)
    """

    log("Updating Solutions for " + path)

    sols = get_sols(path)
    readme = path + "/" + "README.md"
    flag = 1
    with open(readme) as file_r:
        file = file_r.readlines()

    with open(readme, "w") as file_w:
        for line in file:
            if flag:
                file_w.write(line)
            if line.startswith("## Solution"):
                flag = 0
            if line.startswith("### [_..._]()"):
                file_w.write(sols + "\n### [_..._]()\n")
                flag = 1


def refactor_serialwise(file, question, path):
    """
    Refactors the README.md file for Serialwise Solutions.
    params: file (list), question (dict), path (str)
    returns: updated file (list)
    """

    log("Refactoring Serialwise Solutions...")

    flag = 0
    new_line = ""
    id = question["id"]
    tags = [(lambda x: x.replace(x, TAGS.get(x, i)))(i) for i in question["tags"]]
    title = question["title"]
    difficulty = question["difficulty"]

    for i, line in enumerate(file):
        if "Solution Table" in line:
            flag = 1
        if "Path Reference" in line:
            flag = 2
        match = re.findall(r"\d{1,4}", line)
        if flag == 1 and len(match):
            if int(match[0]) > int(id):
                new_line = "|**{0}**|[{1}][{2}]|{3}|![][{4}]||\n".format(
                    f"{int(id):04d}", title, id, ", ".join(tags), difficulty.lower()
                )
                file.insert(i, new_line)
                flag = 0
        if flag == 2 and len(match):
            if int(match[0]) > int(id):
                line_ = "[{0}]: {1}\n".format(
                    id, path.replace("./src/", "./").replace(" ", "%20")
                )
                file.insert(i, line_)
                flag = 0

    return file, new_line


def refactor_topicewise(file, line_, question, path):
    """
    Refactors the README.md file for Topicwise Solutions.
    params: path (str), line (str), tags (list)
    returns: updated file (list)
    """

    log("Refactoring Topicwise Solutions...")

    flag = 0
    id = question["id"]
    tags = question["tags"]

    for i, line in enumerate(file):
        if "Path Reference" in line:
            flag = 2
        tag = re.findall(r"## [\w ]+", line)
        match = re.findall(r"\d{1,4}", line)
        if len(tag):
            if tag[0][3:] in tags:
                flag = 1
                continue
        if flag == 1 and len(match):
            if int(match[0]) > int(id) or ("Solution Table" in file[i + 2]):
                file.insert(i, line_)
                flag = 0
        if flag == 2 and len(match):
            if int(match[0]) > int(id):
                new_line = "[{0}]: {1}\n".format(id, path.replace(" ", "%20"))
                file.insert(i, new_line)
                break
    return file


def update_total_problems_solved(total_dirs):
    """
    Updates the total problems solved in the README.md & docs/index.md file.
    params: total_dirs (int)
    """
    
    total_probs = total_dirs - len(os.listdir(SRC_FOLDER))
    line = f"### **Total Problems Solved: _{total_probs}_**\n"

    with open("README.md") as file_1, open("./docs/index.md") as file_2:
        data_1 = file_1.readlines()
        data_2 = file_2.readlines()

    data_1[97] = data_2[101] = line

    with open("README.md", "w") as file_1, open("./docs/index.md", "w") as file_2:
        file_1.writelines(data_1)
        file_2.writelines(data_2)


def main():
    start_time = time.time()
    refactor_readmes()
    log(f"took {(time.time() - start_time):.2f} seconds")


main()
