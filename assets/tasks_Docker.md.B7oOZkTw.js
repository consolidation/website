import{_ as i,c as a,a2 as e,o as t}from"./chunks/framework.DPuwY6B9.js";const c=JSON.parse('{"title":"Docker Tasks","description":"","frontmatter":{},"headers":[],"relativePath":"tasks/Docker.md","filePath":"tasks/Docker.md"}'),n={name:"tasks/Docker.md"};function l(p,s,h,r,k,o){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="docker-tasks" tabindex="-1">Docker Tasks <a class="header-anchor" href="#docker-tasks" aria-label="Permalink to &quot;Docker Tasks&quot;">​</a></h1><h2 id="build" tabindex="-1">Build <a class="header-anchor" href="#build" aria-label="Permalink to &quot;Build&quot;">​</a></h2><p>Builds Docker image</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taskDockerBuild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taskDockerBuild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;path/to/dir&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;database&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?&gt;</span></span></code></pre></div><p>Class Build @package Robo\\Task\\Docker</p><ul><li><code>tag($tag)</code> * <code>param string</code> $tag</li><li><code>enableBuildKit()</code> * <code>return</code> $this</li><li><code>setOutput($output)</code> Sets the Console Output.</li><li><code>setProcessInput($input)</code> Pass an input to the process. Can be resource created with fopen() or string</li><li><code>dir($dir)</code> Changes working directory of command</li><li><code>arg($arg)</code> Pass argument to executable. Its value will be automatically escaped.</li><li><code>args($args)</code> Pass methods parameters as arguments to executable. Argument values</li><li><code>rawArg($arg)</code> Pass the provided string in its raw (as provided) form as an argument to executable.</li><li><code>option($option, $value = null, $separator = null)</code> Pass option to executable. Options are prefixed with <code>--</code> , value can be provided in second parameter.</li><li><code>options(array $options, $separator = null)</code> Pass multiple options to executable. The associative array contains</li><li><code>optionList($option, $value = null, $separator = null)</code> Pass an option with multiple values to executable. Value can be a string or array.</li></ul><h2 id="commit" tabindex="-1">Commit <a class="header-anchor" href="#commit" aria-label="Permalink to &quot;Commit&quot;">​</a></h2><p>Commits docker container to an image</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$this-&gt;taskDockerCommit($containerId)</span></span>
<span class="line"><span>     -&gt;name(&#39;my/database&#39;)</span></span>
<span class="line"><span>     -&gt;run();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// alternatively you can take the result from DockerRun task:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$result = $this-&gt;taskDockerRun(&#39;db&#39;)</span></span>
<span class="line"><span>     -&gt;exec(&#39;./prepare_database.sh&#39;)</span></span>
<span class="line"><span>     -&gt;run();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$task-&gt;dockerCommit($result)</span></span>
<span class="line"><span>     -&gt;name(&#39;my/database&#39;)</span></span>
<span class="line"><span>     -&gt;run();</span></span></code></pre></div><ul><li><code>name($name)</code> * <code>param string</code> $name</li><li><code>setOutput($output)</code> Sets the Console Output.</li><li><code>setProcessInput($input)</code> Pass an input to the process. Can be resource created with fopen() or string</li><li><code>dir($dir)</code> Changes working directory of command</li><li><code>arg($arg)</code> Pass argument to executable. Its value will be automatically escaped.</li><li><code>args($args)</code> Pass methods parameters as arguments to executable. Argument values</li><li><code>rawArg($arg)</code> Pass the provided string in its raw (as provided) form as an argument to executable.</li><li><code>option($option, $value = null, $separator = null)</code> Pass option to executable. Options are prefixed with <code>--</code> , value can be provided in second parameter.</li><li><code>options(array $options, $separator = null)</code> Pass multiple options to executable. The associative array contains</li><li><code>optionList($option, $value = null, $separator = null)</code> Pass an option with multiple values to executable. Value can be a string or array.</li></ul><h2 id="exec" tabindex="-1">Exec <a class="header-anchor" href="#exec" aria-label="Permalink to &quot;Exec&quot;">​</a></h2><p>Executes command inside running Docker container</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$test </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> $this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taskDockerRun</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test_env&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">detached</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taskDockerExec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($test)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">interactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./runtests&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// alternatively use commands from other tasks</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taskDockerExec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($test)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">interactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taskCodecept</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">suite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;acceptance&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?&gt;</span></span></code></pre></div><ul><li><code>detached()</code> * <code>return</code> $this</li><li><code>exec($command)</code> * <code>param string|\\Robo\\Contract\\CommandInterface</code> $command</li><li><code>setOutput($output)</code> Sets the Console Output.</li><li><code>setProcessInput($input)</code> Pass an input to the process. Can be resource created with fopen() or string</li><li><code>dir($dir)</code> Changes working directory of command</li><li><code>arg($arg)</code> Pass argument to executable. Its value will be automatically escaped.</li><li><code>args($args)</code> Pass methods parameters as arguments to executable. Argument values</li><li><code>rawArg($arg)</code> Pass the provided string in its raw (as provided) form as an argument to executable.</li><li><code>option($option, $value = null, $separator = null)</code> Pass option to executable. Options are prefixed with <code>--</code> , value can be provided in second parameter.</li><li><code>options(array $options, $separator = null)</code> Pass multiple options to executable. The associative array contains</li><li><code>optionList($option, $value = null, $separator = null)</code> Pass an option with multiple values to executable. Value can be a string or array.</li></ul><h2 id="pull" tabindex="-1">Pull <a class="header-anchor" href="#pull" aria-label="Permalink to &quot;Pull&quot;">​</a></h2><p>Pulls an image from DockerHub</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taskDockerPull</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;wordpress&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?&gt;</span></span></code></pre></div><ul><li><code>setOutput($output)</code> Sets the Console Output.</li><li><code>setProcessInput($input)</code> Pass an input to the process. Can be resource created with fopen() or string</li><li><code>dir($dir)</code> Changes working directory of command</li><li><code>arg($arg)</code> Pass argument to executable. Its value will be automatically escaped.</li><li><code>args($args)</code> Pass methods parameters as arguments to executable. Argument values</li><li><code>rawArg($arg)</code> Pass the provided string in its raw (as provided) form as an argument to executable.</li><li><code>option($option, $value = null, $separator = null)</code> Pass option to executable. Options are prefixed with <code>--</code> , value can be provided in second parameter.</li><li><code>options(array $options, $separator = null)</code> Pass multiple options to executable. The associative array contains</li><li><code>optionList($option, $value = null, $separator = null)</code> Pass an option with multiple values to executable. Value can be a string or array.</li></ul><h2 id="remove" tabindex="-1">Remove <a class="header-anchor" href="#remove" aria-label="Permalink to &quot;Remove&quot;">​</a></h2><p>Remove docker container</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taskDockerRemove</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($container)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?&gt;</span></span></code></pre></div><ul><li><code>setOutput($output)</code> Sets the Console Output.</li><li><code>setProcessInput($input)</code> Pass an input to the process. Can be resource created with fopen() or string</li><li><code>dir($dir)</code> Changes working directory of command</li><li><code>arg($arg)</code> Pass argument to executable. Its value will be automatically escaped.</li><li><code>args($args)</code> Pass methods parameters as arguments to executable. Argument values</li><li><code>rawArg($arg)</code> Pass the provided string in its raw (as provided) form as an argument to executable.</li><li><code>option($option, $value = null, $separator = null)</code> Pass option to executable. Options are prefixed with <code>--</code> , value can be provided in second parameter.</li><li><code>options(array $options, $separator = null)</code> Pass multiple options to executable. The associative array contains</li><li><code>optionList($option, $value = null, $separator = null)</code> Pass an option with multiple values to executable. Value can be a string or array.</li></ul><h2 id="run" tabindex="-1">Run <a class="header-anchor" href="#run" aria-label="Permalink to &quot;Run&quot;">​</a></h2><p>Performs <code>docker run</code> on a container.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taskDockerRun</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mysql&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> $this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taskDockerRun</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;my_db_image&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;DB&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;database_name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">volume</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/path/to/data&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/data&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">detached</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">publish</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3306</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;my_mysql&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// retrieve container&#39;s cid:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">say</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Running container &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// execute script inside container</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> $this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taskDockerRun</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;db&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;prepare_test_data.sh&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taskDockerCommit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($result)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test_db&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// link containers</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$mysql </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> $this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taskDockerRun</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mysql&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;wp_db&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// important to set name for linked container</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;MYSQL_ROOT_PASSWORD&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;123456&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taskDockerRun</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;wordpress&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($mysql)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">publish</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8080</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">detached</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?&gt;</span></span></code></pre></div><ul><li><code>detached()</code> * <code>return</code> $this</li><li><code>exec($run)</code> * <code>param string|\\Robo\\Contract\\CommandInterface</code> $run</li><li><code>volume($from, $to = null)</code> * <code>param string</code> $from</li><li><code>publish($port = null, $portTo = null)</code> * <code>param null|int</code> $port</li><li><code>containerWorkdir($dir)</code> * <code>param string</code> $dir</li><li><code>user($user)</code> * <code>param string</code> $user</li><li><code>privileged()</code> * <code>return</code> $this</li><li><code>name($name)</code> * <code>param string</code> $name</li><li><code>link($name, $alias)</code> * <code>param string|\\Robo\\Task\\Docker\\Result</code> $name</li><li><code>tmpDir($dir)</code> * <code>param string</code> $dir</li><li><code>getTmpDir()</code> @return string</li><li><code>getUniqId()</code> @return string</li><li><code>setOutput($output)</code> Sets the Console Output.</li><li><code>setProcessInput($input)</code> Pass an input to the process. Can be resource created with fopen() or string</li><li><code>dir($dir)</code> Changes working directory of command</li><li><code>arg($arg)</code> Pass argument to executable. Its value will be automatically escaped.</li><li><code>args($args)</code> Pass methods parameters as arguments to executable. Argument values</li><li><code>rawArg($arg)</code> Pass the provided string in its raw (as provided) form as an argument to executable.</li><li><code>option($option, $value = null, $separator = null)</code> Pass option to executable. Options are prefixed with <code>--</code> , value can be provided in second parameter.</li><li><code>options(array $options, $separator = null)</code> Pass multiple options to executable. The associative array contains</li><li><code>optionList($option, $value = null, $separator = null)</code> Pass an option with multiple values to executable. Value can be a string or array.</li></ul><h2 id="start" tabindex="-1">Start <a class="header-anchor" href="#start" aria-label="Permalink to &quot;Start&quot;">​</a></h2><p>Starts Docker container</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taskDockerStart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($cidOrResult)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?&gt;</span></span></code></pre></div><ul><li><code>setOutput($output)</code> Sets the Console Output.</li><li><code>setProcessInput($input)</code> Pass an input to the process. Can be resource created with fopen() or string</li><li><code>dir($dir)</code> Changes working directory of command</li><li><code>arg($arg)</code> Pass argument to executable. Its value will be automatically escaped.</li><li><code>args($args)</code> Pass methods parameters as arguments to executable. Argument values</li><li><code>rawArg($arg)</code> Pass the provided string in its raw (as provided) form as an argument to executable.</li><li><code>option($option, $value = null, $separator = null)</code> Pass option to executable. Options are prefixed with <code>--</code> , value can be provided in second parameter.</li><li><code>options(array $options, $separator = null)</code> Pass multiple options to executable. The associative array contains</li><li><code>optionList($option, $value = null, $separator = null)</code> Pass an option with multiple values to executable. Value can be a string or array.</li></ul><h2 id="stop" tabindex="-1">Stop <a class="header-anchor" href="#stop" aria-label="Permalink to &quot;Stop&quot;">​</a></h2><p>Stops Docker container</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taskDockerStop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($cidOrResult)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?&gt;</span></span></code></pre></div><ul><li><code>setOutput($output)</code> Sets the Console Output.</li><li><code>setProcessInput($input)</code> Pass an input to the process. Can be resource created with fopen() or string</li><li><code>dir($dir)</code> Changes working directory of command</li><li><code>arg($arg)</code> Pass argument to executable. Its value will be automatically escaped.</li><li><code>args($args)</code> Pass methods parameters as arguments to executable. Argument values</li><li><code>rawArg($arg)</code> Pass the provided string in its raw (as provided) form as an argument to executable.</li><li><code>option($option, $value = null, $separator = null)</code> Pass option to executable. Options are prefixed with <code>--</code> , value can be provided in second parameter.</li><li><code>options(array $options, $separator = null)</code> Pass multiple options to executable. The associative array contains</li><li><code>optionList($option, $value = null, $separator = null)</code> Pass an option with multiple values to executable. Value can be a string or array.</li></ul>`,34)]))}const g=i(n,[["render",l]]);export{c as __pageData,g as default};