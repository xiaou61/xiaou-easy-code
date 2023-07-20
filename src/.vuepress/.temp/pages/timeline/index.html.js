export const data = JSON.parse("{\"key\":\"v-01560935\",\"path\":\"/timeline/\",\"title\":\"时间轴\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"时间轴\",\"blog\":{\"type\":\"type\",\"key\":\"timeline\"},\"layout\":\"Blog\",\"description\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://gitee.com/lizifan233/mynotes/timeline/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"小uの学习笔记\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"时间轴\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
