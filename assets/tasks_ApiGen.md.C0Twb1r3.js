import{_ as i,c as a,a2 as s,o}from"./chunks/framework.DPuwY6B9.js";const g=JSON.parse('{"title":"ApiGen Tasks","description":"","frontmatter":{},"headers":[],"relativePath":"tasks/ApiGen.md","filePath":"tasks/ApiGen.md"}'),t={name:"tasks/ApiGen.md"};function l(d,e,n,r,c,p){return o(),a("div",null,e[0]||(e[0]=[s(`<h1 id="apigen-tasks" tabindex="-1">ApiGen Tasks <a class="header-anchor" href="#apigen-tasks" aria-label="Permalink to &quot;ApiGen Tasks&quot;">​</a></h1><h2 id="apigen" tabindex="-1">ApiGen <a class="header-anchor" href="#apigen" aria-label="Permalink to &quot;ApiGen&quot;">​</a></h2><p>Executes ApiGen command to generate documentation</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ApiGen Command</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taskApiGen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./vendor/apigen/apigen.phar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./apigen.neon&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">templateConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vendor/apigen/apigen/templates/bootstrap/config.neon&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wipeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?&gt;</span></span></code></pre></div><ul><li><code>args($args)</code> Pass methods parameters as arguments to executable. Argument values</li><li><code>config($config)</code> * <code>param string</code> $config</li><li><code>source($src)</code> * <code>param array|string|\\Traversable</code> $src</li><li><code>destination($dest)</code> * <code>param string</code> $dest</li><li><code>extensions($exts)</code> * <code>param array|string</code> $exts</li><li><code>exclude($exclude)</code> * <code>param array|string</code> $exclude</li><li><code>skipDocPath($path)</code> * <code>param array|string|\\Traversable</code> $path</li><li><code>skipDocPrefix($prefix)</code> * <code>param array|string|\\Traversable</code> $prefix</li><li><code>charset($charset)</code> * <code>param array|string</code> $charset</li><li><code>mainProjectNamePrefix($name)</code> * <code>param string</code> $name</li><li><code>title($title)</code> * <code>param string</code> $title</li><li><code>baseUrl($baseUrl)</code> * <code>param string</code> $baseUrl</li><li><code>googleCseId($id)</code> * <code>param string</code> $id</li><li><code>googleAnalytics($trackingCode)</code> * <code>param string</code> $trackingCode</li><li><code>templateConfig($templateConfig)</code> * <code>param mixed</code> $templateConfig</li><li><code>allowedHtml($tags)</code> * <code>param array|string</code> $tags</li><li><code>groups($groups)</code> * <code>param string</code> $groups</li><li><code>autocomplete($types)</code> * <code>param array|string</code> $types</li><li><code>accessLevels($levels)</code> * <code>param array|string</code> $levels</li><li><code>internal($internal)</code> * <code>param boolean|string</code> $internal</li><li><code>php($php)</code> * <code>param bool|string</code> $php</li><li><code>tree($tree)</code> * <code>param bool|string</code> $tree</li><li><code>deprecated($dep)</code> * <code>param bool|string</code> $dep</li><li><code>todo($todo)</code> * <code>param bool|string</code> $todo</li><li><code>sourceCode($src)</code> * <code>param bool|string</code> $src</li><li><code>download($zipped)</code> * <code>param bool|string</code> $zipped</li><li><code>report($path)</code> * <code>param string</code> $path</li><li><code>wipeout($wipeout)</code> * <code>param bool|string</code> $wipeout</li><li><code>quiet($quiet)</code> * <code>param bool|string</code> $quiet</li><li><code>progressbar($bar)</code> * <code>param bool|string</code> $bar</li><li><code>colors($colors)</code> * <code>param bool|string</code> $colors</li><li><code>updateCheck($check)</code> * <code>param bool|string</code> $check</li><li><code>debug($debug)</code> * <code>param bool|string</code> $debug</li><li><code>setOutput($output)</code> Sets the Console Output.</li><li><code>setProcessInput($input)</code> Pass an input to the process. Can be resource created with fopen() or string</li><li><code>dir($dir)</code> Changes working directory of command</li><li><code>arg($arg)</code> Pass argument to executable. Its value will be automatically escaped.</li><li><code>rawArg($arg)</code> Pass the provided string in its raw (as provided) form as an argument to executable.</li><li><code>option($option, $value = null, $separator = null)</code> Pass option to executable. Options are prefixed with <code>--</code> , value can be provided in second parameter.</li><li><code>options(array $options, $separator = null)</code> Pass multiple options to executable. The associative array contains</li><li><code>optionList($option, $value = null, $separator = null)</code> Pass an option with multiple values to executable. Value can be a string or array.</li></ul>`,5)]))}const k=i(t,[["render",l]]);export{g as __pageData,k as default};