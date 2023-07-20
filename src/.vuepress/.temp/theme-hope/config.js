import { defineClientConfig } from "@vuepress/client";

import CommonWrapper from "@theme-hope/components/CommonWrapper.js";
import HomePage from "@theme-hope/components/HomePage.js";
import NormalPage from "@theme-hope/components/NormalPage.js";
import Navbar from "@theme-hope/modules/navbar/components/Navbar.js";
import Sidebar from "@theme-hope/modules/sidebar/components/Sidebar.js";
import Layout from "E:/mydocs/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js";
import NotFound from "E:/mydocs/node_modules/vuepress-theme-hope/lib/client/layouts/NotFound.js";

import { useScrollPromise } from "@theme-hope/composables/index.js";
import { injectDarkMode, setupDarkMode } from "@theme-hope/modules/outlook/composables/index.js";
import { setupSidebarItems } from "@theme-hope/modules/sidebar/composables/index.js";

import "E:/mydocs/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

import BloggerInfo from "@theme-hope/modules/blog/components/BloggerInfo.js";
import BlogHome from "@theme-hope/modules/blog/components/BlogHome.js";
import BlogPage from "@theme-hope/modules/blog/components/BlogPage.js";
import { setupBlog } from "@theme-hope/modules/blog/composables/index.js";
import "E:/mydocs/node_modules/vuepress-theme-hope/lib/client/modules/blog/styles/layout.scss";
import Slide from "E:/mydocs/node_modules/vuepress-theme-hope/lib/client/layouts/Slide.js";
import Blog from "E:/mydocs/node_modules/vuepress-theme-hope/lib/client/modules/blog/layouts/Blog.js";


export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    // register to inject styles
    app.component("CommonWrapper", CommonWrapper);
    app.component("HomePage", HomePage);
    app.component("NormalPage", NormalPage);
    app.component("Navbar", Navbar);
    app.component("Sidebar", Sidebar);

    app.component("BloggerInfo", BloggerInfo);
    app.component("BlogHome", BlogHome);
    app.component("BlogPage", BlogPage);
    
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
    setupBlog();
    
  },
  layouts: {
    Layout,
    NotFound,
    Slide,
    Blog,
    
  }
});