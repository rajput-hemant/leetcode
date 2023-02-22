import{_ as s,o as a,c as n,a as l}from"./app.e5967ba7.js";const d=JSON.parse('{"title":"540. Single Element in a Sorted Array","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[]},{"level":2,"title":"Solution:","slug":"solution","link":"#solution","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/0501-0600/540 - Single Element in a Sorted Array.md","lastUpdated":1677028205000}'),e={name:"solution/0501-0600/540 - Single Element in a Sorted Array.md"},p=l(`<h1 id="_540-single-element-in-a-sorted-array" tabindex="-1">540. Single Element in a Sorted Array <a href="https://leetcode.com/problems/single-element-in-a-sorted-array/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_540-single-element-in-a-sorted-array" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Medium-yellow.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.</p><p>Return <em>the single element that appears only once</em>.</p><p>Your solution must run in <code>O(log n)</code> time and <code>O(1)</code> space.</p><p> </p><p><strong class="example">Example 1:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: nums = [1,1,2,3,3,4,4,8,8]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 2:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: nums = [3,3,7,7,10,11,11]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 10</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li><li><code>0 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li></ul><h2 id="solution" tabindex="-1">Solution: <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-q7V-O" id="tab-U06hGI0" checked="checked"><label for="tab-U06hGI0">Go</label><input type="radio" name="group-q7V-O" id="tab-x2Xjr68"><label for="tab-x2Xjr68">Rust</label></div><div class="blocks"><div class="language-go active"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">singleNonDuplicate</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	res </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">// a ^ a = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">// a ^ a ^ a = a</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">// a ^ a ^ b = b</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">// also position of a and b doesn&#39;t matter</span></span>
<span class="line"><span style="color:#A6ACCD;">		res </span><span style="color:#89DDFF;">^=</span><span style="color:#A6ACCD;"> num</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> res</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><div class="language-rs"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">impl</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">single_non_duplicate</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vec</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">&gt;)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> num </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;">            // a ^ a = 0</span></span>
<span class="line"><span style="color:#676E95;">            // a ^ a ^ a = a</span></span>
<span class="line"><span style="color:#676E95;">            // a ^ a ^ b = b</span></span>
<span class="line"><span style="color:#676E95;">            // also position of a and b doesn&#39;t matter</span></span>
<span class="line"><span style="color:#A6ACCD;">            res </span><span style="color:#89DDFF;">^=</span><span style="color:#A6ACCD;"> num</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        res</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></div></div><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,18),o=[p];function t(c,r,i,y,C,D){return a(),n("div",null,o)}const F=s(e,[["render",t]]);export{d as __pageData,F as default};
