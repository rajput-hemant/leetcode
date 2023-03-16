import{_ as s,o as n,c as a,a as l}from"./app.825b1a82.js";const A=JSON.parse('{"title":"142. Linked List Cycle II","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[]},{"level":2,"title":"Solution:","slug":"solution","link":"#solution","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/0101-0200/142 - Linked List Cycle II.md","lastUpdated":1678822270000}'),e={name:"solution/0101-0200/142 - Linked List Cycle II.md"},o=l(`<h1 id="_142-linked-list-cycle-ii" tabindex="-1">142. Linked List Cycle II <a href="https://leetcode.com/problems/linked-list-cycle-ii/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_142-linked-list-cycle-ii" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Medium-yellow.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>Given the <code>head</code> of a linked list, return <em>the node where the cycle begins. If there is no cycle, return </em><code>null</code>.</p><p>There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the <code>next</code> pointer. Internally, <code>pos</code> is used to denote the index of the node that tail&#39;s <code>next</code> pointer is connected to (<strong>0-indexed</strong>). It is <code>-1</code> if there is no cycle. <strong>Note that</strong> <code>pos</code> <strong>is not passed as a parameter</strong>.</p><p><strong>Do not modify</strong> the linked list.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png" style="height:145px;width:450px;"><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: head = [3,2,0,-4], pos = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: tail connects to node index 1</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: There is a cycle in the linked list, where tail connects to the second node.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 2:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png" style="height:105px;width:201px;"><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: head = [1,2], pos = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: tail connects to node index 0</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: There is a cycle in the linked list, where tail connects to the first node.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 3:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png" style="height:65px;width:65px;"><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: head = [1], pos = -1</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: no cycle</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: There is no cycle in the linked list.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of the nodes in the list is in the range <code>[0, 10<sup>4</sup>]</code>.</li><li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li><li><code>pos</code> is <code>-1</code> or a <strong>valid index</strong> in the linked-list.</li></ul><p> </p><p><strong>Follow up:</strong> Can you solve it using <code>O(1)</code> (i.e. constant) memory?</p><h2 id="solution" tabindex="-1">Solution: <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-qt8TH" id="tab-aLBB-_V" checked="checked"><label for="tab-aLBB-_V">Go</label></div><div class="blocks"><div class="language-go active"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Definition for Singly-Linked List</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ListNode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	Val  </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">	Next </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">detectCycle</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">head </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	slow</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fast </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> head</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> head</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> fast </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> fast</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		slow </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> slow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span></span>
<span class="line"><span style="color:#A6ACCD;">		fast </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> fast</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> slow </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> fast </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			slow </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> head</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> slow </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> fast </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">				slow </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> slow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span></span>
<span class="line"><span style="color:#A6ACCD;">				fast </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> fast</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> slow</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></div></div><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,25),p=[o];function t(c,i,r,d,D,y){return n(),a("div",null,p)}const h=s(e,[["render",t]]);export{A as __pageData,h as default};