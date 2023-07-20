import { withBase } from "@vuepress/client";
import { defineComponent, h, toRef, unref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import PageInfo from "@theme-hope/modules/info/components/PageInfo.js";
import { SlideIcon, StickyIcon, } from "@theme-hope/modules/blog/components/icons/index.js";
import { useArticleInfo } from "@theme-hope/modules/blog/composables/index.js";
import { LockIcon } from "@theme-hope/modules/encrypt/components/icons.js";
import "../styles/article-item.scss";
export default defineComponent({
    name: "ArticleItem",
    props: {
        info: {
            type: Object,
            required: true,
        },
        path: { type: String, required: true },
    },
    setup(props) {
        const router = useRouter();
        const { config, items } = useArticleInfo(props);
        const info = toRef(props, "info");
        return () => h("div", { class: "article-item" }, h("article", {
            class: "article",
            vocab: "https://schema.org/",
            typeof: "Article",
            onClick: () => {
                void router.push(props.path);
            },
        }, [
            info.value["u" /* ArticleInfoType.sticky */] ? h(StickyIcon) : null,
            h(RouterLink, { to: props.path }, () => [
                h("header", { class: "title" }, [
                    info.value["n" /* ArticleInfoType.isEncrypted */] ? h(LockIcon) : null,
                    info.value["y" /* ArticleInfoType.type */] === "s" /* PageType.slide */
                        ? h(SlideIcon)
                        : null,
                    h("span", { property: "headline" }, info.value["t" /* ArticleInfoType.title */]),
                    info.value["v" /* ArticleInfoType.cover */]
                        ? h("meta", {
                            property: "image",
                            content: withBase(info.value["v" /* ArticleInfoType.cover */]),
                        })
                        : null,
                ]),
            ]),
            info.value["e" /* ArticleInfoType.excerpt */]
                ? h("div", {
                    class: "excerpt",
                    innerHTML: info.value["e" /* ArticleInfoType.excerpt */],
                })
                : null,
            h("hr", { class: "hr" }),
            h(PageInfo, {
                config: unref(config),
                ...(items.value ? { items: items.value } : {}),
            }),
        ]));
    },
});
//# sourceMappingURL=ArticleItem.js.map