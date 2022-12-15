import os, re

SOLUTION_FOLDER = "./docs/solution"
SERIALWISE = "./docs/SERIALWISE.md"
TOPICWISE = "./docs/TOPICWISE.md"
SIDEBAR = "./docs/.vitepress/Sidebar.js"


def refactor_serialwise():
    with open(SERIALWISE, "r", encoding="utf-8") as file:
        readme = file.read()
    with open(SERIALWISE, "w", encoding="utf-8") as file:
        file.write(
            readme.replace("../docs/assets", "/assets")
            .replace(
                "<kbd>Ctrl</kbd>+<kbd>F</kbd> or <kbd>⌘</kbd>+<kbd>F</kbd>",
                "`Ctrl`+`F` or `⌘`+`F`",
            )
            .replace("]: ./", "]: ./solution/")
            .replace("/\n", ".md\n")
        )


def refactor_topicwise():
    with open(TOPICWISE, "r", encoding="utf-8") as file:
        readme = file.read()
    with open(TOPICWISE, "w", encoding="utf-8") as file:
        file.write(
            readme.replace("docs/assets", "/assets")
            .replace(
                "<kbd>Ctrl</kbd>+<kbd>F</kbd> or <kbd>⌘</kbd>+<kbd>F</kbd>",
                "`Ctrl`+`F` or `⌘`+`F`",
            )
            .replace("./src/", "./solution/")
            .replace("/\n", ".md\n")
        )


def refactor_sidebar():
    open(SIDEBAR, "w").close()
    with open(SIDEBAR, "a", encoding="utf-8") as file:
        file.write("export default Sidebar = [\n")
        for base, _, files in os.walk(SOLUTION_FOLDER):
            if base == "./docs/solution":
                continue
            problem_index = base.removeprefix("./docs/solution/")
            file.write(
                "	{\n"
                f'		text: "{problem_index}",\n'
                "		collapsible: true,\n"
                "		collapsed: true,\n"
                "		items: [\n"
            )
            for md in files:
                file.write(
                    "			{\n"
                    f'				text: "{md}",\n'
                    f'				link: "/solution/{problem_index}/{md}",\n'
                    "			},\n"
                )
            file.write("		],\n" "	},\n")
        file.write("]")


def refactor_readmes():
    for base, _, files in os.walk(SOLUTION_FOLDER):
        for md in files:
            with open(base + "/" + md, "r", encoding="utf-8") as file:
                readme = file.read()
                match_arr = re.findall(
                    r"###\s\[_[a-zA-Z]+.._]\(.\/[a-zA-Z0-9_]+.[a-zA-Z]+\)", readme
                ) or re.findall(
                    r"###\s\[_[a-zA-Z]+.._]\([a-zA-Z0-9_]+.[a-zA-Z]+\)", readme
                )
                for line in match_arr:
                    if "java" in line.lower():
                        new_line = "### [_Java_](#)"
                    if "python" in line.lower():
                        new_line = "### [_Python_](#)"
                    if "cpp" in line.lower():
                        new_line = "### [_C++_](#)"
                    readme = readme.replace(line, new_line).replace(
                        "[_..._]()", "[_..._](#)"
                    )
            with open(base + "/" + md, "w", encoding="utf-8") as file:
                file.write(readme)


def main():
    refactor_serialwise()
    refactor_topicwise()
    refactor_sidebar()
    refactor_readmes()


main()
