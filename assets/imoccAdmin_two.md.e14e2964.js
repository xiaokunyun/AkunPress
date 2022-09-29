import{_ as s,o as n,c as a,d as o}from"./app.31287617.js";const A=JSON.parse('{"title":"\u7F16\u7A0B\u89C4\u8303\u89E3\u51B3\u65B9\u6848\u4E4BESLint + Git Hooks","description":"","frontmatter":{},"headers":[],"relativePath":"imoccAdmin/two.md"}'),p={name:"imoccAdmin/two.md"},l=o(`<h1 id="\u7F16\u7A0B\u89C4\u8303\u89E3\u51B3\u65B9\u6848\u4E4Beslint-git-hooks" tabindex="-1">\u7F16\u7A0B\u89C4\u8303\u89E3\u51B3\u65B9\u6848\u4E4BESLint + Git Hooks <a class="header-anchor" href="#\u7F16\u7A0B\u89C4\u8303\u89E3\u51B3\u65B9\u6848\u4E4Beslint-git-hooks" aria-hidden="true">#</a></h1><h1 id="\u4E3A\u4EC0\u4E48\u9700\u8981\u7F16\u7A0B\u89C4\u8303\uFF1F" tabindex="-1">\u4E3A\u4EC0\u4E48\u9700\u8981\u7F16\u7A0B\u89C4\u8303\uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9700\u8981\u7F16\u7A0B\u89C4\u8303\uFF1F" aria-hidden="true">#</a></h1><p><strong>\u5DE5\u6B32\u5584\u5176\u4E8B\uFF0C\u5FC5\u5148\u5229\u5176\u5668</strong></p><p>\u5BF9\u4E8E\u4E00\u4E9B\u5927\u578B\u7684\u4F01\u4E1A\u7EA7\u9879\u76EE\u800C\u8A00\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u6211\u4EEC\u90FD\u662F\u9700\u8981\u4E00\u4E2A\u56E2\u961F\u6765\u8FDB\u884C\u5F00\u53D1\u7684\u3002\u800C\u53C8\u56E0\u4E3A\u56E2\u961F\u4EBA\u5458\u5BF9\u6280\u672F\u7406\u89E3\u4E0A\u7684\u53C2\u5DEE\u4E0D\u9F50\uFF0C\u6240\u4EE5\u5C31\u4F1A\u5BFC\u81F4\u51FA\u73B0\u4E00\u79CD\u60C5\u51B5\uFF0C\u90A3\u5C31\u662F\u300A<strong>\u4E00\u4E2A\u9879\u76EE\u65E0\u6CD5\u5177\u5907\u7EDF\u4E00\u7684\u7F16\u7A0B\u89C4\u8303\uFF0C\u5BFC\u81F4\u9879\u76EE\u7684\u4EE3\u7801\u50CF\u591A\u4E2A\u4E0D\u540C\u6750\u8D28\u7684\u8865\u4E01\u62FC\u63A5\u8D77\u6765\u4E00\u6837</strong>\u300B</p><blockquote><p>\u6709\u7684\u5730\u65B9\u6709\u7A7A\u683C\u8FDB\u884C\u5206\u5272\uFF0C\u6709\u7684\u5730\u65B9\u5374\u6CA1\u6709</p><p>\u6709\u7684\u5730\u65B9\u662F\u5355\u5F15\u53F7\uFF0C\u6709\u7684\u5730\u65B9\u5374\u662F\u53CC\u5F15\u53F7</p><p>\u6709\u7684\u5730\u65B9\u6709\u5206\u53F7\uFF0C\u6709\u7684\u5730\u65B9\u6CA1\u6709\u5206\u53F7</p><p>....</p></blockquote><h1 id="\u4EE3\u7801\u68C0\u6D4B\u5DE5\u5177-eslint" tabindex="-1">\u4EE3\u7801\u68C0\u6D4B\u5DE5\u5177 ESLint <a class="header-anchor" href="#\u4EE3\u7801\u68C0\u6D4B\u5DE5\u5177-eslint" aria-hidden="true">#</a></h1><p><code>ESLint</code> \u662F <code>2013\u5E746\u6708</code> \u521B\u5EFA\u7684\u4E00\u4E2A\u5F00\u6E90\u9879\u76EE\uFF0C\u5B83\u7684\u76EE\u6807\u975E\u5E38\u7B80\u5355\uFF0C\u53EA\u6709\u4E00\u4E2A\uFF0C\u90A3\u5C31\u662F <strong>\u63D0\u4F9B\u4E00\u4E2A\u63D2\u4EF6\u5316\u7684 <code>javascript</code> \u4EE3\u7801\u68C0\u6D4B\u5DE5\u5177</strong> \uFF0C\u8BF4\u767D\u4E86\u5C31\u662F\u505A <strong>\u4EE3\u7801\u683C\u5F0F\u68C0\u6D4B\u4F7F\u7528\u7684</strong></p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> Pick a linter </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> formatter config</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  ESLint </span><span style="color:#89DDFF;">with</span><span style="color:#A6ACCD;"> error prevention only </span><span style="color:#676E95;">// \u4EC5\u5305\u542B\u9519\u8BEF\u7684 ESLint</span></span>
<span class="line"><span style="color:#A6ACCD;">  ESLint </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> Airbnb config </span><span style="color:#676E95;">// Airbnb \u7684 ESLint \u5EF6\u4F38\u89C4\u5219</span></span>
<span class="line"><span style="color:#A6ACCD;">  ESLint </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> Standard config </span><span style="color:#676E95;">// \u6807\u51C6\u7684 ESLint \u89C4\u5219</span></span>
<span class="line"></span></code></pre></div><p>\u6211\u4EEC\u5F53\u524D\u9009\u62E9\u4E86 <strong>\u6807\u51C6\u7684 ESLint \u89C4\u5219</strong> \uFF0C\u90A3\u4E48\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u5728\u8BE5\u89C4\u5219\u4E4B\u4E0B\uFF0C\u770B\u4E00\u770B <code>ESLint</code> \u5B83\u7684\u4E00\u4E9B\u914D\u7F6E\u90FD\u6709\u4EC0\u4E48\uFF1F</p><p>\u6253\u5F00\u9879\u76EE\u4E2D\u7684 <code>.eslintrc.js</code> \u6587\u4EF6</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// ESLint \u914D\u7F6E\u6587\u4EF6\u9075\u5FAA commonJS \u7684\u5BFC\u51FA\u89C4\u5219\uFF0C\u6240\u5BFC\u51FA\u7684\u5BF9\u8C61\u5C31\u662F ESLint \u7684\u914D\u7F6E\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#676E95;">// \u6587\u6863\uFF1Ahttps://eslint.bootcss.com/docs/user-guide/configuring</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u8868\u793A\u5F53\u524D\u76EE\u5F55\u5373\u4E3A\u6839\u76EE\u5F55\uFF0CESLint \u89C4\u5219\u5C06\u88AB\u9650\u5236\u5230\u8BE5\u76EE\u5F55\u4E0B</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">root</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// env \u8868\u793A\u542F\u7528 ESLint \u68C0\u6D4B\u7684\u73AF\u5883</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5728 node \u73AF\u5883\u4E0B\u542F\u52A8 ESLint \u68C0\u6D4B</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">node</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// ESLint \u4E2D\u57FA\u7840\u914D\u7F6E\u9700\u8981\u7EE7\u627F\u7684\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">extends</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">plugin:vue/vue3-essential</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@vue/standard</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u89E3\u6790\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">parserOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">parser</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">babel-eslint</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u9700\u8981\u4FEE\u6539\u7684\u542F\u7528\u89C4\u5219\u53CA\u5176\u5404\u81EA\u7684\u9519\u8BEF\u7EA7\u522B</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u9519\u8BEF\u7EA7\u522B\u5206\u4E3A\u4E09\u79CD\uFF1A</span></span>
<span class="line"><span style="color:#676E95;">   * &quot;off&quot; \u6216 0 - \u5173\u95ED\u89C4\u5219</span></span>
<span class="line"><span style="color:#676E95;">   * &quot;warn&quot; \u6216 1 - \u5F00\u542F\u89C4\u5219\uFF0C\u4F7F\u7528\u8B66\u544A\u7EA7\u522B\u7684\u9519\u8BEF\uFF1Awarn (\u4E0D\u4F1A\u5BFC\u81F4\u7A0B\u5E8F\u9000\u51FA)</span></span>
<span class="line"><span style="color:#676E95;">   * &quot;error&quot; \u6216 2 - \u5F00\u542F\u89C4\u5219\uFF0C\u4F7F\u7528\u9519\u8BEF\u7EA7\u522B\u7684\u9519\u8BEF\uFF1Aerror (\u5F53\u88AB\u89E6\u53D1\u7684\u65F6\u5019\uFF0C\u7A0B\u5E8F\u4F1A\u9000\u51FA)</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">no-console</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">no-debugger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u90A3\u4E48\u5230\u8FD9\u91CC\u54B1\u4EEC\u5DF2\u7ECF\u5927\u81F4\u7684\u4E86\u89E3\u4E86<code>.eslintrc.js</code> \u6587\u4EF6\uFF0C\u57FA\u4E8E <code>ESLint</code> \u5982\u679C\u6211\u4EEC\u51FA\u73B0\u4E0D\u7B26\u5408\u89C4\u8303\u7684\u4EE3\u7801\u683C\u5F0F\u65F6\uFF0C\u90A3\u4E48\u5C31\u4F1A\u5F97\u5230\u4E00\u4E2A\u5BF9\u5E94\u7684\u9519\u8BEF\u3002</p>`,12),e=[l];function t(c,r,D,y,F,i){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
