# 配置

本章节介绍如何配置 VuePress 项目。

## 基本配置

VuePress 的主要配置文件位于 `docs/.vuepress/config.ts`。

### 站点信息

```typescript
export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Enryh Wiki',
  description: '一个基于 VuePress 的文档网站',
})
```

### 主题配置

```typescript
theme: defaultTheme({
  logo: '/images/logo.png',
  repo: 'https://github.com/your-username/enryh-wiki',
  docsDir: 'docs',
  
  navbar: [
    {
      text: '首页',
      link: '/',
    },
    {
      text: '指南',
      link: '/guide/',
    },
  ],
})
```

## 自定义主题

### 添加自定义样式

创建 `docs/.vuepress/styles/index.scss`：

```scss
:root {
  --c-brand: #3eaf7c;
  --c-brand-light: #4abf8a;
}
```

### 自定义布局

创建 `docs/.vuepress/layouts/Layout.vue`：

```vue
<template>
  <Layout>
    <template #page-bottom>
      <div class="my-footer">This is my custom footer</div>
    </template>
  </Layout>
</template>

<script setup>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
</script>
```

## 插件配置

### 搜索插件

```typescript
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
})
```

### 其他常用插件

- `@vuepress/plugin-back-to-top` - 返回顶部按钮
- `@vuepress/plugin-medium-zoom` - 图片缩放
- `@vuepress/plugin-pwa` - PWA 支持

## 部署配置

### 基础路径

如果你的站点部署在子路径下，需要设置 `base`：

```typescript
export default defineUserConfig({
  base: '/my-docs/',
})
```

### 环境变量

可以使用环境变量进行不同环境的配置：

```typescript
const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  debug: !isProd,
})
```