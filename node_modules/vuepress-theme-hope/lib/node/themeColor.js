export const prepareThemeColorScss = async (app, themeConfig) => {
    await app.writeTemp("theme-hope/theme-color.scss", `\
$picker: (${Object.entries(themeConfig.themeColor || {})
        .map(([color, value]) => `"${color}": ${value}`)
        .join(",")});
`);
};
//# sourceMappingURL=themeColor.js.map