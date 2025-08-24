export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/henry/enryh-wiki/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Enryh Wiki"} }],
  ["/api/", { loader: () => import(/* webpackChunkName: "api_index.html" */"/Users/henry/enryh-wiki/docs/.vuepress/.temp/pages/api/index.html.js"), meta: {"title":"API 文档"} }],
  ["/api/endpoints.html", { loader: () => import(/* webpackChunkName: "api_endpoints.html" */"/Users/henry/enryh-wiki/docs/.vuepress/.temp/pages/api/endpoints.html.js"), meta: {"title":"API 端点"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/Users/henry/enryh-wiki/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"指南"} }],
  ["/guide/configuration.html", { loader: () => import(/* webpackChunkName: "guide_configuration.html" */"/Users/henry/enryh-wiki/docs/.vuepress/.temp/pages/guide/configuration.html.js"), meta: {"title":"配置"} }],
  ["/guide/getting-started.html", { loader: () => import(/* webpackChunkName: "guide_getting-started.html" */"/Users/henry/enryh-wiki/docs/.vuepress/.temp/pages/guide/getting-started.html.js"), meta: {"title":"快速开始"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/henry/enryh-wiki/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
