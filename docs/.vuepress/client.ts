import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 应用级别的增强
    console.log('VuePress 应用已启动')
  },
  setup() {
    // 组件级别的逻辑
  },
  rootComponents: [],
})