import{_ as s,o as a,c as n,a as o}from"./app.8f062c2d.js";const d=JSON.parse('{"title":"211. Design Add and Search Words Data Structure","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[]},{"level":2,"title":"Solution:","slug":"solution","link":"#solution","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/0201-0300/211 - Design Add and Search Words Data Structure.md","lastUpdated":1680513503000}'),l={name:"solution/0201-0300/211 - Design Add and Search Words Data Structure.md"},p=o(`<h1 id="_211-design-add-and-search-words-data-structure" tabindex="-1">211. Design Add and Search Words Data Structure <a href="https://leetcode.com/problems/design-add-and-search-words-data-structure/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_211-design-add-and-search-words-data-structure" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Medium-yellow.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>Design a data structure that supports adding new words and finding if a string matches any previously added string.</p><p>Implement the <code>WordDictionary</code> class:</p><ul><li><code>WordDictionary()</code> Initializes the object.</li><li><code>void addWord(word)</code> Adds <code>word</code> to the data structure, it can be matched later.</li><li><code>bool search(word)</code> Returns <code>true</code> if there is any string in the data structure that matches <code>word</code> or <code>false</code> otherwise. <code>word</code> may contain dots <code>&#39;.&#39;</code> where dots can be matched with any letter.</li></ul><p> </p><p><strong class="example">Example:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input</span></span>
<span class="line"><span style="color:#A6ACCD;">[&quot;WordDictionary&quot;,&quot;addWord&quot;,&quot;addWord&quot;,&quot;addWord&quot;,&quot;search&quot;,&quot;search&quot;,&quot;search&quot;,&quot;search&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">[[],[&quot;bad&quot;],[&quot;dad&quot;],[&quot;mad&quot;],[&quot;pad&quot;],[&quot;bad&quot;],[&quot;.ad&quot;],[&quot;b..&quot;]]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output</span></span>
<span class="line"><span style="color:#A6ACCD;">[null,null,null,null,false,true,true,true]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation</span></span>
<span class="line"><span style="color:#A6ACCD;">WordDictionary wordDictionary = new WordDictionary();</span></span>
<span class="line"><span style="color:#A6ACCD;">wordDictionary.addWord(&quot;bad&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">wordDictionary.addWord(&quot;dad&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">wordDictionary.addWord(&quot;mad&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">wordDictionary.search(&quot;pad&quot;); // return False</span></span>
<span class="line"><span style="color:#A6ACCD;">wordDictionary.search(&quot;bad&quot;); // return True</span></span>
<span class="line"><span style="color:#A6ACCD;">wordDictionary.search(&quot;.ad&quot;); // return True</span></span>
<span class="line"><span style="color:#A6ACCD;">wordDictionary.search(&quot;b..&quot;); // return True</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= word.length &lt;= 25</code></li><li><code>word</code> in <code>addWord</code> consists of lowercase English letters.</li><li><code>word</code> in <code>search</code> consist of <code>&#39;.&#39;</code> or lowercase English letters.</li><li>There will be at most <code>2</code> dots in <code>word</code> for <code>search</code> queries.</li><li>At most <code>10<sup>4</sup></code> calls will be made to <code>addWord</code> and <code>search</code>.</li></ul><details class="details custom-block"><summary><em>Click to open Hints</em></summary><ul><li>You should be familiar with how a Trie works. If not, please work on this problem: <a href="https://leetcode.com/problems/implement-trie-prefix-tree/">Implement Trie (Prefix Tree)</a> first.</li></ul></details><h2 id="solution" tabindex="-1">Solution: <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-VQhBO" id="tab-9VeA4js" checked="checked"><label for="tab-9VeA4js">Go</label></div><div class="blocks"><div class="language-go active"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WordDictionary</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    children </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">26</span><span style="color:#89DDFF;">]*</span><span style="color:#A6ACCD;"> WordDictionary</span></span>
<span class="line"><span style="color:#A6ACCD;">    isWord </span><span style="color:#C792EA;">bool</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Constructor</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> WordDictionary </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> WordDictionary</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">this </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">WordDictionary</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">AddWord</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">word </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    root </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> this</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">item </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> word</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        char </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">children</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">char</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">children</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">char</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">WordDictionary</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        root </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">children</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">char</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isWord </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">this </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">WordDictionary</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Search</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">word </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    root </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> this</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">item </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> word</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> word</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">item </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">children</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> item</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Search</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">word</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:])</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        char </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">children</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">char</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        root </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">children</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">char</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isWord</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></div></div><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,17),e=[p];function t(r,c,D,i,y,A){return a(),n("div",null,e)}const F=s(l,[["render",t]]);export{d as __pageData,F as default};
