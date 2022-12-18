import os, re

SOLUTION_FOLDER = "./docs/solution"
SERIALWISE = "./docs/SERIALWISE.md"
TOPICWISE = "./docs/TOPICWISE.md"
SIDEBAR = "./docs/.vitepress/Sidebar.js"


def refactor_serialwise():
    with open(SERIALWISE, "r", encoding="utf-8") as file:
        readme = file.read()
    with open(SERIALWISE, "w", encoding="utf-8") as file:
        readme = (
            readme.replace("../docs/public", "")
            .replace(
                "<kbd>Ctrl</kbd>+<kbd>F</kbd> or <kbd>⌘</kbd>+<kbd>F</kbd>",
                "`Ctrl`+`F` or `⌘`+`F`",
            )
            .replace("/\n", ".md\n")
        )
        if "./solution/" not in readme:
            readme = readme.replace("]: ./", "]: ./solution/")
        file.write(readme)


def refactor_topicwise():
    with open(TOPICWISE, "r", encoding="utf-8") as file:
        readme = file.read()
    with open(TOPICWISE, "w", encoding="utf-8") as file:
        file.write(
            readme.replace("docs/public", "")
            .replace(
                "<kbd>Ctrl</kbd>+<kbd>F</kbd> or <kbd>⌘</kbd>+<kbd>F</kbd>",
                "`Ctrl`+`F` or `⌘`+`F`",
            )
            .replace("./src/", "./solution/")
            .replace("/\n", ".md\n")
        )


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
                match_arr = re.findall(r"###\s+[\w+#./[\](]+\.[a-z)]+", readme)
                for line in match_arr:
                    readme = readme.replace("\n\n" + line, "")
                if "code-group" not in readme:
                    readme = readme.replace(
                        re.findall(r"##\sSol[a-z:]+", readme)[0],
                        "## Solution:\n\n" + "::: code-group",
                    ).replace("### [_..._]()", ":::\n\n" + "### [_..._](#)")
            with open(base + "/" + md, "w", encoding="utf-8") as file:
                file.write(readme)


def main():
    refactor_serialwise()
    refactor_topicwise()
    refactor_sidebar()
    refactor_readmes()


main()
