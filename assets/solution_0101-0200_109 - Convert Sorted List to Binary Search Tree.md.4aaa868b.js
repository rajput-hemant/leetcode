import{_ as s,o as n,c as a,a as l}from"./app.825b1a82.js";const F=JSON.parse('{"title":"109. Convert Sorted List to Binary Search Tree","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[]},{"level":2,"title":"Solution:","slug":"solution","link":"#solution","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/0101-0200/109 - Convert Sorted List to Binary Search Tree.md","lastUpdated":1678822270000}'),p={name:"solution/0101-0200/109 - Convert Sorted List to Binary Search Tree.md"},e=l(`<h1 id="_109-convert-sorted-list-to-binary-search-tree" tabindex="-1">109. Convert Sorted List to Binary Search Tree <a href="https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_109-convert-sorted-list-to-binary-search-tree" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Medium-yellow.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>Given the <code>head</code> of a singly linked list where elements are sorted in <strong>ascending order</strong>, convert <em>it to a </em><span data-keyword="height-balanced"><strong><em>height-balanced</em></strong></span> <em>binary search tree</em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2020/08/17/linked.jpg" style="width:500px;height:388px;"><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: head = [-10,-3,0,5,9]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: [0,-3,9,-10,null,5]</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 2:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: head = []</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of nodes in <code>head</code> is in the range <code>[0, 2 * 10<sup>4</sup>]</code>.</li><li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li></ul><h2 id="solution" tabindex="-1">Solution: <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-HHh6X" id="tab-HffFO05" checked="checked"><label for="tab-HffFO05">Go</label></div><div class="blocks"><div class="language-go active"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Definition for singly-linked list.</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ListNode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	Val  </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">	Next </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	Val   </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">	Left  </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">TreeNode</span></span>
<span class="line"><span style="color:#A6ACCD;">	Right </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">TreeNode</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sortedListToBST</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">head </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">TreeNode </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> head </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">TreeNode</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Val</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Val</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	slow</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fast </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> head</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> head</span></span>
<span class="line"><span style="color:#A6ACCD;">	prev </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> slow</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> fast </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> fast</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		prev </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> slow</span></span>
<span class="line"><span style="color:#A6ACCD;">		slow </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> slow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span></span>
<span class="line"><span style="color:#A6ACCD;">		fast </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> fast</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// slow points to the root of the current subtree</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// break the link between the left subtree and the root</span></span>
<span class="line"><span style="color:#A6ACCD;">	prev</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	root </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">TreeNode</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Val</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> slow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Val</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Left </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sortedListToBST</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Right </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sortedListToBST</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">slow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> root</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></div></div><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,17),o=[e];function t(r,c,D,i,y,C){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};