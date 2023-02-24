import{_ as e,o as t,c as n,a as s}from"./app.00b90da8.js";const b=JSON.parse('{"title":"195. Tenth Line","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[]},{"level":2,"title":"Solution:","slug":"solution","link":"#solution","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/0101-0200/195 - Tenth Line.md","lastUpdated":1671952530000}'),a={name:"solution/0101-0200/195 - Tenth Line.md"},i=s(`<h1 id="_195-tenth-line" tabindex="-1">195. Tenth Line <a href="https://leetcode.com/problems/tenth-line/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_195-tenth-line" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Easy-bright.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>Given a text file <code>file.txt</code>, print just the 10th line of the file.</p><p><strong class="example">Example:</strong></p><p>Assume that <code>file.txt</code> has the following content:</p><pre>Line 1
Line 2
Line 3
Line 4
Line 5
Line 6
Line 7
Line 8
Line 9
Line 10
</pre><p>Your script should output the tenth line, which is:</p><pre>Line 10
</pre><div class="spoilers"><b>Note:</b><br> 1. If the file contains less than 10 lines, what should you output?<br> 2. There&#39;s at least three different solutions. Try to explore all possibilities.</div><h2 id="solution" tabindex="-1">Solution: <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-8Kiiv" id="tab-MmbcyjK" checked="checked"><label for="tab-MmbcyjK">sh</label></div><div class="blocks"><div class="language-sh active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">#!/usr/bin/env bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sed -n 10p file.txt</span></span>
<span class="line"></span></code></pre></div></div></div><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,14),l=[i];function o(r,p,c,h,d,u){return t(),n("div",null,l)}const m=e(a,[["render",o]]);export{b as __pageData,m as default};
