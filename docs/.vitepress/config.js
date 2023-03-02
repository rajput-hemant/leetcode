import Sidebar from "./Sidebar";

const ogTitle = "🏆 Leetcode",
  ogImage =
    "https://opengraph.githubassets.com/7f24f37a5bf5e31cd6280ac4e7c05f732560cdaffa991e63bd6f8e9209395681/rajput-hemant/leetcode",
  ogDescription =
    "🏆 Curated solutions to Leetcode problems in multiple languages to ace the Coding Interviews.";

const currentYear = new Date().getFullYear();

export default {
  title: ogTitle,
  description: ogDescription,
  base: "/leetcode/",
  lastUpdated: true,
  cleanUrls: "without-subfolders",

  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "favicon.ico" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: ogTitle }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { property: "og:description", content: ogDescription }],
  ],

  // markdown: {
  // 	lineNumbers: true,
  // },

  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Topicwise",
        link: "TOPICWISE.md",
      },
      {
        text: "Serialwise",
        link: "SERIALWISE.md",
      },
      {
        text: "Other Repositories",
        items: [
          {
            text: "Data Structures and Algorithms",
            link: "https://github.com/rajput-hemant/data-structures-and-algorithms",
          },
          {
            text: "Calculator App",
            link: "https://github.com/rajput-hemant/calculator",
          },
          {
            text: "Infinitunes (Music WebApp)",
            link: "https://github.com/rajput-hemant/infinitunes",
          },
        ],
      },
    ],
    sidebar: Sidebar,

    editLink: {
      pattern: "https://github.com/rajput-hemant/leetcode/fork",
      text: "Contribute or Edit existing solution?",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/rajput-hemant/leetcode" },
      { icon: "twitter", link: "https://twitter.com/rajput_hemant01" },
      { icon: "discord", link: "https://discord.com/users/rajput-hemant#8269" },
    ],

    algolia: {
      appId: "R7J7LKBXWJ",
      apiKey: "2920ca3766cbd70bff24a7e239f172da",
      indexName: "leetcode",
    },

    localeLinks: {
      text: "English",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright © 2022-${currentYear} rajput-hemant@github`,
    },
  },
};
