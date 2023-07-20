// 客户端增强配置文件-https://v2.vuepress.vuejs.org/zh/guide/migration.html#%E7%BA%A6%E5%AE%9A%E6%96%87%E4%BB%B6%E5%8F%98%E6%9B%B4
import { defineClientConfig } from "@vuepress/client";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    // 引入Element-plus组件库
    // 【引入的主要目的不是在MD文档中使用Element的组件，主要是为了编写自己的组件】
    // 【自己写的组件被registerComponentsPlugin插件引入全局在进行使用】
    app.use(ElementPlus);
  },
});
