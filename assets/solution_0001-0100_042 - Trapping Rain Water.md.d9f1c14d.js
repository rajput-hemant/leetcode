import{_ as s,o as a,c as n,a as l}from"./app.e4604e86.js";const F=JSON.parse('{"title":"42. Trapping Rain Water","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[]},{"level":2,"title":"Solution:","slug":"solution","link":"#solution","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/0001-0100/042 - Trapping Rain Water.md","lastUpdated":1688403179000}'),p={name:"solution/0001-0100/042 - Trapping Rain Water.md"},e=l(`<h1 id="_42-trapping-rain-water" tabindex="-1">42. Trapping Rain Water <a href="https://leetcode.com/problems/trapping-rain-water/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_42-trapping-rain-water" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Hard-red.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is <code>1</code>, compute how much water it can trap after raining.</p><p> </p><p><strong class="example">Example 1:</strong></p><img src="https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png" style="width:412px;height:161px;"><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 6</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 2:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: height = [4,2,0,3,2,5]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 9</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p> </p><p><strong>Constraints:</strong></p><ul><li><code>n == height.length</code></li><li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code></li><li><code>0 &lt;= height[i] &lt;= 10<sup>5</sup></code></li></ul><h2 id="solution" tabindex="-1">Solution: <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-WHnjh" id="tab-2IqO9JD" checked="checked"><label for="tab-2IqO9JD">Rust</label></div><div class="blocks"><div class="language-rs active"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki has-diff"><code><span class="line"><span style="color:#F78C6C;">impl</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">trap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vec</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">&gt;)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> height</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> left_max</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> right_max</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> ans </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">        // iterate from both sides to the middle</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> left </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> right </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;">            // if left is lower than right, then the water level depends on left</span></span>
<span class="line"><span style="color:#676E95;">            // else the water level depends on right</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> height</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> height</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;">                // if left height is higher than left_max, then update left_max</span></span>
<span class="line"><span style="color:#676E95;">                // else add the difference between left_max and left height to ans</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> height</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> left_max </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    left_max </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> height</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    ans </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> left_max </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> height</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">                left </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;">                // if right height is higher than right_max, then update right_max</span></span>
<span class="line"><span style="color:#676E95;">                // else add the difference between right_max and right height to ans</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> height</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> right_max </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    right_max </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> height</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    ans </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> right_max </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> height</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">                right </span><span style="color:#89DDFF;">-=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        ans</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></div></div><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,17),o=[e];function t(r,c,D,i,C,y){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{F as __pageData,h as default};