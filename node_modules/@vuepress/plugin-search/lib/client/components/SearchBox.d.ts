import type { LocaleConfig } from '@vuepress/shared';
import type { PropType } from 'vue';
import type { HotKeyOptions } from '../../shared/index.js';
export declare type SearchBoxLocales = LocaleConfig<{
    placeholder: string;
}>;
export declare const SearchBox: import("vue").DefineComponent<{
    locales: {
        type: PropType<SearchBoxLocales>;
        required: false;
        default: () => {};
    };
    hotKeys: {
        type: PropType<(string | HotKeyOptions)[]>;
        required: false;
        default: () => never[];
    };
    maxSuggestions: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    locales: {
        type: PropType<SearchBoxLocales>;
        required: false;
        default: () => {};
    };
    hotKeys: {
        type: PropType<(string | HotKeyOptions)[]>;
        required: false;
        default: () => never[];
    };
    maxSuggestions: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>>, {
    hotKeys: (string | HotKeyOptions)[];
    maxSuggestions: number;
    locales: SearchBoxLocales;
}>;
