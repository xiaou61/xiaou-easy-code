import type { ExtractPropTypes } from 'vue';
import type { RouteLocationRaw } from 'vue-router';
import type BreadcrumbItem from './breadcrumb-item.vue';
export declare const breadcrumbItemProps: {
    readonly to: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => RouteLocationRaw & {}) | (() => RouteLocationRaw) | ((new (...args: any[]) => RouteLocationRaw & {}) | (() => RouteLocationRaw))[], unknown, unknown, "", boolean>;
    readonly replace: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
};
export declare type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>;
export declare type BreadcrumbItemInstance = InstanceType<typeof BreadcrumbItem>;
