import{_ as s,c as a,o as n,d as l}from"./app.8dd7d0bf.js";const m=JSON.parse('{"title":"\u5E38\u89C1\u7591\u70B9\u8BF4\u660E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9879\u76EE\u522B\u540D","slug":"\u9879\u76EE\u522B\u540D"},{"level":2,"title":"\u4E3A\u4EC0\u4E48\u5728\u672C\u5730\u6CA1\u6709\u6309\u9700\u5F15\u5165\u7EC4\u4EF6\u5E93\u6837\u5F0F\uFF0C\u5728\u751F\u4EA7\u624D\u5F15\u5165","slug":"\u4E3A\u4EC0\u4E48\u5728\u672C\u5730\u6CA1\u6709\u6309\u9700\u5F15\u5165\u7EC4\u4EF6\u5E93\u6837\u5F0F\uFF0C\u5728\u751F\u4EA7\u624D\u5F15\u5165"},{"level":2,"title":"\u4E3A\u4EC0\u4E48\u5355\u72EC\u628A moment \u653E\u5230 dataUtil \u5185","slug":"\u4E3A\u4EC0\u4E48\u5355\u72EC\u628A-moment-\u653E\u5230-datautil-\u5185"}],"relativePath":"guide/other/doubt.md"}'),o={name:"guide/other/doubt.md"},p=l(`<h1 id="\u5E38\u89C1\u7591\u70B9\u8BF4\u660E" tabindex="-1">\u5E38\u89C1\u7591\u70B9\u8BF4\u660E <a class="header-anchor" href="#\u5E38\u89C1\u7591\u70B9\u8BF4\u660E" aria-hidden="true">#</a></h1><p>\u8BE5\u5206\u7C7B\u4E3B\u8981\u8BF4\u660E\u4E00\u4E9B\u5730\u65B9\u4E3A\u4EC0\u4E48\u8FD9\u6837\u505A\uFF0C\u4EE5\u53CA\u539F\u56E0\u662F\u4EC0\u4E48</p><h2 id="\u9879\u76EE\u522B\u540D" tabindex="-1">\u9879\u76EE\u522B\u540D <a class="header-anchor" href="#\u9879\u76EE\u522B\u540D" aria-hidden="true">#</a></h2><p><code>/@/</code> \u662F <code>vite</code> \u5185\u914D\u7F6E\u7684\u522B\u540D</p><p><code>/@/settings</code> \u7B49\u540C\u4E8E <code>src/settings</code></p><div class="tip custom-block"><p class="custom-block-title">\u4E3A\u4EC0\u4E48\u662F/@/</p><p>\u56E0\u4E3A\u9879\u76EE\u662F\u4ECE <code>vite1.0</code> \u8FC7\u6E21\u8FC7\u6765\u7684\uFF0C<code>vite1.0</code> \u53EA\u80FD\u4EE5 <code>/</code> \u5F00\u5934\uFF0C\u6240\u4EE5\u6709\u4E00\u90E8\u5206\u4ECE <code>webpack</code> \u7528\u6237\u8F6C\u8FC7\u6765\u7684\u53EF\u80FD\u4E0D\u4E60\u60EF\u3002</p></div><h2 id="\u4E3A\u4EC0\u4E48\u5728\u672C\u5730\u6CA1\u6709\u6309\u9700\u5F15\u5165\u7EC4\u4EF6\u5E93\u6837\u5F0F\uFF0C\u5728\u751F\u4EA7\u624D\u5F15\u5165" tabindex="-1">\u4E3A\u4EC0\u4E48\u5728\u672C\u5730\u6CA1\u6709\u6309\u9700\u5F15\u5165\u7EC4\u4EF6\u5E93\u6837\u5F0F\uFF0C\u5728\u751F\u4EA7\u624D\u5F15\u5165 <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u5728\u672C\u5730\u6CA1\u6709\u6309\u9700\u5F15\u5165\u7EC4\u4EF6\u5E93\u6837\u5F0F\uFF0C\u5728\u751F\u4EA7\u624D\u5F15\u5165" aria-hidden="true">#</a></h2><p>\u5728 main.ts \u5185\u53EF\u4EE5\u770B\u5230\uFF0C\u672C\u5730\u5F00\u53D1\u4F1A\u5168\u91CF\u5F15\u5165 antd.less\uFF0Cvite-plugin-style-import \u5728\u672C\u5730\u662F\u6CA1\u6709\u4F5C\u7528\u7684\u3002</p><p>\u8FD9\u6837\u505A\u7684\u539F\u56E0\u4E3B\u8981\u662F\u52A0\u5FEB\u672C\u5730\u5F00\u53D1\u5237\u65B0\u901F\u5EA6\u3002\u5982\u679C\u5728\u672C\u5730\u5F00\u53D1\u4E2D\u4E5F\u6309\u9700\u6309\u9700\u5F15\u5165\uFF0C\u5219\u5728\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u5185\u53EF\u4EE5\u770B\u5230\uFF0C\u5E73\u5747\u4E00\u4E2A\u9875\u9762\u5927\u6982\u589E\u52A0\u4E86 100 \u6B21 http \u8BF7\u6C42\u3002\u5982\u679C\u5168\u91CF\u5F15\u5165\uFF0C\u53EA\u589E\u52A0\u4E86\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u6240\u4EE5\u4E3A\u4E86\u51CF\u5C11\u8BF7\u6C42\u6570\u91CF\uFF0C\u624D\u8FD9\u6837\u79CD\u3002</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// src/main.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">meta</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DEV) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ant-design-vue/dist/antd.less</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// build/vite/plugin/styleImport</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> styleImport </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite-plugin-style-import</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">configStyleImportPlugin</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">isBuild</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">isBuild</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">styleImportPlugin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">styleImport</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    libs</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        libraryName</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ant-design-vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        esModule</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">resolveStyle</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">ant-design-vue/es/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/style/index</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">styleImportPlugin</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E3A\u4EC0\u4E48\u5355\u72EC\u628A-moment-\u653E\u5230-datautil-\u5185" tabindex="-1">\u4E3A\u4EC0\u4E48\u5355\u72EC\u628A moment \u653E\u5230 dataUtil \u5185 <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u5355\u72EC\u628A-moment-\u653E\u5230-datautil-\u5185" aria-hidden="true">#</a></h2><p>\u5728 <code>src/utils/dataUtil</code> \u5185\uFF0C\u4F7F\u7528\u7684\u662F moment\uFF0C\u5176\u6B21\u5728\u9875\u9762\u4E2D\u5BF9\u65F6\u95F4\u7684\u64CD\u4F5C\u4E5F\u662F\u4F7F\u7528 dateUtil\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5 <code>import moment from &#39;moment&#39;</code>\u3002</p><p>\u8FD9\u6837\u505A\u4E3B\u8981\u662F\u65B9\u4FBF\u540E\u7EED\u5207\u6362\u5230 <code>dayjs</code>\uFF0C\u56E0\u4E3A api \u4E00\u6837\uFF0C\u6240\u4EE5\u5728\u540E\u7EED\u5207\u6362\u4E2D\uFF0C\u53EA\u9700\u66F4\u6539 dataUtil \u5185\u7684 import \u5373\u53EF\uFF0C\u800C\u4E0D\u7528\u5168\u90E8\u66F4\u6539\u3002</p>`,13),e=[p];function t(c,r,F,y,i,D){return n(),a("div",null,e)}var A=s(o,[["render",t]]);export{m as __pageData,A as default};
