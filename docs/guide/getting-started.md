# 快速开始

本章节将帮助你快速开始使用本项目。

## 环境要求

- Node.js >= 16.0.0
- npm 或 yarn

## 安装

### 1. 克隆项目

```bash
git clone https://github.com/your-username/enryh-wiki.git
cd enryh-wiki
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:8080` 查看网站。

## 目录说明

```
docs/
├── .vuepress/
│   ├── config.ts          # VuePress 配置文件
│   ├── client.ts          # 客户端配置文件
│   └── public/            # 静态资源目录
├── guide/                 # 指南文档
├── api/                   # API 文档
└── README.md             # 主页
```

## 基本命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run clean-dev` | 清除缓存并启动开发服务器 |

## 下一步

- [查看配置说明](./configuration.md)
- [了解 API 文档](/api/)