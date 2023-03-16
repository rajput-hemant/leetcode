import{_ as s,o as n,c as a,a as l}from"./app.825b1a82.js";const A=JSON.parse('{"title":"382. Linked List Random Node","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[]},{"level":2,"title":"Solution:","slug":"solution","link":"#solution","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/0301-0400/382 - Linked List Random Node.md","lastUpdated":1678822270000}'),o={name:"solution/0301-0400/382 - Linked List Random Node.md"},p=l(`<h1 id="_382-linked-list-random-node" tabindex="-1">382. Linked List Random Node <a href="https://leetcode.com/problems/linked-list-random-node/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_382-linked-list-random-node" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Medium-yellow.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>Given a singly linked list, return a random node&#39;s value from the linked list. Each node must have the <strong>same probability</strong> of being chosen.</p><p>Implement the <code>Solution</code> class:</p><ul><li><code>Solution(ListNode head)</code> Initializes the object with the head of the singly-linked list <code>head</code>.</li><li><code>int getRandom()</code> Chooses a node randomly from the list and returns its value. All the nodes of the list should be equally likely to be chosen.</li></ul><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/03/16/getrand-linked-list.jpg" style="width:302px;height:62px;"><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input</span></span>
<span class="line"><span style="color:#A6ACCD;">[&quot;Solution&quot;, &quot;getRandom&quot;, &quot;getRandom&quot;, &quot;getRandom&quot;, &quot;getRandom&quot;, &quot;getRandom&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">[[[1, 2, 3]], [], [], [], [], []]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output</span></span>
<span class="line"><span style="color:#A6ACCD;">[null, 1, 3, 2, 2, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation</span></span>
<span class="line"><span style="color:#A6ACCD;">Solution solution = new Solution([1, 2, 3]);</span></span>
<span class="line"><span style="color:#A6ACCD;">solution.getRandom(); // return 1</span></span>
<span class="line"><span style="color:#A6ACCD;">solution.getRandom(); // return 3</span></span>
<span class="line"><span style="color:#A6ACCD;">solution.getRandom(); // return 2</span></span>
<span class="line"><span style="color:#A6ACCD;">solution.getRandom(); // return 2</span></span>
<span class="line"><span style="color:#A6ACCD;">solution.getRandom(); // return 3</span></span>
<span class="line"><span style="color:#A6ACCD;">// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the linked list will be in the range <code>[1, 10<sup>4</sup>]</code>.</li><li><code>-10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup></code></li><li>At most <code>10<sup>4</sup></code> calls will be made to <code>getRandom</code>.</li></ul><p> </p><p><strong>Follow up:</strong></p><ul><li>What if the linked list is extremely large and its length is unknown to you?</li><li>Could you solve this efficiently without using extra space?</li></ul><h2 id="solution" tabindex="-1">Solution: <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-aQ79U" id="tab-K0Kwy1g" checked="checked"><label for="tab-K0Kwy1g">Go</label></div><div class="blocks"><div class="language-go active"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">math/rand</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Definition for singly-linked list.</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ListNode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	Val  </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">	Next </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	arr </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">head </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> Solution </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	arr </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> head </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Val</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		head </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> Solution</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">this </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Solution</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GetRandom</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">rand</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Intn</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">))]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * Your Solution object will be instantiated and called as such:</span></span>
<span class="line"><span style="color:#676E95;"> * obj := Constructor(head);</span></span>
<span class="line"><span style="color:#676E95;"> * param_1 := obj.GetRandom();</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></div></div><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,20),e=[p];function t(c,r,i,D,y,C){return n(),a("div",null,e)}const F=s(o,[["render",t]]);export{A as __pageData,F as default};