import{_ as a,o as l,c as p,f as s,a as n,b as e}from"./app.e9651411.js";const F=JSON.parse('{"title":"414. Third Maximum Number","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[]},{"level":2,"title":"Solution:","slug":"solution","link":"#solution","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/0401-0500/414 - Third Maximum Number.md","lastUpdated":1677460380000}'),o={name:"solution/0401-0500/414 - Third Maximum Number.md"},t=n(`<h1 id="_414-third-maximum-number" tabindex="-1">414. Third Maximum Number <a href="https://leetcode.com/problems/third-maximum-number/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_414-third-maximum-number" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Easy-bright.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>Given an integer array <code>nums</code>, return <em>the <strong>third distinct maximum</strong> number in this array. If the third maximum does not exist, return the <strong>maximum</strong> number</em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: nums = [3,2,1]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation:</span></span>
<span class="line"><span style="color:#A6ACCD;">The first distinct maximum is 3.</span></span>
<span class="line"><span style="color:#A6ACCD;">The second distinct maximum is 2.</span></span>
<span class="line"><span style="color:#A6ACCD;">The third distinct maximum is 1.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 2:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: nums = [1,2]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 2</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation:</span></span>
<span class="line"><span style="color:#A6ACCD;">The first distinct maximum is 2.</span></span>
<span class="line"><span style="color:#A6ACCD;">The second distinct maximum is 1.</span></span>
<span class="line"><span style="color:#A6ACCD;">The third distinct maximum does not exist, so the maximum (2) is returned instead.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 3:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: nums = [2,2,3,1]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation:</span></span>
<span class="line"><span style="color:#A6ACCD;">The first distinct maximum is 3.</span></span>
<span class="line"><span style="color:#A6ACCD;">The second distinct maximum is 2 (both 2&#39;s are counted together since they have the same value).</span></span>
<span class="line"><span style="color:#A6ACCD;">The third distinct maximum is 1.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li><li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li></ul><p> </p><strong>Follow up:</strong>`,16),c=e("code",null,"O(n)",-1),r=n(`<h2 id="solution" tabindex="-1">Solution: <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-jBlaD" id="tab-vp_01G3" checked="checked"><label for="tab-vp_01G3">Rust</label></div><div class="blocks"><div class="language-rs active"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">impl</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">third_max</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vec</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">&gt;)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> sorted </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clone</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#676E95;">        // sort in descending order</span></span>
<span class="line"><span style="color:#A6ACCD;">        sorted</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort_by</span><span style="color:#89DDFF;">(|</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cmp</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#676E95;">        // remove duplicates</span></span>
<span class="line"><span style="color:#A6ACCD;">        sorted</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dedup</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> sorted</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> sorted</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> sorted</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></div></div><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4);function i(C,A,D,d,y,m){return l(),p("div",null,[t,s(" Can you find an "),c,s(" solution? "),r])}const h=a(o,[["render",i]]);export{F as __pageData,h as default};
