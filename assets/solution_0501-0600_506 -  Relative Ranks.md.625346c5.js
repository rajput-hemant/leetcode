import{_ as s,c as a,o as n,a as l}from"./app.e066f054.js";const A=JSON.parse('{"title":"506. Relative Ranks","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement:","slug":"problem-statement","link":"#problem-statement","children":[{"level":3,"title":"Example 1:","slug":"example-1","link":"#example-1","children":[]},{"level":3,"title":"Example 2:","slug":"example-2","link":"#example-2","children":[]},{"level":3,"title":"Constraints:","slug":"constraints","link":"#constraints","children":[]}]},{"level":2,"title":"Solution:","slug":"solution","link":"#solution","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/0501-0600/506 -  Relative Ranks.md","lastUpdated":1671291107000}'),o={name:"solution/0501-0600/506 -  Relative Ranks.md"},e=l(`<h1 id="_506-relative-ranks" tabindex="-1">506. Relative Ranks <a href="https://leetcode.com/problems/relative-ranks" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png" alt="share"></a> <a class="header-anchor" href="#_506-relative-ranks" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Easy-bright.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement: <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>You are given an integer array <code>score</code> of size <code>n</code>, where <code>score[i]</code> is the score of the <code>i<sup>th</sup></code> athlete in a competition. All the scores are guaranteed to be <strong>unique</strong>.</p><p>The athletes are <strong>placed</strong> based on their scores, where the <code>1st</code> place athlete has the highest score, the 2nd place athlete has the <code>2nd</code> highest score, and so on. The placement of each athlete determines their rank:</p><ul><li>The <code>1<sup>st</sup></code> place athlete&#39;s rank is <code>&quot;Gold Medal&quot;</code>.</li><li>The <code>2<sup>nd</sup></code> place athlete&#39;s rank is <code>&quot;Silver Medal&quot;</code>.</li><li>The <code>3<sup>rd</sup></code> place athlete&#39;s rank is <code>&quot;Bronze Medal&quot;</code>.</li><li>For the <code>4<sup>th</sup></code> place to the <code>n<sup>th</sup></code> place athlete, their rank is their placement number (i.e., the <code>x<sup>th</sup></code> place athlete&#39;s rank is <code>&quot;x&quot;</code>).</li></ul><p>Return an array <code>answer</code> of size <code>n</code> where <code>answer[i]</code> is the <strong>rank</strong> of the <code>i<sup>th</sup></code> athlete.</p><h3 id="example-1" tabindex="-1">Example 1: <a class="header-anchor" href="#example-1" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: score = [5,4,3,2,1]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: [&quot;Gold Medal&quot;,&quot;Silver Medal&quot;,&quot;Bronze Medal&quot;,&quot;4&quot;,&quot;5&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="example-2" tabindex="-1">Example 2: <a class="header-anchor" href="#example-2" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: score = [10,3,8,9,4]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: [&quot;Gold Medal&quot;,&quot;5&quot;,&quot;Bronze Medal&quot;,&quot;Silver Medal&quot;,&quot;4&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="constraints" tabindex="-1">Constraints: <a class="header-anchor" href="#constraints" aria-hidden="true">#</a></h3><ul><li>n == score.length</li><li>1 &lt;= n &lt;= 10<sup>4</sup></li><li>0 &lt;= score[i] &lt;= 10<sup>6</sup></li><li>All the values in <code>score</code> are <strong>unique</strong>.</li></ul><h2 id="solution" tabindex="-1">Solution: <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-D5Fbb" id="tab-GPGgCWR" checked="checked"><label for="tab-GPGgCWR">java</label></div><div class="blocks"><div class="language-java active"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">findRelativeRanks</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> score</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> temp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> score</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clone</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">  Arrays</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">temp</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">Map</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Integer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> rankMap </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">HashMap</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Integer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> ranks </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">score</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> score</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> score</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      rankMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">put</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">temp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Gold Medal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> score</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      rankMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">put</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">temp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Silver Medal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> score</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      rankMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">put</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">temp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Bronze Medal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">else</span></span>
<span class="line"><span style="color:#A6ACCD;">      rankMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">put</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">temp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">valueOf</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">score</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> ranks</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++)</span></span>
<span class="line"><span style="color:#A6ACCD;">    ranks</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> rankMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">score</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> ranks</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></div></div><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,17),p=[e];function t(r,c,D,y,i,C){return n(),a("div",null,p)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};