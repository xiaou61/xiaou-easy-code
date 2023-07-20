import { copyrightPlugin } from "vuepress-plugin-copyright2";
import { getAuthor } from "vuepress-shared/node";
export const getCopyrightPlugin = (themeConfig, options, hostname) => {
    if (!options)
        return null;
    return copyrightPlugin({
        hostname,
        author: (page) => getAuthor(page.frontmatter.author)?.[0]?.name ||
            getAuthor(themeConfig.author)?.[0]?.name ||
            "",
        ...(typeof options === "object" ? options : { global: true }),
    });
};
//# sourceMappingURL=copyright.js.map