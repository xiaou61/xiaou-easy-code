import { getComponentsFromDir } from './getComponentsFromDir.js';
export const prepareClientConfigFile = async (app, options, identifier) => {
    // get components from directory
    const componentsFromDir = await getComponentsFromDir(options);
    // components from options will override components from dir
    // if they have the same component name
    const componentsMap = {
        ...componentsFromDir,
        ...options.components,
    };
    // client app enhance file content
    const content = `\
import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {\
    ${Object.entries(componentsMap).map(([name, filepath]) => `
      app.component(${JSON.stringify(name)}, defineAsyncComponent(() => import(${JSON.stringify(filepath)})))`)}
  },
}
`;
    // write temp file and return the file path
    return app.writeTemp(`register-components/clientConfig.${identifier}.js`, content);
};
