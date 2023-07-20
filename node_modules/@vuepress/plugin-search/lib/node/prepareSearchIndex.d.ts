import type { App } from '@vuepress/core';
import type { SearchPluginOptions } from './searchPlugin.js';
export declare const prepareSearchIndex: ({ app, isSearchable, getExtraFields, }: {
    app: App;
    isSearchable: Required<SearchPluginOptions>['isSearchable'];
    getExtraFields: Required<SearchPluginOptions>['getExtraFields'];
}) => Promise<string>;
