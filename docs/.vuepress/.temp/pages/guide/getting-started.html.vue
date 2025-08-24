<template><div><h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h1>
<p>本章节将帮助你快速开始使用本项目。</p>
<h2 id="环境要求" tabindex="-1"><a class="header-anchor" href="#环境要求"><span>环境要求</span></a></h2>
<ul>
<li>Node.js &gt;= 16.0.0</li>
<li>npm 或 yarn</li>
</ul>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<h3 id="_1-克隆项目" tabindex="-1"><a class="header-anchor" href="#_1-克隆项目"><span>1. 克隆项目</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">git</span> clone https://github.com/your-username/enryh-wiki.git</span>
<span class="line"><span class="token builtin class-name">cd</span> enryh-wiki</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-安装依赖" tabindex="-1"><a class="header-anchor" href="#_2-安装依赖"><span>2. 安装依赖</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-启动开发服务器" tabindex="-1"><a class="header-anchor" href="#_3-启动开发服务器"><span>3. 启动开发服务器</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">npm</span> run dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>访问 <code v-pre>http://localhost:8080</code> 查看网站。</p>
<h2 id="目录说明" tabindex="-1"><a class="header-anchor" href="#目录说明"><span>目录说明</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">docs/</span>
<span class="line">├── .vuepress/</span>
<span class="line">│   ├── config.ts          # VuePress 配置文件</span>
<span class="line">│   ├── client.ts          # 客户端配置文件</span>
<span class="line">│   └── public/            # 静态资源目录</span>
<span class="line">├── guide/                 # 指南文档</span>
<span class="line">├── api/                   # API 文档</span>
<span class="line">└── README.md             # 主页</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令"><span>基本命令</span></a></h2>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>npm run dev</code></td>
<td>启动开发服务器</td>
</tr>
<tr>
<td><code v-pre>npm run build</code></td>
<td>构建生产版本</td>
</tr>
<tr>
<td><code v-pre>npm run clean-dev</code></td>
<td>清除缓存并启动开发服务器</td>
</tr>
</tbody>
</table>
<h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步"><span>下一步</span></a></h2>
<ul>
<li><RouteLink to="/guide/configuration.html">查看配置说明</RouteLink></li>
<li><RouteLink to="/api/">了解 API 文档</RouteLink></li>
</ul>
</div></template>


