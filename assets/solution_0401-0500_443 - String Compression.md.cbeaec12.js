import{_ as s,o as n,c as a,a as e}from"./app.45fd0cc4.js";const d=JSON.parse('{"title":"443. String Compression","description":"","frontmatter":{},"headers":[{"level":2,"title":"Problem Statement","slug":"problem-statement","link":"#problem-statement","children":[{"level":3,"title":"...","slug":"","link":"#","children":[]}]}],"relativePath":"solution/0401-0500/443 - String Compression.md","lastUpdated":1677762379000}'),t={name:"solution/0401-0500/443 - String Compression.md"},l=e(`<h1 id="_443-string-compression" tabindex="-1">443. String Compression <a href="https://leetcode.com/problems/string-compression/" target="_blank" rel="noreferrer"><img src="https://graph.org/file/3ea5234dda646b71c574a.png" alt="share"></a> <a class="header-anchor" href="#_443-string-compression" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/Difficulty-Medium-yellow.svg" alt=""></p><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h2><p>Given an array of characters <code>chars</code>, compress it using the following algorithm:</p><p>Begin with an empty string <code>s</code>. For each group of <strong>consecutive repeating characters</strong> in <code>chars</code>:</p><ul><li>If the group&#39;s length is <code>1</code>, append the character to <code>s</code>.</li><li>Otherwise, append the character followed by the group&#39;s length.</li></ul><p>The compressed string <code>s</code> <strong>should not be returned separately</strong>, but instead, be stored <strong>in the input character array <code>chars</code></strong>. Note that group lengths that are <code>10</code> or longer will be split into multiple characters in <code>chars</code>.</p><p>After you are done <strong>modifying the input array,</strong> return <em>the new length of the array</em>.</p><p>You must write an algorithm that uses only constant extra space.</p><p> </p><p><strong class="example">Example 1:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: chars = [&quot;a&quot;,&quot;a&quot;,&quot;b&quot;,&quot;b&quot;,&quot;c&quot;,&quot;c&quot;,&quot;c&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: Return 6, and the first 6 characters of the input array should be: [&quot;a&quot;,&quot;2&quot;,&quot;b&quot;,&quot;2&quot;,&quot;c&quot;,&quot;3&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: The groups are &quot;aa&quot;, &quot;bb&quot;, and &quot;ccc&quot;. This compresses to &quot;a2b2c3&quot;.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 2:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Input: chars = [&quot;a&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: Return 1, and the first character of the input array should be: [&quot;a&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: The only group is &quot;a&quot;, which remains uncompressed since it&#39;s a single character.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong class="example">Example 3:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki has-diff"><code><span class="line"><span style="color:#A6ACCD;">Input: chars = [&quot;a&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: Return 4, and the first 4 characters of the input array should be: [&quot;a&quot;,&quot;b&quot;,&quot;1&quot;,&quot;2&quot;].</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: The groups are &quot;a&quot; and &quot;bbbbbbbbbbbb&quot;. This compresses to &quot;ab12&quot;.\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;p&gt; &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;p&gt;&lt;strong&gt;Constraints:&lt;/strong&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;li&gt;&lt;code&gt;1 &amp;lt;= chars.length &amp;lt;= 2000&lt;/code&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;li&gt;&lt;code&gt;chars[i]&lt;/code&gt; is a lowercase English letter, uppercase English letter, digit, or symbol.&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">::: details _Click to open Hints_</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- How do you know if you are at the end of a consecutive group of characters?</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">## Solution:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">::: code-group</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`rs [Rust]</span></span>
<span class="line"><span style="color:#A6ACCD;">impl Solution {</span></span>
<span class="line"><span style="color:#A6ACCD;">    pub fn compress(chars: &amp;mut Vec&lt;char&gt;) -&gt; i32 {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let (mut i, n) = (0, chars.len());</span></span>
<span class="line"><span style="color:#A6ACCD;">        let mut new_len = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        while i &lt; n {</span></span>
<span class="line"><span style="color:#A6ACCD;">            let mut j = i;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            // increment j until we find a different character or reach the end</span></span>
<span class="line"><span style="color:#A6ACCD;">            while j &lt; n &amp;&amp; chars[j] == chars[i] {</span></span>
<span class="line"><span style="color:#A6ACCD;">                j += 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            // place the character at the new position</span></span>
<span class="line"><span style="color:#A6ACCD;">            // e.g. if we have aabbccc, we place a at the start of the array</span></span>
<span class="line"><span style="color:#A6ACCD;">            chars[new_len] = chars[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">            new_len += 1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            // if the length of the group of characters is greater than 1</span></span>
<span class="line"><span style="color:#A6ACCD;">            // i.e. suppose if new_len is 12, we need to place 12 as characters [..., &#39;1&#39;,&#39;2&#39;, ...]</span></span>
<span class="line"><span style="color:#A6ACCD;">            if j - i &gt; 1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">                for c in (j - i).to_string().chars() {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    chars[new_len] = c;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    new_len += 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            // place i at same position as j,</span></span>
<span class="line"><span style="color:#A6ACCD;">            // i.e. the start of the next group of characters</span></span>
<span class="line"><span style="color:#A6ACCD;">            i = j;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        new_len as i32</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>:::</p><h3 id="" tabindex="-1"><a href="#"><em>...</em></a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,19),o=[l];function p(c,r,i,u,C,A){return n(),a("div",null,o)}const g=s(t,[["render",p]]);export{d as __pageData,g as default};
