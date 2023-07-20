import type { VNode } from "vue";
import "../styles/nav-screen.scss";
declare const _default: import("vue").DefineComponent<{
    active: BooleanConstructor;
}, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    active: BooleanConstructor;
}>> & {
    onClose?: (...args: any[]) => any;
}, {
    active: boolean;
}>;
export default _default;
