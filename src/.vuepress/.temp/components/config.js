import { defineClientConfig } from "@vuepress/client";
import { h } from "vue";

import { useStyleTag } from "E:/mydocs/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import FontIcon from "E:/mydocs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "E:/mydocs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import BiliBili from "E:/mydocs/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import PDF from "E:/mydocs/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import BackToTop from "E:/mydocs/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("FontIcon", FontIcon);
    app.component("Badge", Badge);
    app.component("BiliBili", BiliBili);
    app.component("PDF", PDF);
    
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
