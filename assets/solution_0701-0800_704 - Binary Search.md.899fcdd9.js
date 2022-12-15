import{_ as s,c as a,o as n,a as l}from"./app.de037eaf.js";const d=JSON.parse('{"title":"704. Binary Search","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement:","slug":"problem-statement","link":"#problem-statement","children":[{"level":3,"title":"Example 1:","slug":"example-1","link":"#example-1","children":[]},{"level":3,"title":"Example 2:","slug":"example-2","link":"#example-2","children":[]},{"level":3,"title":"Constraints:","slug":"constraints","link":"#constraints","children":[]}]},{"level":2,"title":"Solution:","slug":"solution","link":"#solution","children":[{"level":3,"title":"Java","slug":"java","link":"#java","children":[]},{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/0701-0800/704 - Binary Search.md"}'),e={name:"solution/0701-0800/704 - Binary Search.md"},p=l(`<h1 id="_704-binary-search" tabindex="-1">704. Binary Search <a href="https://leetcode.com/problems/binary-search" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png" alt="share"></a> <a class="header-anchor" href="#_704-binary-search" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Easy-bright.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement: <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>Given an array of integers <code>nums</code> which is sorted in ascending order, and an integer <code>target</code>, write a function to search <code>target</code> in <code>nums</code>. If <code>target</code> exists, then return its index. Otherwise, return <code>-1</code>.</p><p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p><h3 id="example-1" tabindex="-1">Example 1: <a class="header-anchor" href="#example-1" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: nums = [-1,0,3,5,9,12], target = 9</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 4</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: 9 exists in nums and its index is 4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="example-2" tabindex="-1">Example 2: <a class="header-anchor" href="#example-2" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: nums = [-1,0,3,5,9,12], target = 2</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: -1</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: 2 does not exist in nums so return -1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="constraints" tabindex="-1">Constraints: <a class="header-anchor" href="#constraints" aria-hidden="true">#</a></h3><ul><li>1 &lt;= nums.length &lt;= 10<sup>4</sup></li><li>-10<sup>4</sup> &lt; nums[i], target &lt; 10<sup>4</sup></li><li>All the integers in nums are unique.</li><li>nums is sorted in ascending order.</li></ul><h2 id="solution" tabindex="-1">Solution: <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><h3 id="java" tabindex="-1"><a href="#"><em>Java</em></a> <a class="header-anchor" href="#java" aria-hidden="true">#</a></h3><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">search</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> target</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> low </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      mid </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      high </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">low </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> high</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    mid </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> low </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">high </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> low</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">mid</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> target</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> mid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">mid</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> target</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      low </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> mid </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">else</span></span>
<span class="line"><span style="color:#A6ACCD;">      high </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> mid </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,16),o=[p];function t(r,c,i,D,C,y){return n(),a("div",null,o)}const F=s(e,[["render",t]]);export{d as __pageData,F as default};
