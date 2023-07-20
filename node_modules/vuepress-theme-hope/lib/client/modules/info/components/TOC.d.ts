import type { PropType, VNode } from "vue";
import "../styles/toc.scss";
declare const _default: import("vue").DefineComponent<{
    items: {
        type: PropType<import("@mdit-vue/types").MarkdownItHeader[]>;
        default: () => never[];
    };
    headerDepth: {
        type: NumberConstructor;
        default: number;
    };
}, () => VNode | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<import("@mdit-vue/types").MarkdownItHeader[]>;
        default: () => never[];
    };
    headerDepth: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    headerDepth: number;
    items: import("@mdit-vue/types").MarkdownItHeader[];
}>;
export default _default;
