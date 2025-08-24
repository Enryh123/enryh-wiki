import comp from "/Users/henry/enryh-wiki/docs/.vuepress/.temp/pages/guide/getting-started.html.vue"
const data = JSON.parse("{\"path\":\"/guide/getting-started.html\",\"title\":\"快速开始\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"guide/getting-started.md\"}")
export { comp, data }

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
