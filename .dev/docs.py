import os
import re

SOLUTION_FOLDER = "./docs/solution"
SERIALWISE = "./docs/SERIALWISE.md"
TOPICWISE = "./docs/TOPICWISE.md"
SIDEBAR = "./docs/.vitepress/Sidebar.js"

TAGS = {
    "BIT,": "Binary Indexed Tree,",
    "BS,": "Binary Search,",
    "BST,": "Binary Search Tree,",
    "Bit Manip,": "Bit Manipulation,",
    "BFS,": "Breadth First Search,",
    "DFS,": "Depth First Search,",
    "DNC,": "Divide and Conquer,",
    "DLL,": "Doubly Linked List,",
    "DP,": "Dynamic Programming,",
    "LL,": "Linked List,",
    "MEM,": "Memoization,",
    "MST,": "Minimum Spanning Tree,",
    "Q,": "Queue,",
    "ST,": "Stack,",
    "TAB,": "Tabulation,",
    "2P,": "Two Pointers,",
}


def refactor_serialwise():
    with open(SERIALWISE, "r", encoding="utf-8") as file:
        readme = file.read()
    with open(SERIALWISE, "w", encoding="utf-8") as file:
        readme = (
            readme.replace("../docs/public", "")
            .replace("/\n", ".md\n")
            .replace(
                "<kbd>Ctrl</kbd>+<kbd>F</kbd> or <kbd>⌘</kbd>+<kbd>F</kbd>",
                "`Ctrl`+`F` or `⌘`+`F`",
            )
        )
        for key, value in TAGS.items():
            readme = readme.replace(key, value)
        if "./solution/" not in readme:
            readme = readme.replace("]: ./", "]: ./solution/")
        file.write(readme)


def refactor_topicwise():
    with open(TOPICWISE, "r", encoding="utf-8") as file:
        readme = file.read()
    with open(TOPICWISE, "w", encoding="utf-8") as file:
        readme = (
            readme.replace("docs/public", "")
            .replace("/\n", ".md\n")
            .replace("./src/", "./solution/")
            .replace(
                "<kbd>Ctrl</kbd>+<kbd>F</kbd> or <kbd>⌘</kbd>+<kbd>F</kbd>",
                "`Ctrl`+`F` or `⌘`+`F`",
            )
        )
        for key, value in TAGS.items():
            readme = readme.replace(key, value)
        file.write(readme)


def refactor_sidebar():
    collapsed = False
    open(SIDEBAR, "w").close()
    with open(SIDEBAR, "a", encoding="utf-8") as file:
        file.write("export default Sidebar = [\n")
        for base, _, files in sorted(os.walk(SOLUTION_FOLDER)):
            if base == "./docs/solution":
                continue
            problem_index = base.removeprefix("./docs/solution/")
            file.write(
                "	{\n"
                f'		text: "{problem_index}",\n'
                "		collapsible: true,\n"
                f"		collapsed: {str(collapsed).lower()},\n"
                "		items: [\n"
            )
            for md in sorted(files):
                file.write(
                    "			{\n"
                    f'				text: "{md[:-3]}",\n'
                    f'				link: "/solution/{problem_index}/{md}",\n'
                    "			},\n"
                )
            file.write("		],\n" "	},\n")
            if not collapsed:
                collapsed = True
        file.write("];\n")


def refactor_readmes():
    for base, _, files in os.walk(SOLUTION_FOLDER):
        for md in files:
            with open(base + "/" + md, "r", encoding="utf-8") as file:
                readme = file.read()
                readme = re.sub(r"\n\n###\s+[\w+#./[\](]+\.[a-z)]+", "", readme)
                readme = re.sub(r"<\w+>\n<\w+>\n\n####", "::: details", readme)
                readme = readme.replace("\n\n</summary>", "").replace(
                    "</details>", ":::"
                )
                if "code-group" not in readme:
                    readme = re.sub(
                        r"##\sSol[a-z:]+",
                        "## Solution:\n\n" + "::: code-group",
                        readme,
                    ).replace("### [_..._]()", ":::\n\n" + "### [_..._](#)")
            with open(base + "/" + md, "w", encoding="utf-8") as file:
                file.write(readme)


def main():
    refactor_serialwise()
    refactor_topicwise()
    refactor_sidebar()
    refactor_readmes()


main()
