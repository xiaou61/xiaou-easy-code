import type { PropType, VNode } from "vue";
import type { ArticleInfo } from "../../../../shared/index.js";
import "../styles/article-item.scss";
declare const _default: import("vue").DefineComponent<{
    info: {
        type: PropType<ArticleInfo>;
        required: true;
    };
    path: {
        type: StringConstructor;
        required: true;
    };
}, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    info: {
        type: PropType<ArticleInfo>;
        required: true;
    };
    path: {
        type: StringConstructor;
        required: true;
    };
}>>, {}>;
export default _default;
