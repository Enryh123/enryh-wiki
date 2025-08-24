<template><div><h1 id="api-端点" tabindex="-1"><a class="header-anchor" href="#api-端点"><span>API 端点</span></a></h1>
<p>本章节详细介绍所有可用的 API 端点。</p>
<h2 id="用户认证" tabindex="-1"><a class="header-anchor" href="#用户认证"><span>用户认证</span></a></h2>
<h3 id="登录" tabindex="-1"><a class="header-anchor" href="#登录"><span>登录</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code class="language-http"><span class="line">POST /auth/login</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>请求参数：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"user@example.com"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"password123"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"登录成功"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"token"</span><span class="token operator">:</span> <span class="token string">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"user"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"user@example.com"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"用户名"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注册" tabindex="-1"><a class="header-anchor" href="#注册"><span>注册</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code class="language-http"><span class="line">POST /auth/register</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>请求参数：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"user@example.com"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"password123"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"用户名"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据查询" tabindex="-1"><a class="header-anchor" href="#数据查询"><span>数据查询</span></a></h2>
<h3 id="获取用户列表" tabindex="-1"><a class="header-anchor" href="#获取用户列表"><span>获取用户列表</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code class="language-http"><span class="line">GET /users</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>查询参数：</p>
<ul>
<li><code v-pre>page</code>: 页码（默认 1）</li>
<li><code v-pre>limit</code>: 每页数量（默认 10）</li>
</ul>
<p>响应：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"users"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"user1@example.com"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"用户1"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"pagination"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"limit"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"total"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token number">10</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取单个用户" tabindex="-1"><a class="header-anchor" href="#获取单个用户"><span>获取单个用户</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code class="language-http"><span class="line">GET /users/:id</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>响应：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"user@example.com"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"用户名"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"created_at"</span><span class="token operator">:</span> <span class="token string">"2024-01-01T00:00:00Z"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件上传" tabindex="-1"><a class="header-anchor" href="#文件上传"><span>文件上传</span></a></h2>
<h3 id="上传文件" tabindex="-1"><a class="header-anchor" href="#上传文件"><span>上传文件</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code class="language-http"><span class="line">POST /upload</span>
<span class="line"><span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">multipart/form-data</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>表单字段：</p>
<ul>
<li><code v-pre>file</code>: 文件内容</li>
<li><code v-pre>type</code>: 文件类型（可选）</li>
</ul>
<p>响应：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"上传成功"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"https://cdn.example.com/file.jpg"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"filename"</span><span class="token operator">:</span> <span class="token string">"file.jpg"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">102400</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="错误码说明" tabindex="-1"><a class="header-anchor" href="#错误码说明"><span>错误码说明</span></a></h2>
<table>
<thead>
<tr>
<th>错误码</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>400</td>
<td>请求参数错误</td>
</tr>
<tr>
<td>401</td>
<td>未授权</td>
</tr>
<tr>
<td>403</td>
<td>权限不足</td>
</tr>
<tr>
<td>404</td>
<td>资源不存在</td>
</tr>
<tr>
<td>500</td>
<td>服务器内部错误</td>
</tr>
</tbody>
</table>
<h2 id="测试工具" tabindex="-1"><a class="header-anchor" href="#测试工具"><span>测试工具</span></a></h2>
<p>可以使用以下工具测试 API：</p>
<ul>
<li><a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">Postman</a></li>
<li><a href="https://curl.se/" target="_blank" rel="noopener noreferrer">curl</a></li>
<li><a href="https://httpie.io/" target="_blank" rel="noopener noreferrer">HTTPie</a></li>
</ul>
</div></template>


