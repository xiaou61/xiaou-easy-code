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
                    text: "JavaSE精修",
                    collapsible: true,
                    icon: "write",
                    children: ["java基础.md","java面向对象.md"]
                },
                {
                    text: "重学Java(千锋教育2023)",
                    collapsible: true,
                    icon: "write",
                    prefix:"qf/",
                    children: ["1.md"]
                },
                {
                    text: "JVM(尚硅谷)",
                    collapsible: true,
                    icon: "write",
                    prefix: "jvm/",
                    children : ["1.md","2.md","3.md","4.md","5.md","6.md","7.md","8.md","9.md","10.md","11.md","12.md"]
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
                "2023.md","auto.md",
                {
                    text: "python全栈(路飞学院)",
                    icon: "network",
                    prefix: "lf/",
                    collapsible: true,
                    children : ["1.md","2.md"]
                },
                {
                    text: "python-50天(github)",
                    icon: "network",
                    collapsible: true,
                    children: ["python-50-up.md", "python-50-down.md"],
                },


            ],
        },
        {
            text: "其他工具",
            icon: "workingDirectory",
            collapsible: true,
            prefix: "/codenotes/other/",
            children:["Git.md","Nginx.md"]
        },
        {
            text: "面试",
            icon: "workingDirectory",
            collapsible: true,
            prefix: "/codenotes/interview/",
            children:["Java.md"]
        },
        {
            text: "逆向",
            icon: "linter",
            collapsible: true,
            prefix: "/codenotes/reverse/",
            children:["4399.md"]
        },
    ],
    // 开源项目的侧边栏
    "/projects/": [
        {
            text: "技术杂谈(7月)",
            icon: "community",
            collapsible: true,
            prefix:"/projects/zatan/7",
            children:[
                "1.md","2.md","3.md","4.md","5.md","6.md","7.md","8.md","9.md"
            ]
        },
        {
            text: "技术杂谈(8月)",
            icon: "community",
            collapsible: true,
            prefix:"/projects/zatan/8",
            children:[
                "1.md","2.md"
            ]
        }
    ],

});
