import { VNode } from "vue";
import "../styles/pagination.scss";
declare const _default: import("vue").DefineComponent<{
    /** Number of total items */
    total: {
        type: NumberConstructor;
        default: number;
    };
    /** Items per page */
    perPage: {
        type: NumberConstructor;
        default: number;
    };
    currentPage: {
        type: NumberConstructor;
        default: number;
    };
}, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "updateCurrentPage"[], "updateCurrentPage", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** Number of total items */
    total: {
        type: NumberConstructor;
        default: number;
    };
    /** Items per page */
    perPage: {
        type: NumberConstructor;
        default: number;
    };
    currentPage: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onUpdateCurrentPage?: (...args: any[]) => any;
}, {
    total: number;
    perPage: number;
    currentPage: number;
}>;
export default _default;
