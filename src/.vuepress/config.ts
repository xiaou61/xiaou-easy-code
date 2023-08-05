import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import {  path } from "@vuepress/utils";
import theme from "./theme.js";
import {hopeTheme} from "vuepress-theme-hope";
import { commentPlugin } from "vuepress-plugin-comment2";


//自定义用户配置
export default defineUserConfig({




  base: "/",

  // 多语言设置
  locales: {
    "/": {
      lang: "zh-CN",
      title: "小uの学习笔记",
      description: "小uの学习笔记",
      // 设置favicon
      head: [["link", { rel: "icon", href: "/favicon.svg" }]],
    },
  },



  // 主题设置
  theme,
  plugins: [



    // 注册全局组件的插件
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),

    //评论配置
    commentPlugin({
      provider: "Waline",
      serverURL: "https://repo.guoyaxue.top/",

    }),

    // 搜索插件
    searchPlugin({
      //多语言支持
      locales: {
        "/": {
          placeholder: "搜索本站",
        },
      },
      // 热键支持
      hotKeys: ["command", "k"],
      // 最大推荐个数
      maxSuggestions: 7,
      // 排除首页
      isSearchable: (page) => page.path !== "/",
    }),
  ],


  shouldPrefetch: false,



});
