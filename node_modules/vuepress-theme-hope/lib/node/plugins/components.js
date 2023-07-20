import { componentsPlugin } from "vuepress-plugin-components";
export const getComponentsPlugin = (components = ["Badge", "FontIcon"], options) => componentsPlugin({
    // FontIcon component is used by theme so we MUST enable it
    components: components.includes("FontIcon")
        ? components
        : ["FontIcon", ...components],
    backToTop: typeof options.backToTop === "number"
        ? options.backToTop
        : options.backToTop !== false,
    ...(options.addThis ? { addThis: options.addThis } : {}),
    ...(options.iconAssets ? { iconAssets: options.iconAssets } : {}),
    ...(typeof options.iconPrefix === "string"
        ? { iconPrefix: options.iconPrefix }
        : {}),
});
//# sourceMappingURL=components.js.map