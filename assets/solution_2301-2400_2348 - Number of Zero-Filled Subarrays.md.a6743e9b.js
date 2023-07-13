import{_ as s,o as n,c as a,a as e}from"./app.e4604e86.js";const d=JSON.parse('{"title":"2348. Number of Zero-Filled Subarrays","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/2301-2400/2348 - Number of Zero-Filled Subarrays.md","lastUpdated":1680513503000}'),l={name:"solution/2301-2400/2348 - Number of Zero-Filled Subarrays.md"},p=e(`<h1 id="_2348-number-of-zero-filled-subarrays" tabindex="-1">2348. Number of Zero-Filled Subarrays <a href="https://leetcode.com/problems/number-of-zero-filled-subarrays/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_2348-number-of-zero-filled-subarrays" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Medium-yellow.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>Given an integer array <code>nums</code>, return <em>the number of <strong>subarrays</strong> filled with </em><code>0</code>.</p><p>A <strong>subarray</strong> is a contiguous non-empty sequence of elements within an array.</p><p> </p><p><strong class="example">Example 1:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: nums = [1,3,0,0,2,0,0,4]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 6</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation:</span></span>
<span class="line"><span style="color:#A6ACCD;">There are 4 occurrences of [0] as a subarray.</span></span>
<span class="line"><span style="color:#A6ACCD;">There are 2 occurrences of [0,0] as a subarray.</span></span>
<span class="line"><span style="color:#A6ACCD;">There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;p&gt;&lt;strong class=&quot;example&quot;&gt;Example 2:&lt;/strong&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Input: nums = [0,0,0,2,0,0] Output: 9 Explanation: There are 5 occurrences of [0] as a subarray. There are 3 occurrences of [0,0] as a subarray. There is 1 occurrence of [0,0,0] as a subarray. There is no occurrence of a subarray with a size more than 3 filled with 0. Therefore, we return 9.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;p&gt;&lt;strong class=&quot;example&quot;&gt;Example 3:&lt;/strong&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Input: nums = [2,10,2019] Output: 0 Explanation: There is no subarray filled with 0. Therefore, we return 0.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;p&gt; &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;p&gt;&lt;strong&gt;Constraints:&lt;/strong&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;li&gt;&lt;code&gt;1 &amp;lt;= nums.length &amp;lt;= 10&lt;sup&gt;5&lt;/sup&gt;&lt;/code&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;li&gt;&lt;code&gt;-10&lt;sup&gt;9&lt;/sup&gt; &amp;lt;= nums[i] &amp;lt;= 10&lt;sup&gt;9&lt;/sup&gt;&lt;/code&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">::: details _Click to open Hints_</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- For each zero, you can calculate the number of zero-filled subarrays that end on that index, which is the number of consecutive zeros behind the current element + 1.</span></span>
<span class="line"><span style="color:#A6ACCD;">- Maintain the number of consecutive zeros behind the current element, count the number of zero-filled subarrays that end on each index, sum it up to get the answer.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">## Solution:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">::: code-group</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`rs [Rust]</span></span>
<span class="line"><span style="color:#A6ACCD;">impl Solution {</span></span>
<span class="line"><span style="color:#A6ACCD;">    pub fn zero_filled_subarray(nums: Vec&lt;i32&gt;) -&gt; i64 {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let mut nums = nums;</span></span>
<span class="line"><span style="color:#A6ACCD;">        nums.push(1);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        let (mut res, mut count) = (0, 0);</span></span>
<span class="line"><span style="color:#A6ACCD;">        for num in nums {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if num == 0 {</span></span>
<span class="line"><span style="color:#A6ACCD;">                count += 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">            } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                res += count * (count + 1) / 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">                count = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        res</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>:::</p><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,15),t=[p];function o(r,c,i,u,C,A){return n(),a("div",null,t)}const m=s(l,[["render",o]]);export{d as __pageData,m as default};
