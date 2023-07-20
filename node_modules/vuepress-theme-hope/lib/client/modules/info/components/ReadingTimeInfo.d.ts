import type { PropType, VNode } from "vue";
import type { ReadingTime } from "vuepress-plugin-reading-time2";
declare const _default: import("vue").DefineComponent<{
    readingTime: {
        type: PropType<ReadingTime | null>;
        default: () => null;
    };
    pure: BooleanConstructor;
}, () => VNode | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readingTime: {
        type: PropType<ReadingTime | null>;
        default: () => null;
    };
    pure: BooleanConstructor;
}>>, {
    readingTime: ReadingTime | null;
    pure: boolean;
}>;
export default _default;
