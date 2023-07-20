import { defineComponent, h } from "vue";
import { useRoute, useRouter } from "vue-router";
import { generateIndexfromHash } from "vuepress-shared/client";
import { TagIcon } from "@theme-hope/modules/info/components/icons.js";
import { useMetaLocale } from "@theme-hope/modules/info/composables/index.js";
import "../styles/tag.scss";
export default defineComponent({
    name: "TagInfo",
    inheritAttrs: false,
    props: {
        tag: {
            type: Array,
            default: () => [],
        },
        pure: Boolean,
    },
    setup(props) {
        const router = useRouter();
        const route = useRoute();
        const metaLocale = useMetaLocale();
        const navigate = (event, path = "") => {
            if (path && route.path !== path) {
                event.preventDefault();
                void router.push(path);
            }
        };
        return () => props.tag.length
            ? h("span", {
                "aria-label": `${metaLocale.value.tag}${props.pure ? "" : "🏷"}`,
                ...(props.pure ? {} : { "data-balloon-pos": "down" }),
            }, [
                h(TagIcon),
                h("ul", { class: "tags-wrapper" }, props.tag.map(({ name, path }) => h("li", h("span", {
                    class: [
                        "tag",
                        {
                            // TODO: magic number 9 is tricky here
                            [`tag${generateIndexfromHash(name, 9)}`]: !props.pure,
                            clickable: path,
                        },
                    ],
                    role: path ? "navigation" : "",
                    onClick: (event) => navigate(event, path),
                }, name)))),
                h("meta", {
                    property: "keywords",
                    content: props.tag.map(({ name }) => name).join(","),
                }),
            ])
            : null;
    },
});
//# sourceMappingURL=TagInfo.js.map