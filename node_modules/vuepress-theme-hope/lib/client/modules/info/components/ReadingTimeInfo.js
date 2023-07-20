import { computed, defineComponent, h } from "vue";
import { useLocaleConfig } from "vuepress-shared/client";
import { TimerIcon } from "@theme-hope/modules/info/components/icons.js";
import { useMetaLocale } from "@theme-hope/modules/info/composables/index.js";
import { readingTimeLocales } from "@theme-hope/modules/info/utils/index.js";
export default defineComponent({
    name: "ReadingTimeInfo",
    inheritAttrs: false,
    props: {
        readingTime: {
            type: Object,
            default: () => null,
        },
        pure: Boolean,
    },
    setup(props) {
        const metaLocale = useMetaLocale();
        const readingTimeLocale = useLocaleConfig(readingTimeLocales);
        const readingTime = computed(() => {
            if (!props.readingTime)
                return null;
            const { minutes } = props.readingTime;
            return minutes < 1
                ? { text: readingTimeLocale.value.less1Minute, time: "PT1M" }
                : {
                    text: readingTimeLocale.value.time.replace("$time", Math.round(minutes).toString()),
                    time: `PT${Math.round(minutes)}M`,
                };
        });
        return () => readingTime.value
            ? h("span", {
                class: "reading-time-info",
                "aria-label": `${metaLocale.value.readingTime}${props.pure ? "" : "⌛"}`,
                ...(props.pure ? {} : { "data-balloon-pos": "down" }),
            }, [
                h(TimerIcon),
                h("span", readingTime.value.text),
                h("meta", {
                    property: "timeRequired",
                    content: readingTime.value.time,
                }),
            ])
            : null;
    },
});
//# sourceMappingURL=ReadingTimeInfo.js.map