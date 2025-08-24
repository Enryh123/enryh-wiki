<template><div><h1 id="api-文档" tabindex="-1"><a class="header-anchor" href="#api-文档"><span>API 文档</span></a></h1>
<p>本章节包含所有 API 接口的详细文档。</p>
<h2 id="api-概览" tabindex="-1"><a class="header-anchor" href="#api-概览"><span>API 概览</span></a></h2>
<p>我们提供以下 API 接口：</p>
<ul>
<li>用户认证</li>
<li>数据查询</li>
<li>文件上传</li>
<li>实时通信</li>
</ul>
<h2 id="认证" tabindex="-1"><a class="header-anchor" href="#认证"><span>认证</span></a></h2>
<p>所有 API 请求都需要包含认证信息：</p>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code class="language-http"><span class="line"><span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Bearer &lt;your-token></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="基础-url" tabindex="-1"><a class="header-anchor" href="#基础-url"><span>基础 URL</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">https://api.example.com/v1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="响应格式" tabindex="-1"><a class="header-anchor" href="#响应格式"><span>响应格式</span></a></h2>
<p>所有 API 响应都使用 JSON 格式：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 具体数据</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理"><span>错误处理</span></a></h2>
<p>错误响应格式：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Bad Request"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"error"</span><span class="token operator">:</span> <span class="token string">"具体错误信息"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分页" tabindex="-1"><a class="header-anchor" href="#分页"><span>分页</span></a></h2>
<p>支持分页的接口：</p>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code class="language-http"><span class="line">GET /api/items?page=1&amp;limit=10</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>参数说明：</p>
<ul>
<li><code v-pre>page</code>: 页码，从 1 开始</li>
<li><code v-pre>limit</code>: 每页数量，最大 100</li>
</ul>
<h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步"><span>下一步</span></a></h2>
<p>查看具体的 <RouteLink to="/api/endpoints.html">端点文档</RouteLink> 了解详细接口信息。</p>
</div></template>


