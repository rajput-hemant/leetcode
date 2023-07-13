import{_ as s,o as n,c as a,a as l}from"./app.e4604e86.js";const y=JSON.parse('{"title":"1929. Concatenation of Array","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/1901-2000/1929 - Concatenation of Array.md","lastUpdated":1677762379000}'),e={name:"solution/1901-2000/1929 - Concatenation of Array.md"},t=l(`<h1 id="_1929-concatenation-of-array" tabindex="-1">1929. Concatenation of Array <a href="https://leetcode.com/problems/concatenation-of-array/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_1929-concatenation-of-array" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Easy-bright.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>Given an integer array <code>nums</code> of length <code>n</code>, you want to create an array <code>ans</code> of length <code>2n</code> where <code>ans[i] == nums[i]</code> and <code>ans[i + n] == nums[i]</code> for <code>0 &lt;= i &lt; n</code> (<strong>0-indexed</strong>).</p><p>Specifically, <code>ans</code> is the <strong>concatenation</strong> of two <code>nums</code> arrays.</p><p>Return <em>the array </em><code>ans</code>.</p><p> </p><p><strong class="example">Example 1:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: nums = [1,2,1]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: [1,2,1,1,2,1]</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: The array ans is formed as follows:</span></span>
<span class="line"><span style="color:#A6ACCD;">- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]</span></span>
<span class="line"><span style="color:#A6ACCD;">- ans = [1,2,1,1,2,1]\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;p&gt;&lt;strong class=&quot;example&quot;&gt;Example 2:&lt;/strong&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Input: nums = [1,3,2,1] Output: [1,3,2,1,1,3,2,1] Explanation: The array ans is formed as follows:</p><ul><li>ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]</li><li>ans = [1,3,2,1,1,3,2,1]</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;p&gt; &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;p&gt;&lt;strong&gt;Constraints:&lt;/strong&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;li&gt;&lt;code&gt;n == nums.length&lt;/code&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;li&gt;&lt;code&gt;1 &amp;lt;= n &amp;lt;= 1000&lt;/code&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;li&gt;&lt;code&gt;1 &amp;lt;= nums[i] &amp;lt;= 1000&lt;/code&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">::: details _Click to open Hints_</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- Build an array of size 2 * n and assign num[i] to ans[i] and ans[i + n]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">## Solution:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">::: code-group</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`rs [Rust]</span></span>
<span class="line"><span style="color:#A6ACCD;">impl Solution {</span></span>
<span class="line"><span style="color:#A6ACCD;">    pub fn get_concatenation(nums: Vec&lt;i32&gt;) -&gt; Vec&lt;i32&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let mut result = nums.clone();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        result.extend(nums);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        result</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>:::</p><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,15),p=[t];function o(c,r,i,C,A,d){return n(),a("div",null,p)}const m=s(e,[["render",o]]);export{y as __pageData,m as default};
