# AWS Amplify 部署指南

## 概述
本项目已配置为支持 AWS Amplify 部署。所有必要的配置文件已更新。

## 部署步骤

### 1. 连接 Git 仓库
1. 登录 AWS Amplify 控制台
2. 点击 "New app" → "Host web app"
3. 选择你的 Git 提供商 (GitHub, GitLab, Bitbucket, CodeCommit)
4. 选择此项目仓库

### 2. 构建配置
项目已包含必要的配置文件：
- `amplify.yml` - Amplify 构建配置
- `package.json` - 包含 Amplify 专用构建脚本

### 3. 构建设置
在 Amplify 控制台中，确保以下设置：
- **构建命令**: `npm run amplify:build`
- **输出目录**: `docs/.vuepress/dist`

### 4. 环境变量（可选）
如果需要，可以在 Amplify 控制台设置环境变量：
- `NODE_ENV=production`

## 项目结构
```
├── docs/
│   ├── .vuepress/
│   │   ├── config.ts      # VuePress 配置
│   │   └── dist/          # 构建输出目录
│   ├── api/               # API 文档
│   ├── guide/             # 使用指南
│   └── README.md          # 首页内容
├── amplify.yml            # Amplify 构建配置
├── package.json           # 项目依赖和脚本
└── tsconfig.json          # TypeScript 配置
```

## 本地测试
在部署前，可以本地测试构建：
```bash
npm run amplify:build
```

构建结果将位于 `docs/.vuepress/dist/` 目录。

## 常见问题

### 构建失败
1. 检查 Node.js 版本 (推荐 18.x 或更高)
2. 确保所有依赖已安装: `npm ci`
3. 验证配置文件语法

### 404 错误
1. 检查 SPA 重写规则设置
2. 在 Amplify 控制台中设置重定向规则：
   - 源地址: `</^[^.]+$|\\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|ttf|map|json)$)([^.]+$)/>`
   - 目标地址: `/index.html`
   - 类型: `200 (Rewrite)`

### 样式问题
1. 检查静态资源路径
2. 确保 base URL 配置正确

## 技术支持
- VuePress 文档: https://v2.vuepress.vuejs.org/
- AWS Amplify 文档: https://docs.aws.amazon.com/amplify/