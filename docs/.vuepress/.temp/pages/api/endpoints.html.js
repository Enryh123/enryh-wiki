import comp from "/Users/henry/enryh-wiki/docs/.vuepress/.temp/pages/api/endpoints.html.vue"
const data = JSON.parse("{\"path\":\"/api/endpoints.html\",\"title\":\"API 端点\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"api/endpoints.md\"}")
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
