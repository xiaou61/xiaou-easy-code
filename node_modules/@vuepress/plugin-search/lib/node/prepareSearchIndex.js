const HMR_CODE = `
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
`;
export const prepareSearchIndex = async ({ app, isSearchable, getExtraFields, }) => {
    // generate search index
    const searchIndex = app.pages
        .filter(isSearchable)
        .map((page) => ({
        title: page.title,
        headers: page.headers,
        path: page.path,
        pathLocale: page.pathLocale,
        extraFields: getExtraFields(page),
    }));
    // search index file content
    let content = `\
export const searchIndex = ${JSON.stringify(searchIndex, null, 2)}
`;
    // inject HMR code
    if (app.env.isDev) {
        content += HMR_CODE;
    }
    return app.writeTemp('internal/searchIndex.js', content);
};
