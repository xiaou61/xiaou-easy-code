import { defineComponent, h } from "vue";
import { useMetaLocale } from "@theme-hope/modules/info/composables/index.js";
export default defineComponent({
    name: "OriginalMark",
    inheritAttrs: false,
    props: {
        isOriginal: Boolean,
    },
    setup(props) {
        const metaLocale = useMetaLocale();
        return () => props.isOriginal
            ? h("span", { class: "origin" }, metaLocale.value.origin)
            : null;
    },
});
//# sourceMappingURL=OriginalMark.js.map