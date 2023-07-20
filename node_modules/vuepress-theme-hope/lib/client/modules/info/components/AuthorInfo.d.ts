import type { PropType, VNode } from "vue";
import type { AuthorInfo } from "vuepress-shared";
declare const _default: import("vue").DefineComponent<{
    author: {
        type: PropType<AuthorInfo[]>;
        required: true;
    };
    pure: BooleanConstructor;
}, () => VNode | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    author: {
        type: PropType<AuthorInfo[]>;
        required: true;
    };
    pure: BooleanConstructor;
}>>, {
    pure: boolean;
}>;
export default _default;
