export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-4c083800","v-7208bd18","v-aafb2f66","v-1c50bb60","v-20e31015","v-6e102574","v-7dcf9315","v-e19b8b2e","v-b966791e","v-075e1028","v-44323984","v-fe30418a","v-7a3136ea"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":["v-7208bd18","v-aafb2f66","v-1c50bb60","v-20e31015","v-6e102574","v-7dcf9315","v-e19b8b2e","v-b966791e","v-075e1028","v-44323984","v-fe30418a","v-7a3136ea"]}},"timeline":{"/":{"path":"/timeline/","keys":[]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

