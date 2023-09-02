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
                    children: ["java基础.md", "java面向对象.md","JDK新特性.md"]
                },
                {
                    text: "重学Java(千锋教育2023)",
                    collapsible: true,
                    icon: "write",
                    prefix: "qf/",
                    children: ["1.md","2.md","3.md","4.md"]
                },
                {
                    text: "JVM(尚硅谷)",
                    collapsible: true,
                    icon: "write",
                    prefix: "jvm/",
                    children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md", "10.md", "11.md", "12.md"]
                },
                {
                    text: "JVM(doocs)",
                    collapsible: true,
                    icon: "write",
                    prefix: "jvm2/",
                    children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md", "10.md"]
                },
                {
                    text: "spring6",
                    collapsible: true,
                    icon: "write",
                    link: "spring6.md",
                },
                {
                    text: "coder1v5笔记",
                    collapsible: true,
                    icon: "write",
                    prefix: "coder/",
                    children: ["1.md", "2.md"]
                },
                {
                    text: "设计模式(黑马)",
                    collapsible: true,
                    icon: "write",
                    prefix: "hm/",
                    children: ["1.md", "2.md","3.md","4.md","5.md","6.md"]
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
                "HTML.md", "WebApi.md", "ts.md",
                {
                    text: "渡一大师课笔记",
                    collapsible: true,
                    icon: "write",
                    prefix: "dy/",
                    children: [
                        "HC.md", "HC2.md", "Git.md"
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
                "2023.md", "auto.md",
                {
                    text: "python全栈(路飞学院)",
                    icon: "network",
                    prefix: "lf/",
                    collapsible: true,
                    children: ["1.md", "2.md"]
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
            text: "其他技术",
            icon: "workingDirectory",
            collapsible: true,
            prefix: "/codenotes/other/",
            children: ["Git.md","how-to-use-git-efficiently.md", "Nginx.md","effective-coding.md","clean-code.md"]
        },
        {
            text: "逆向",
            icon: "linter",
            collapsible: true,
            prefix: "/codenotes/reverse/",
            children: ["4399.md"]
        },
        {
            text: "推荐书籍",
            icon: "linter",
            collapsible: true,
            prefix: "/codenotes/book/",
            children: ["front.md","end.md"]
        },
    ],
    //面试
    "/interview/": [
        {
            text: "每日一面",
            icon: "blog",
            collapsible: true,
            prefix: "day/",
            children: [
                {
                    text: "8月",
                    icon: "blog",
                    collapsible: true,
                    prefix: "8/",
                    children: [
                        "1.md","2.md","3.md","4.md","5.md","6.md","7.md","8.md","9.md","10.md","11.md","12.md","13.md","14.md","15.md","16.md","17.md","18.md","19.md","20.md","21.md","22.md","23.md"
                    ]
                },
                {
                    text: "9月",
                    icon: "blog",
                    collapsible: true,
                    prefix: "9/",
                    children: [
                        "1.md","2.md"
                    ]
                }
            ],
        },
        {
            text: "精选面试题(沉默王二)",
            icon: "blog",
            collapsible: true,
            prefix: "selected/",
            children : ["1.md","2.md","3.md","4.md","5.md","6.md","7.md","8.md","9.md","10.md","11.md","12.md","13.md","14.md",]
        },
        {
            text: "就业城市详细解读(大白)",
            icon: "blog",
            collapsible: true,
            prefix: "city/",
            children : ["1.md","2.md","3.md","4.md","5.md","6.md","7.md","8.md","9.md","10.md","11.md","12.md","13.md","14.md","15.md","16.md"]
        },
        "Java.md",

    ],


    // 技术杂谈
    "/projects/": [
        {
            text: "技术杂谈(7月)",
            icon: "community",
            collapsible: true,
            prefix: "/projects/zatan/7",
            children: [

                "1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md"
            ]
        },
        {
            text: "技术杂谈(8月)",
            icon: "community",
            collapsible: true,
            prefix: "/projects/zatan/8",
            children: [
                "1.md", "2.md", "3.md", "4.md", "5.md", "6.md","7.md","8.md","9.md","10.md","11.md","12.md","13.md","14.md","15.md","16.md","17.md","18.md","19.md","20.md","21.md","22.md","23.md","24.md"
            ]
        },
        {
            text: "技术杂谈(9月)",
            icon: "community",
            collapsible: true,
            prefix: "/projects/zatan/9",
            children: [
                "1.md"
            ]
        }
    ],
    //开源项目
    "/practice/":[
        "1.md"
    ],

});
