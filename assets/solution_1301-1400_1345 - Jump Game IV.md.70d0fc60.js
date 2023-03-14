import{_ as s,o as a,c as n,a as l}from"./app.80a76440.js";const i=JSON.parse('{"title":"1345. Jump Game IV","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[]},{"level":2,"title":"Solution:","slug":"solution","link":"#solution","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/1301-1400/1345 - Jump Game IV.md","lastUpdated":1678822270000}'),p={name:"solution/1301-1400/1345 - Jump Game IV.md"},o=l(`<h1 id="_1345-jump-game-iv" tabindex="-1">1345. Jump Game IV <a href="https://leetcode.com/problems/jump-game-iv/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_1345-jump-game-iv" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Hard-red.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>Given an array of integers <code>arr</code>, you are initially positioned at the first index of the array.</p><p>In one step you can jump from index <code>i</code> to index:</p><ul><li><code>i + 1</code> where: <code>i + 1 &lt; arr.length</code>.</li><li><code>i - 1</code> where: <code>i - 1 &gt;= 0</code>.</li><li><code>j</code> where: <code>arr[i] == arr[j]</code> and <code>i != j</code>.</li></ul><p>Return <em>the minimum number of steps</em> to reach the <strong>last index</strong> of the array.</p><p>Notice that you can not jump outside of the array at any time.</p><p> </p><p><strong class="example">Example 1:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: arr = [100,-23,-23,404,100,23,23,23,3,404]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 3</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: You need three jumps from index 0 --&amp;gt; 4 --&amp;gt; 3 --&amp;gt; 9. Note that index 9 is the last index of the array.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 2:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: arr = [7]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: Start index is the last index. You do not need to jump.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 3:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: arr = [7,6,9,6,9,6,9,7]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: You can jump directly from index 0 to index 7 which is last index of the array.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 5 * 10<sup>4</sup></code></li><li><code>-10<sup>8</sup> &lt;= arr[i] &lt;= 10<sup>8</sup></code></li></ul><details class="details custom-block"><summary><em>Click to open Hints</em></summary><ul><li>Build a graph of n nodes where nodes are the indices of the array and edges for node i are nodes i+1, i-1, j where arr[i] == arr[j].</li><li>Start bfs from node 0 and keep distance. The answer is the distance when you reach node n-1.</li></ul></details><h2 id="solution" tabindex="-1">Solution: <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-0Cxy9" id="tab-8WLhtn7" checked="checked"><label for="tab-8WLhtn7">Rust</label></div><div class="blocks"><div class="language-rs active"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> std</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">collections</span><span style="color:#89DDFF;">::{</span><span style="color:#FFCB6B;">HashMap</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;"> VecDeque</span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">impl</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">min_jumps</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vec</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">&gt;)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> map </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HashMap</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">v</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">iter</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">enumerate</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">entry</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">v</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">or_insert</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">vec!</span><span style="color:#89DDFF;">[]).</span><span style="color:#82AAFF;">push</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> q </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">VecDeque</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        q</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push_back</span><span style="color:#89DDFF;">((</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0_</span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> visited </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">vec!</span><span style="color:#89DDFF;">[false;</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">()];</span></span>
<span class="line"><span style="color:#A6ACCD;">        visited</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Some</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> step</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> q</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop_front</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> step</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">            step </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Some</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">v</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> j </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> v </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">visited</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                        visited</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        q</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push_back</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> step</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">visited</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                visited</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#A6ACCD;">                q</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push_back</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> step</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">visited</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                visited</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#A6ACCD;">                q</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push_back</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> step</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></div></div><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,23),e=[o];function t(c,r,D,y,C,F){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
