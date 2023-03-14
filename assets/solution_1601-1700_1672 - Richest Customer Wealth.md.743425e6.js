import{_ as s,o as n,c as a,a as l}from"./app.80a76440.js";const m=JSON.parse('{"title":"1672. Richest Customer Wealth","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/1601-1700/1672 - Richest Customer Wealth.md","lastUpdated":1677958804000}'),e={name:"solution/1601-1700/1672 - Richest Customer Wealth.md"},t=l(`<h1 id="_1672-richest-customer-wealth" tabindex="-1">1672. Richest Customer Wealth <a href="https://leetcode.com/problems/richest-customer-wealth/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_1672-richest-customer-wealth" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Easy-bright.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>You are given an <code>m x n</code> integer grid <code>accounts</code> where <code>accounts[i][j]</code> is the amount of money the <code>i​​​​​<sup>​​​​​​th</sup>​​​​</code> customer has in the <code>j​​​​​<sup>​​​​​​th</sup></code>​​​​ bank. Return<em> the <strong>wealth</strong> that the richest customer has.</em></p><p>A customer&#39;s <strong>wealth</strong> is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum <strong>wealth</strong>.</p><p> </p><p><strong class="example">Example 1:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: accounts = [[1,2,3],[3,2,1]]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 6</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation:</span></span>
<span class="line"><span style="color:#A6ACCD;">1st customer has wealth = 1 + 2 + 3 = 6</span></span>
<span class="line"><span style="color:#A6ACCD;">2nd customer has wealth = 3 + 2 + 1 = 6</span></span>
<span class="line"><span style="color:#A6ACCD;">Both customers are considered the richest with a wealth of 6 each, so return 6.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 2:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: accounts = [[1,5],[7,3],[3,5]]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 10</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation:</span></span>
<span class="line"><span style="color:#A6ACCD;">1st customer has wealth = 6</span></span>
<span class="line"><span style="color:#A6ACCD;">2nd customer has wealth = 10</span></span>
<span class="line"><span style="color:#A6ACCD;">3rd customer has wealth = 8</span></span>
<span class="line"><span style="color:#A6ACCD;">The 2nd customer is the richest with a wealth of 10.\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;p&gt;&lt;strong class=&quot;example&quot;&gt;Example 3:&lt;/strong&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Input: accounts = [[2,8,7],[7,1,3],[1,9,5]] Output: 17</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;p&gt; &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;p&gt;&lt;strong&gt;Constraints:&lt;/strong&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;li&gt;&lt;code&gt;m == accounts.length&lt;/code&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;li&gt;&lt;code&gt;n == accounts[i].length&lt;/code&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;li&gt;&lt;code&gt;1 &amp;lt;= m, n &amp;lt;= 50&lt;/code&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;li&gt;&lt;code&gt;1 &amp;lt;= accounts[i][j] &amp;lt;= 100&lt;/code&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">::: details _Click to open Hints_</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- Calculate the wealth of each customer</span></span>
<span class="line"><span style="color:#A6ACCD;">- Find the maximum element in array.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">## Solution:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">::: code-group</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`rs [Rust]</span></span>
<span class="line"><span style="color:#A6ACCD;">impl Solution {</span></span>
<span class="line"><span style="color:#A6ACCD;">    pub fn maximum_wealth(accounts: Vec&lt;Vec&lt;i32&gt;&gt;) -&gt; i32 {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let mut max = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        for account in accounts {</span></span>
<span class="line"><span style="color:#A6ACCD;">            let mut sum = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">            for money in account {</span></span>
<span class="line"><span style="color:#A6ACCD;">                sum += money;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            if sum &gt; max {</span></span>
<span class="line"><span style="color:#A6ACCD;">                max = sum;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        max</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>:::</p><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,15),p=[t];function o(c,r,i,C,A,h){return n(),a("div",null,p)}const d=s(e,[["render",o]]);export{m as __pageData,d as default};
