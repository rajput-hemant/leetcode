import{_ as s,o as a,c as n,a as l}from"./app.45fd0cc4.js";const F=JSON.parse('{"title":"2444. Count Subarrays With Fixed Bounds","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[]},{"level":2,"title":"Solution:","slug":"solution","link":"#solution","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/2401-2500/2444 - Count Subarrays With Fixed Bounds.md","lastUpdated":1677958804000}'),o={name:"solution/2401-2500/2444 - Count Subarrays With Fixed Bounds.md"},p=l(`<h1 id="_2444-count-subarrays-with-fixed-bounds" tabindex="-1">2444. Count Subarrays With Fixed Bounds <a href="https://leetcode.com/problems/count-subarrays-with-fixed-bounds/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_2444-count-subarrays-with-fixed-bounds" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Hard-red.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>You are given an integer array <code>nums</code> and two integers <code>minK</code> and <code>maxK</code>.</p><p>A <strong>fixed-bound subarray</strong> of <code>nums</code> is a subarray that satisfies the following conditions:</p><ul><li>The <strong>minimum</strong> value in the subarray is equal to <code>minK</code>.</li><li>The <strong>maximum</strong> value in the subarray is equal to <code>maxK</code>.</li></ul><p>Return <em>the <strong>number</strong> of fixed-bound subarrays</em>.</p><p>A <strong>subarray</strong> is a <strong>contiguous</strong> part of an array.</p><p> </p><p><strong class="example">Example 1:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: nums = [1,3,5,2,7,5], minK = 1, maxK = 5</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 2</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 2:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: nums = [1,1,1,1], minK = 1, maxK = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 10</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: Every subarray of nums is a fixed-bound subarray. There are 10 possible subarrays.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p> </p><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 10<sup>5</sup></code></li><li><code>1 &lt;= nums[i], minK, maxK &lt;= 10<sup>6</sup></code></li></ul><details class="details custom-block"><summary><em>Click to open Hints</em></summary><ul><li>Can you solve the problem if all the numbers in the array were between minK and maxK inclusive?</li><li>Think of the inclusion-exclusion principle.</li><li>Divide the array into multiple subarrays such that each number in each subarray is between minK and maxK inclusive, solve the previous problem for each subarray, and sum all the answers.</li></ul></details><h2 id="solution" tabindex="-1">Solution: <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-GW2Vq" id="tab-aHUikky" checked="checked"><label for="tab-aHUikky">Rust</label></div><div class="blocks"><div class="language-rs active"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">impl</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">count_subarrays</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vec</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> min_k</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> max_k</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i64</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> bad</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> min</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> max</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">        // bad is the index of the first number that is not in the range [min_k, max_k]</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">iter</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">enumerate</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> i </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i64</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">            // set i to bad index if it is not in the range [min_k, max_k]</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!(</span><span style="color:#A6ACCD;">min_k </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> max_k</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                bad </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">            // set i to min index if num is equal to min_k</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> min_k </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                min </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">            // set i to max index if num is equal to max_k</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> max_k </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                max </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">            // it is the last starting point for the subarray</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> start </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> min</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">min</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">max</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> start </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> bad </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                res </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> start </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> bad</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;"> // add the number of subarrays b/w [bad + 1, start]</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        res</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></div></div><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,21),e=[p];function t(r,c,i,y,D,C){return a(),n("div",null,e)}const u=s(o,[["render",t]]);export{F as __pageData,u as default};
