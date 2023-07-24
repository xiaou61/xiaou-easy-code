import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    // 代码笔记的侧边栏
    "/codenotes/": [
        // java
        {
            text: "Java",
            icon: "java",
            collapsible: true,
            prefix: "/codenotes/Java/",
            children: [
                {
                    text: "Java基础",
                    collapsible: true,
                    icon: "write",
                    link: "java基础.md",
                },
                {
                    text: "Java面向对象",
                    collapsible: true,
                    icon: "write",
                    link: "java面向对象.md",
                },
                {
                    text: "spring6",
                    collapsible: true,
                    icon: "write",
                    link: "spring6.md",
                },
            ]
        },
        // 前端
        {
            text: "前端",
            icon: "html",
            collapsible: true,
            prefix: "/codenotes/front_end/",
            children: [
                {
                    text: "Html",
                    collapsible: true,
                    icon: "write",
                    link: "HTML.md"
                },
                {
                    text: "WebApi",
                    collapsible: true,
                    icon: "write",
                    link: "WebApi.md",
                },
                {
                    text: "渡一大师课笔记",
                    collapsible: true,
                    icon: "write",
                    prefix: "/codenotes/front_end/dy/",
                    children: [
                        "HC.md","Git.md"
                    ]
                },
            ]
        },
        {
            text: "算法",
            icon: "ability",
            collapsible: true,
            prefix: "/codenotes/algorithm/",
            children: [
                {
                    text: "leetcode算法全解",
                    icon: "network",
                    collapsible: true,
                    prefix: "leetcode/",
                    children: ["easy.md", "middle.md", "hard.md"],
                },
                {
                    text: "数据结构与算法(黑马)",
                    icon: "write",
                    link: "heima.md",
                },
            ],
        },
        {
            text: "python",
            icon: "python",
            collapsible: true,
            prefix: "/codenotes/python/",
            children: [
                {
                    text: "爬虫实战2023",
                    icon: "chrome",
                    // collapsible: true,
                    link: "2023.md"

                },
                {
                    text: "办公自动化",
                    icon: "workingDirectory",
                    collapsible: true,
                    link: "auto.md"

                },
            ],
        },
    ],
    // 开源项目的侧边栏
    "/projects/": [
        {
            text: "技术杂谈",
            icon: "computer",
            collapsible: true,
            prefix:"/projects/zatan/",
            children:["1.md","2.md","3.md","4.md"]
        }
    ]
});
