import{_ as s,o as a,c as n,a as l}from"./app.0a467705.js";const F=JSON.parse('{"title":"290. Word Pattern","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[]},{"level":2,"title":"Solution:","slug":"solution","link":"#solution","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/0201-0300/290 - Word Pattern.md","lastUpdated":1677028205000}'),p={name:"solution/0201-0300/290 - Word Pattern.md"},o=l(`<h1 id="_290-word-pattern" tabindex="-1">290. Word Pattern <a href="https://leetcode.com/problems/word-pattern/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_290-word-pattern" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Easy-bright.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>Given a <code>pattern</code> and a string <code>s</code>, find if <code>s</code> follows the same pattern.</p><p>Here <b>follow</b> means a full match, such that there is a bijection between a letter in <code>pattern</code> and a <b>non-empty</b> word in <code>s</code>.</p><p> </p><p><strong class="example">Example 1:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: pattern = &quot;abba&quot;, s = &quot;dog cat cat dog&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 2:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: pattern = &quot;abba&quot;, s = &quot;dog cat cat fish&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 3:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: pattern = &quot;aaaa&quot;, s = &quot;dog cat cat dog&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= pattern.length &lt;= 300</code></li><li><code>pattern</code> contains only lower-case English letters.</li><li><code>1 &lt;= s.length &lt;= 3000</code></li><li><code>s</code> contains only lowercase English letters and spaces <code>&#39; &#39;</code>.</li><li><code>s</code> <strong>does not contain</strong> any leading or trailing spaces.</li><li>All the words in <code>s</code> are separated by a <strong>single space</strong>.</li></ul><h2 id="solution" tabindex="-1">Solution: <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-rNNQ-" id="tab-nX0_Tn8" checked="checked"><label for="tab-nX0_Tn8">Go</label></div><div class="blocks"><div class="language-go active"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">strings</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">wordPattern</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">pattern </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> s </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	words </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> strings</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Split</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">pattern</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">words</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	map_ </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(map[</span><span style="color:#C792EA;">byte</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// loop through the pattern and process each character</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">pattern</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">// if the word is already in the map, check if it matches the pattern</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> val</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ok </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> map_</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">pattern</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]];</span><span style="color:#A6ACCD;"> ok </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> val </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> words</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#676E95;">// loop through the map to check if map contains the word</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> map_ </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#676E95;">// if the word is in the map, return false</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> v </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> words</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#676E95;">// if the word is not in the map, add it</span></span>
<span class="line"><span style="color:#A6ACCD;">			map_</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">pattern</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> words</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></div></div><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,19),t=[o];function e(c,r,D,y,i,C){return a(),n("div",null,t)}const d=s(p,[["render",e]]);export{F as __pageData,d as default};