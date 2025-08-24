# Enryh Wiki

这是一个基于 VuePress 2.x 构建的文档网站，从 AWS Amplify Vue 模板项目转换而来。

## 特性

- 🚀 基于 VuePress 2.x 最新版本
- 📱 响应式设计
- 🔍 内置搜索功能
- 🎯 清晰的导航结构
- ⚡ 快速加载
- 📝 支持 Markdown

## 快速开始

### 环境要求

- Node.js 18 或更高版本
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:8080` 查看网站。

### 构建生产版本

```bash
npm run build
```

## 项目结构

```
docs/
├── .vuepress/
│   ├── config.ts          # VuePress 配置文件
│   ├── client.ts          # 客户端配置
│   ├── public/            # 静态资源
│   └── styles/            # 自定义样式
├── guide/                 # 指南文档
├── api/                   # API 文档
└── README.md             # 主页
```

## 导航结构

- **首页** - 网站主页
- **指南** - 使用指南和教程
  - 快速开始
  - 配置说明
- **API** - API 文档
  - API 概览
  - 端点文档

## 自定义配置

编辑 `docs/.vuepress/config.ts` 文件来自定义：

- 网站标题和描述
- 导航栏
- 侧边栏
- 主题样式
- 插件配置

## 部署

构建后的文件位于 `docs/.vuepress/dist/` 目录，可以部署到：

- GitHub Pages
- Netlify
- Vercel
- AWS Amplify

## 开发命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run clean-dev` | 清除缓存并启动开发服务器 |

## 技术栈

- **VuePress 2.x** - 静态网站生成器
- **Vite** - 构建工具
- **TypeScript** - 类型系统
- **Vue 3** - 前端框架