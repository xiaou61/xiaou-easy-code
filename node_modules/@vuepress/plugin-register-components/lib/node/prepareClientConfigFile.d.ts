import type { App } from '@vuepress/core';
import type { RegisterComponentsPluginOptions } from './registerComponentsPlugin.js';
export declare const prepareClientConfigFile: (app: App, options: Required<RegisterComponentsPluginOptions>, identifier: string) => Promise<string>;
