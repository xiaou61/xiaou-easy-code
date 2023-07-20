import type { Plugin } from '@vuepress/core';
/**
 * Options for @vuepress/plugin-register-components
 */
export interface RegisterComponentsPluginOptions {
    /**
     * An object that defines name of components and their corresponding file path
     */
    components?: Record<string, string>;
    /**
     * Absolute path to the components directory
     */
    componentsDir?: string | null;
    /**
     * Patterns to match component files using [globby](https://github.com/sindresorhus/globby)
     *
     * The patterns are relative to componentsDir`
     */
    componentsPatterns?: string[];
    /**
     * A function to get component name from the filename
     */
    getComponentName?: (filename: string) => string;
}
export declare const registerComponentsPlugin: ({ components, componentsDir, componentsPatterns, getComponentName, }?: RegisterComponentsPluginOptions) => Plugin;
