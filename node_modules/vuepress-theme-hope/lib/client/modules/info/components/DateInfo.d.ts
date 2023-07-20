import type { PropType, VNode } from "vue";
import type { DateInfo } from "vuepress-shared";
declare const _default: import("vue").DefineComponent<{
    date: {
        type: PropType<DateInfo | null>;
        default: null;
    };
    localizedDate: {
        type: StringConstructor;
        default: string;
    };
    pure: BooleanConstructor;
}, () => VNode | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    date: {
        type: PropType<DateInfo | null>;
        default: null;
    };
    localizedDate: {
        type: StringConstructor;
        default: string;
    };
    pure: BooleanConstructor;
}>>, {
    date: DateInfo | null;
    pure: boolean;
    localizedDate: string;
}>;
export default _default;
