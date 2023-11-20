import{_ as s,o as a,c as n,a as l}from"./app.e4604e86.js";const F=JSON.parse('{"title":"383. Ransom Note","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[]},{"level":2,"title":"Solution:","slug":"solution","link":"#solution","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/0301-0400/383 - Ransom Note.md","lastUpdated":1677374362000}'),p={name:"solution/0301-0400/383 - Ransom Note.md"},o=l(`<h1 id="_383-ransom-note" tabindex="-1">383. Ransom Note <a href="https://leetcode.com/problems/ransom-note/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_383-ransom-note" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Easy-bright.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>Given two strings <code>ransomNote</code> and <code>magazine</code>, return <code>true</code><em> if </em><code>ransomNote</code><em> can be constructed by using the letters from </em><code>magazine</code><em> and </em><code>false</code><em> otherwise</em>.</p><p>Each letter in <code>magazine</code> can only be used once in <code>ransomNote</code>.</p><p> </p><p><strong class="example">Example 1:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: ransomNote = &quot;a&quot;, magazine = &quot;b&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 2:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: ransomNote = &quot;aa&quot;, magazine = &quot;ab&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 3:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: ransomNote = &quot;aa&quot;, magazine = &quot;aab&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= ransomNote.length, magazine.length &lt;= 10<sup>5</sup></code></li><li><code>ransomNote</code> and <code>magazine</code> consist of lowercase English letters.</li></ul><h2 id="solution" tabindex="-1">Solution: <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-c-DhT" id="tab-dMdla2t" checked="checked"><label for="tab-dMdla2t">Rust</label><input type="radio" name="group-c-DhT" id="tab-MdXjGiM"><label for="tab-MdXjGiM">Go</label></div><div class="blocks"><div class="language-rs active"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">impl</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">can_construct</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ransom_note</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> magazine</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;">        // Convert the magazine string to a vector of characters</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> magazine </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> magazine</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">chars</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">::&lt;</span><span style="color:#FFCB6B;">Vec</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">char</span><span style="color:#89DDFF;">&gt;&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">        // Iterate over the ransom note string</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> c </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> ransom_note</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">chars</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;">            // If the magazine contains the character, remove it</span></span>
<span class="line"><span style="color:#676E95;">            // Otherwise, return false</span></span>
<span class="line"><span style="color:#676E95;">            // position() returns the index of the first element that matches the closure</span></span>
<span class="line"><span style="color:#676E95;">            // else returns None</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Some</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> magazine</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">iter</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">position</span><span style="color:#89DDFF;">(|&amp;</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                magazine</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">canConstruct</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ransomNote </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> magazine </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ransomNote</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">magazine</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// make a map of the magazine</span></span>
<span class="line"><span style="color:#A6ACCD;">	mag </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(map[</span><span style="color:#C792EA;">rune</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// count the number of each character in the magazine</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> magazine </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		mag</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">]++</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// check if the ransom note can be made from the magazine</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> ransomNote </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> mag</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		mag</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">]--</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// // make a vector of the magazine</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// magVec := make([]int, 26)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// for _, c := range magazine {</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// 	magVec[c-&#39;a&#39;]++</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// // check if ransomNote can be constructed from magazine</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// for _, c := range ransomNote {</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// 	if magVec[c-&#39;a&#39;] == 0 {</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// 		return false</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// 	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// 	magVec[c-&#39;a&#39;]--</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></div></div><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,19),e=[o];function t(c,r,D,y,C,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};