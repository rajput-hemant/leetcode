import{_ as s,o as a,c as n,a as l}from"./app.e4604e86.js";const D=JSON.parse('{"title":"2011. Final Value of Variable After Performing Operations","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[]},{"level":2,"title":"Solution:","slug":"solution","link":"#solution","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/2101-2200/2011 - Final Value of Variable After Performing Operations.md","lastUpdated":1677958804000}'),e={name:"solution/2101-2200/2011 - Final Value of Variable After Performing Operations.md"},o=l(`<h1 id="_2011-final-value-of-variable-after-performing-operations" tabindex="-1">2011. Final Value of Variable After Performing Operations <a href="https://leetcode.com/problems/final-value-of-variable-after-performing-operations/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_2011-final-value-of-variable-after-performing-operations" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Easy-bright.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>There is a programming language with only <strong>four</strong> operations and <strong>one</strong> variable <code>X</code>:</p><ul><li><code>++X</code> and <code>X++</code> <strong>increments</strong> the value of the variable <code>X</code> by <code>1</code>.</li><li><code>--X</code> and <code>X--</code> <strong>decrements</strong> the value of the variable <code>X</code> by <code>1</code>.</li></ul><p>Initially, the value of <code>X</code> is <code>0</code>.</p><p>Given an array of strings <code>operations</code> containing a list of operations, return <em>the <strong>final </strong>value of </em><code>X</code> <em>after performing all the operations</em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: operations = [&quot;--X&quot;,&quot;X++&quot;,&quot;X++&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: The operations are performed as follows:</span></span>
<span class="line"><span style="color:#A6ACCD;">Initially, X = 0.</span></span>
<span class="line"><span style="color:#A6ACCD;">--X: X is decremented by 1, X =  0 - 1 = -1.</span></span>
<span class="line"><span style="color:#A6ACCD;">X++: X is incremented by 1, X = -1 + 1 =  0.</span></span>
<span class="line"><span style="color:#A6ACCD;">X++: X is incremented by 1, X =  0 + 1 =  1.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 2:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: operations = [&quot;++X&quot;,&quot;++X&quot;,&quot;X++&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 3</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: The operations are performed as follows:</span></span>
<span class="line"><span style="color:#A6ACCD;">Initially, X = 0.</span></span>
<span class="line"><span style="color:#A6ACCD;">++X: X is incremented by 1, X = 0 + 1 = 1.</span></span>
<span class="line"><span style="color:#A6ACCD;">++X: X is incremented by 1, X = 1 + 1 = 2.</span></span>
<span class="line"><span style="color:#A6ACCD;">X++: X is incremented by 1, X = 2 + 1 = 3.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 3:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: operations = [&quot;X++&quot;,&quot;++X&quot;,&quot;--X&quot;,&quot;X--&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: The operations are performed as follows:</span></span>
<span class="line"><span style="color:#A6ACCD;">Initially, X = 0.</span></span>
<span class="line"><span style="color:#A6ACCD;">X++: X is incremented by 1, X = 0 + 1 = 1.</span></span>
<span class="line"><span style="color:#A6ACCD;">++X: X is incremented by 1, X = 1 + 1 = 2.</span></span>
<span class="line"><span style="color:#A6ACCD;">--X: X is decremented by 1, X = 2 - 1 = 1.</span></span>
<span class="line"><span style="color:#A6ACCD;">X--: X is decremented by 1, X = 1 - 1 = 0.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= operations.length &lt;= 100</code></li><li><code>operations[i]</code> will be either <code>&quot;++X&quot;</code>, <code>&quot;X++&quot;</code>, <code>&quot;--X&quot;</code>, or <code>&quot;X--&quot;</code>.</li></ul><details class="details custom-block"><summary><em>Click to open Hints</em></summary><ul><li>There are only two operations to keep track of.</li><li>Use a variable to store the value after each operation.</li></ul></details><h2 id="solution" tabindex="-1">Solution: <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-GPKGL" id="tab-WtoNMTW" checked="checked"><label for="tab-WtoNMTW">Rust</label></div><div class="blocks"><div class="language-rs active"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">impl</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">final_value_after_operations</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">operations</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vec</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">&gt;)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> op </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> operations </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> op </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--X</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> op </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">X--</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                x </span><span style="color:#89DDFF;">-=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                x </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        x</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">        // operations</span></span>
<span class="line"><span style="color:#676E95;">        //     .iter()</span></span>
<span class="line"><span style="color:#676E95;">        //     .fold(0, |acc, op| acc + (44 - op.as_bytes()[1] as i32))</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></div></div><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,22),p=[o];function t(r,c,i,C,y,d){return a(),n("div",null,p)}const u=s(e,[["render",t]]);export{D as __pageData,u as default};