import type { DefineComponent, VNode } from "vue";
import "../styles/common.scss";
declare const _default: DefineComponent<{
    /** @description Whether enable navbar */
    navbar: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description Whether enable sidebar */
    sidebar: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** @description Whether enable navbar */
    navbar: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description Whether enable sidebar */
    sidebar: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    navbar: boolean;
    sidebar: boolean;
}>;
export default _default;
