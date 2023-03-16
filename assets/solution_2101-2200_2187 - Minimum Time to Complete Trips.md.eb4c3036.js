import{_ as s,o as n,c as a,a as l}from"./app.825b1a82.js";const F=JSON.parse('{"title":"2187. Minimum Time to Complete Trips","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[]},{"level":2,"title":"Solution:","slug":"solution","link":"#solution","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/2101-2200/2187 - Minimum Time to Complete Trips.md","lastUpdated":1678822270000}'),p={name:"solution/2101-2200/2187 - Minimum Time to Complete Trips.md"},o=l(`<h1 id="_2187-minimum-time-to-complete-trips" tabindex="-1">2187. Minimum Time to Complete Trips <a href="https://leetcode.com/problems/minimum-time-to-complete-trips/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_2187-minimum-time-to-complete-trips" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Medium-yellow.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>You are given an array <code>time</code> where <code>time[i]</code> denotes the time taken by the <code>i<sup>th</sup></code> bus to complete <strong>one trip</strong>.</p><p>Each bus can make multiple trips <strong>successively</strong>; that is, the next trip can start <strong>immediately after</strong> completing the current trip. Also, each bus operates <strong>independently</strong>; that is, the trips of one bus do not influence the trips of any other bus.</p><p>You are also given an integer <code>totalTrips</code>, which denotes the number of trips all buses should make <strong>in total</strong>. Return <em>the <strong>minimum time</strong> required for all buses to complete <strong>at least</strong></em><code>totalTrips</code><em> trips</em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: time = [1,2,3], totalTrips = 5</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 3</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation:</span></span>
<span class="line"><span style="color:#A6ACCD;">- At time t = 1, the number of trips completed by each bus are [1,0,0].</span></span>
<span class="line"><span style="color:#A6ACCD;">  The total number of trips completed is 1 + 0 + 0 = 1.</span></span>
<span class="line"><span style="color:#A6ACCD;">- At time t = 2, the number of trips completed by each bus are [2,1,0].</span></span>
<span class="line"><span style="color:#A6ACCD;">  The total number of trips completed is 2 + 1 + 0 = 3.</span></span>
<span class="line"><span style="color:#A6ACCD;">- At time t = 3, the number of trips completed by each bus are [3,1,1].</span></span>
<span class="line"><span style="color:#A6ACCD;">  The total number of trips completed is 3 + 1 + 1 = 5.</span></span>
<span class="line"><span style="color:#A6ACCD;">So the minimum time needed for all buses to complete at least 5 trips is 3.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 2:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: time = [2], totalTrips = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 2</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation:</span></span>
<span class="line"><span style="color:#A6ACCD;">There is only one bus, and it will complete its first trip at t = 2.</span></span>
<span class="line"><span style="color:#A6ACCD;">So the minimum time needed to complete 1 trip is 2.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= time.length &lt;= 10<sup>5</sup></code></li><li><code>1 &lt;= time[i], totalTrips &lt;= 10<sup>7</sup></code></li></ul><details class="details custom-block"><summary><em>Click to open Hints</em></summary><ul><li>For a given amount of time, how can we count the total number of trips completed by all buses within that time?</li><li>Consider using binary search.</li></ul></details><h2 id="solution" tabindex="-1">Solution: <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-XNDYH" id="tab-OHo3tPO" checked="checked"><label for="tab-OHo3tPO">Rust</label></div><div class="blocks"><div class="language-rs active"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">impl</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">minimum_time</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vec</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> total_trips</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i64</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> time </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> time</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> left </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0_</span><span style="color:#FFCB6B;">i64</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> right </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100_000_000_000_000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> ans </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> left </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> right </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> mid </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">left </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> trips </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">..</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                trips </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> mid </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> time</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i64</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> trips </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> total_trips </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i64</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                ans </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ans</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">min</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">mid</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">                right </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> mid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                left </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> mid </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        ans</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></div></div><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,19),e=[o];function t(r,c,i,C,D,y){return n(),a("div",null,e)}const m=s(p,[["render",t]]);export{F as __pageData,m as default};