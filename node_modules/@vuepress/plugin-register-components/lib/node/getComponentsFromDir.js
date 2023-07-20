import { globby, path } from '@vuepress/utils';
export const getComponentsFromDir = async ({ componentsDir, componentsPatterns, getComponentName, }) => {
    if (!componentsDir) {
        return {};
    }
    // get all matched component files
    const componentsDirFiles = await globby(componentsPatterns, {
        cwd: componentsDir,
    });
    // transform files to name => filepath map
    return Object.fromEntries(componentsDirFiles.map((filename) => [
        getComponentName(filename),
        path.resolve(componentsDir, filename),
    ]));
};
