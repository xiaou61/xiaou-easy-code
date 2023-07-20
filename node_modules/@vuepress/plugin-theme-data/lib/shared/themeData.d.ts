import type { LocaleConfig, LocaleData } from '@vuepress/shared';
export declare type ThemeData<T extends LocaleData = LocaleData> = T & {
    locales?: LocaleConfig<T>;
};
