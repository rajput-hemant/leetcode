import{_ as s,c as a,o as e,a as n}from"./app.de037eaf.js";const d=JSON.parse('{"title":"100. Same Tree","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement:","slug":"problem-statement","link":"#problem-statement","children":[{"level":3,"title":"Example 1:","slug":"example-1","link":"#example-1","children":[]},{"level":3,"title":"Example 2:","slug":"example-2","link":"#example-2","children":[]},{"level":3,"title":"Example 3:","slug":"example-3","link":"#example-3","children":[]},{"level":3,"title":"Constraints:","slug":"constraints","link":"#constraints","children":[]}]},{"level":2,"title":"Solution:","slug":"solution","link":"#solution","children":[{"level":3,"title":"Java","slug":"java","link":"#java","children":[]},{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/0001-0100/100 - Same Tree.md"}'),l={name:"solution/0001-0100/100 - Same Tree.md"},p=n(`<h1 id="_100-same-tree" tabindex="-1">100. Same Tree <a href="https://leetcode.com/problems/same-tree/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png" alt=""></a> <a class="header-anchor" href="#_100-same-tree" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Easy-bright.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement: <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>Given the roots of two binary trees <code>p</code> and <code>q</code>, write a function to check if they are the same or not.</p><p>Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.</p><h3 id="example-1" tabindex="-1">Example 1: <a class="header-anchor" href="#example-1" aria-hidden="true">#</a></h3><p><img src="https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg" alt=""></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: p = [1,2,3], q = [1,2,3]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="example-2" tabindex="-1">Example 2: <a class="header-anchor" href="#example-2" aria-hidden="true">#</a></h3><p><img src="https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg" alt=""></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: p = [1,2], q = [1,null,2]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="example-3" tabindex="-1">Example 3: <a class="header-anchor" href="#example-3" aria-hidden="true">#</a></h3><p><img src="https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg" alt=""></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: p = [1,2,1], q = [1,1,2]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="constraints" tabindex="-1">Constraints: <a class="header-anchor" href="#constraints" aria-hidden="true">#</a></h3><ul><li>The number of nodes in both trees is in the range <code>[0, 100]</code>.</li><li>-10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup></li></ul><h2 id="solution" tabindex="-1">Solution: <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><h3 id="java" tabindex="-1"><a href="#"><em>Java</em></a> <a class="header-anchor" href="#java" aria-hidden="true">#</a></h3><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isSameTree</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">TreeNode</span><span style="color:#A6ACCD;"> p</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">TreeNode</span><span style="color:#A6ACCD;"> q</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">p </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> q </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">q </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> p </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> q</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> left </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isSameTree</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> q</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> right </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isSameTree</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> q</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> left </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,21),o=[p];function t(r,c,i,D,C,A){return e(),a("div",null,o)}const h=s(l,[["render",t]]);export{d as __pageData,h as default};
