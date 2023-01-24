import{_ as s,c as n,o as a,a as l}from"./app.8ad724ca.js";const D=JSON.parse('{"title":"35. Search Insert Position","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[]},{"level":2,"title":"Solution:","slug":"solution","link":"#solution","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/0001-0100/035 - Search Insert Position.md","lastUpdated":1674542557000}'),e={name:"solution/0001-0100/035 - Search Insert Position.md"},p=l(`<h1 id="_35-search-insert-position" tabindex="-1">35. Search Insert Position <a href="https://leetcode.com/problems/search-insert-position/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_35-search-insert-position" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Easy-bright.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.</p><p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p><p> </p><p><strong class="example">Example 1:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: nums = [1,3,5,6], target = 5</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 2:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: nums = [1,3,5,6], target = 2</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 3:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: nums = [1,3,5,6], target = 7</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li><li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li><li><code>nums</code> contains <strong>distinct</strong> values sorted in <strong>ascending</strong> order.</li><li><code>-10<sup>4</sup> &lt;= target &lt;= 10<sup>4</sup></code></li></ul><h2 id="solution" tabindex="-1">Solution: <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group--jFly" id="tab-LoMJHc2" checked="checked"><label for="tab-LoMJHc2">Python</label></div><div class="blocks"><div class="language-py active"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">searchInsert</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> list</span><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> target </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">index</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">target</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            nums</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">target</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            nums</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">index</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">target</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># Using binary search</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># start = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># end = len(nums) - 1</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># while start &lt;= end:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#     mid = (start + end) // 2</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#     if nums[mid] == target:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#         return mid</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#     elif nums[mid] &lt; target:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#         start = mid + 1</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#     else:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#         end = mid - 1</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># return start</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></div></div><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,19),o=[p];function t(r,c,i,y,d,A){return a(),n("div",null,o)}const u=s(e,[["render",t]]);export{D as __pageData,u as default};
