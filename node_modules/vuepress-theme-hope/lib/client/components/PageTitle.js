import { usePageData, usePageFrontmatter } from "@vuepress/client";
import { defineComponent, h, unref } from "vue";
import Icon from "@theme-hope/components/Icon.js";
import PageInfo from "@theme-hope/modules/info/components/PageInfo.js";
import { usePageInfo, useThemeLocaleData, } from "@theme-hope/composables/index.js";
import "../styles/page-title.scss";
export default defineComponent({
    name: "PageTitle",
    setup() {
        const page = usePageData();
        const frontmatter = usePageFrontmatter();
        const themeLocale = useThemeLocaleData();
        const { config, items } = usePageInfo();
        return () => h("div", { class: "page-title" }, [
            h("h1", [
                themeLocale.value.titleIcon !== false
                    ? h(Icon, { icon: frontmatter.value.icon })
                    : null,
                page.value.title,
            ]),
            h(PageInfo, {
                config: unref(config),
                ...(items.value === null ? {} : { items: items.value }),
            }),
            h("hr"),
        ]);
    },
});
//# sourceMappingURL=PageTitle.js.map