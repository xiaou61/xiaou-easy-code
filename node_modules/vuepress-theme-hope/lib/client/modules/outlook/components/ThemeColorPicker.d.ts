import { PropType } from "vue";
import type { VNode } from "vue";
import "../styles/theme-color-picker.scss";
declare const _default: import("vue").DefineComponent<{
    themeColor: {
        type: PropType<Record<string, string>>;
        required: true;
    };
}, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    themeColor: {
        type: PropType<Record<string, string>>;
        required: true;
    };
}>>, {}>;
export default _default;
