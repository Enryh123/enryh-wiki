<template><div><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h1>
<p>本章节介绍如何配置 VuePress 项目。</p>
<h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置"><span>基本配置</span></a></h2>
<p>VuePress 的主要配置文件位于 <code v-pre>docs/.vuepress/config.ts</code>。</p>
<h3 id="站点信息" tabindex="-1"><a class="header-anchor" href="#站点信息"><span>站点信息</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  lang<span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token string">'Enryh Wiki'</span><span class="token punctuation">,</span></span>
<span class="line">  description<span class="token operator">:</span> <span class="token string">'一个基于 VuePress 的文档网站'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主题配置" tabindex="-1"><a class="header-anchor" href="#主题配置"><span>主题配置</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line">theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  logo<span class="token operator">:</span> <span class="token string">'/images/logo.png'</span><span class="token punctuation">,</span></span>
<span class="line">  repo<span class="token operator">:</span> <span class="token string">'https://github.com/your-username/enryh-wiki'</span><span class="token punctuation">,</span></span>
<span class="line">  docsDir<span class="token operator">:</span> <span class="token string">'docs'</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  navbar<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      text<span class="token operator">:</span> <span class="token string">'首页'</span><span class="token punctuation">,</span></span>
<span class="line">      link<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      text<span class="token operator">:</span> <span class="token string">'指南'</span><span class="token punctuation">,</span></span>
<span class="line">      link<span class="token operator">:</span> <span class="token string">'/guide/'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义主题" tabindex="-1"><a class="header-anchor" href="#自定义主题"><span>自定义主题</span></a></h2>
<h3 id="添加自定义样式" tabindex="-1"><a class="header-anchor" href="#添加自定义样式"><span>添加自定义样式</span></a></h3>
<p>创建 <code v-pre>docs/.vuepress/styles/index.scss</code>：</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre v-pre><code class="language-scss"><span class="line"><span class="token selector">:root </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--c-brand</span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-brand-light</span><span class="token punctuation">:</span> #4abf8a<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义布局" tabindex="-1"><a class="header-anchor" href="#自定义布局"><span>自定义布局</span></a></h3>
<p>创建 <code v-pre>docs/.vuepress/layouts/Layout.vue</code>：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code class="language-vue"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#page-bottom</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>This is my custom footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default/lib/client/layouts/Layout.vue'</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插件配置" tabindex="-1"><a class="header-anchor" href="#插件配置"><span>插件配置</span></a></h2>
<h3 id="搜索插件" tabindex="-1"><a class="header-anchor" href="#搜索插件"><span>搜索插件</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> searchPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-search'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">searchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      locales<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          placeholder<span class="token operator">:</span> <span class="token string">'搜索'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他常用插件" tabindex="-1"><a class="header-anchor" href="#其他常用插件"><span>其他常用插件</span></a></h3>
<ul>
<li><code v-pre>@vuepress/plugin-back-to-top</code> - 返回顶部按钮</li>
<li><code v-pre>@vuepress/plugin-medium-zoom</code> - 图片缩放</li>
<li><code v-pre>@vuepress/plugin-pwa</code> - PWA 支持</li>
</ul>
<h2 id="部署配置" tabindex="-1"><a class="header-anchor" href="#部署配置"><span>部署配置</span></a></h2>
<h3 id="基础路径" tabindex="-1"><a class="header-anchor" href="#基础路径"><span>基础路径</span></a></h3>
<p>如果你的站点部署在子路径下，需要设置 <code v-pre>base</code>：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  base<span class="token operator">:</span> <span class="token string">'/my-docs/'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量"><span>环境变量</span></a></h3>
<p>可以使用环境变量进行不同环境的配置：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line"><span class="token keyword">const</span> isProd <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'production'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  debug<span class="token operator">:</span> <span class="token operator">!</span>isProd<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


