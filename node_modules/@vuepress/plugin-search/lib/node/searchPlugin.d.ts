import type { Page, Plugin } from '@vuepress/core';
import type { LocaleConfig } from '@vuepress/shared';
import type { HotKeyOptions } from '../shared/index.js';
/**
 * Options for @vuepress/plugin-search
 */
export interface SearchPluginOptions {
    /**
     * Locales config for search box
     */
    locales?: LocaleConfig<{
        placeholder: string;
    }>;
    /**
     * Specify the [event.key](http://keycode.info/) of the hotkeys
     *
     * When hotkeys are pressed, the search box input will be focused
     *
     * Set to an empty array to disable hotkeys
     *
     * @default ['s', '/']
     */
    hotKeys?: (string | HotKeyOptions)[];
    /**
     * Specify the maximum number of search results
     *
     * @default 5
     */
    maxSuggestions?: number;
    /**
     * A function to determine whether a page should be included in the search index
     */
    isSearchable?: (page: Page) => boolean;
    /**
     * A function to add extra fields to the search index of a page
     */
    getExtraFields?: (page: Page) => string[];
}
export declare const searchPlugin: ({ locales, hotKeys, maxSuggestions, isSearchable, getExtraFields, }?: SearchPluginOptions) => Plugin;
