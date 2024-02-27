import{_ as c,r as i,o as d,c as p,a as s,b as n,d as e,w as l,e as a}from"./app-DD1UE2QT.js";const r={},u=s("h1",{id:"extending",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#extending"},[s("span",null,"Extending")])],-1),m={href:"https://packagist.org/search/?type=robo-tasks",target:"_blank",rel:"noopener noreferrer"},v=a(`<p>The convention used to add new tasks for use in your RoboFiles is to create a wrapper trait named <code>Tasks</code> in your namespace that instantiates the implementation class for each task. Each task method in the trait should start with the prefix <code>task</code>, and should use <strong>chained method calls</strong> for configuration. Task execution should be triggered by the method <code>run</code>.</p><p>To include additional tasks in your RoboFile, you must <code>use</code> the appropriate <code>Tasks</code> in your RoboFile. See the section <a href="#including-additional-tasks">Including Additional Tasks</a> below. To create your own Robo extension that provides tasks for use in RoboFiles, then you must write your own class that implements TaskInterface, and create a <code>Tasks</code> trait for it as described in the section <a href="#creating-a-robo-extension">Creating a Robo Extension</a>.</p><p>Note: The <code>Tasks</code> traits are called <code>loadTasks</code> in Robo core. This is a legacy name, preserved for backwards compatibility purposes. These traits will all be renamed to <code>Tasks</code> in Robo 2.0.</p><h2 id="including-additional-tasks" tabindex="-1"><a class="header-anchor" href="#including-additional-tasks"><span>Including Additional Tasks</span></a></h2><p>Additional tasks may be installed into projects that have included Robo via Composer. For example:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ cd myproject
$ composer require boedah/robo-drush
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>If any of the tasks you include require external Composer projects themselves, then you must <code>composer require</code> these as well. See the <code>suggests</code> section of Robo&#39;s composer.json file for a list of some projects you might need to require.</p><p>Once the extension you wish to use has been added to your vendor directory, you may then include it from your RoboFile:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">RoboFile</span> <span class="token keyword">extends</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>Robo<span class="token punctuation">\\</span>Tasks</span>
<span class="token punctuation">{</span>
  <span class="token keyword">use</span> <span class="token package">Boedah<span class="token punctuation">\\</span>Robo<span class="token punctuation">\\</span>Task<span class="token punctuation">\\</span>Drush<span class="token punctuation">\\</span>Tasks</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token class-name type-declaration">ConsoleIO</span> <span class="token variable">$io</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once you have done this, all of the tasks defined in the extension you selected will be available for use in your commands.</p>`,10),k={href:"https://github.com/dflydev/dflydev-embedded-composer",target:"_blank",rel:"noopener noreferrer"},h=a(`<h2 id="register-command-files-via-psr-4-autoloading" tabindex="-1"><a class="header-anchor" href="#register-command-files-via-psr-4-autoloading"><span>Register command files via PSR-4 autoloading</span></a></h2><p>You can have your project expose extra Robo command files by providing them within your project&#39;s PSR-4 namespace.</p><p>For example, given the following PSR-4 namespace in your <code>composer.json</code>:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;autoload&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;psr-4&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;MyProject\\\\&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./src/&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Extra command files can be exposed by creating one or more classes under <code>./src/Robo/Plugin/Commands</code>, as shown in the example below:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">MyProject<span class="token punctuation">\\</span>Robo<span class="token punctuation">\\</span>Plugin<span class="token punctuation">\\</span>Commands</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Robo<span class="token punctuation">\\</span>Symfony<span class="token punctuation">\\</span>ConsoleIO</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCustomCommands</span> <span class="token keyword">extends</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>Robo<span class="token punctuation">\\</span>Tasks</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@command</span> my-project:command-one
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">commandOne</span><span class="token punctuation">(</span><span class="token class-name type-declaration">ConsoleIO</span> <span class="token variable">$io</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@command</span> my-project:command-two
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">commandTwo</span><span class="token punctuation">(</span><span class="token class-name type-declaration">ConsoleIO</span> <span class="token variable">$io</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Please note: command files classes must be placed under <code>Robo/Plugin/Commands</code> relative namespace and their name must end in <code>Command.php</code> or <code>Commands.php</code>.</p><p>You can now access your new commands via Robo:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ ./vendor/bin/robo
$ ./robo
Robo 1.2.2-dev

Usage:
  command [options] [arguments]
...

Available commands:
  help                  Displays help for a command
  list                  Lists commands
 my-project
  my-project:command-one
  my-project:command-two
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="creating-a-robo-extension" tabindex="-1"><a class="header-anchor" href="#creating-a-robo-extension"><span>Creating a Robo Extension</span></a></h2>`,10),b=s("code",null,"robo-tasks",-1),g={href:"https://packagist.org/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://knpuniversity.com/screencast/question-answer-day/create-composer-package",target:"_blank",rel:"noopener noreferrer"},y=a(`<h3 id="create-your-composer-json-file" tabindex="-1"><a class="header-anchor" href="#create-your-composer-json-file"><span>Create your composer.json File</span></a></h3><p>Your composer.json file should look something like the example below:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
    &quot;name&quot;: &quot;boedah/robo-drush&quot;,
    &quot;description&quot;: &quot;Drush CommandStack for Robo Task Runner&quot;,
    &quot;type&quot;: &quot;robo-tasks&quot;,
    &quot;autoload&quot;: {
        &quot;psr-4&quot;: {
            &quot;Boedah\\\\Robo\\\\Task\\\\Drush\\\\&quot;: &quot;src&quot;
        }
    },
    &quot;require&quot;: {
        &quot;php&quot;: &quot;&gt;=5.5.0&quot;,
        &quot;consolidation/robo&quot;: &quot;~1&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Customize the name and autoload paths as necessary, and add any additional required projects needed by the tasks that your extensions will provide. The type of your project should always be <code>robo-tasks</code>. Robo only supports php &gt;= 5.5.0; you may require a higher version of php if necessary.</p><h3 id="create-the-tasks-php-trait" tabindex="-1"><a class="header-anchor" href="#create-the-tasks-php-trait"><span>Create the Tasks.php Trait</span></a></h3><p>It is recommended to place your trait-loading task in a <code>Tasks</code> file in the same namespace as the task implementation.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>namespace Boedah\\Robo\\Task\\Drush;

trait Tasks
{
    /**
     * @param string $pathToDrush
     * @return DrushStack
     */
    protected function taskDrushStack($pathToDrush = &#39;drush&#39;)
    {
        return $this-&gt;task(__FUNCTION__, $pathToDrush);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that the name of the service for a given task must start with the word &quot;task&quot;, and must have the same name as the function used to call the task. <code>$this-&gt;task()</code> looks up the service by name; using the PHP built-in constant <strong>FUNCTION</strong> for this parameter ensures that the names of these items remain in alignment.</p><h3 id="task-implementation" tabindex="-1"><a class="header-anchor" href="#task-implementation"><span>Task implementation</span></a></h3>`,9),x=s("code",null,"run()",-1),T=a(`<p>There are many examples of task implementations in the Robo\\Task namespace. A very basic task example is provided below. The namespace is <code>MyAssetTasks</code>, and the example task is <code>CompileAssets</code>. To customize to your purposes, choose an appropriate namespace, and then define as many tasks as you need.</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">MyAssetTasks</span><span class="token punctuation">;</span>

<span class="token keyword">trait</span> <span class="token class-name-definition class-name">Tasks</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Example task to compile assets
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">string</span></span> <span class="token parameter">$pathToCompileAssets</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>MyAssetTasks<span class="token punctuation">\\</span>CompileAssets</span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">taskCompileAssets</span><span class="token punctuation">(</span><span class="token variable">$path</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Always construct your tasks with the \`task()\` task builder.</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token class-name static-context">CompileAssets</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token variable">$path</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">CompileAssets</span> <span class="token keyword">implements</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>Robo<span class="token punctuation">\\</span>Contract<span class="token punctuation">\\</span>TaskInterface</span>
<span class="token punctuation">{</span>
    <span class="token comment">// configuration params</span>
    <span class="token keyword">protected</span> <span class="token variable">$path</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token variable">$to</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$path</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">path</span> <span class="token operator">=</span> <span class="token variable">$path</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function-definition function">to</span><span class="token punctuation">(</span><span class="token variable">$filename</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">to</span> <span class="token operator">=</span> <span class="token variable">$filename</span><span class="token punctuation">;</span>
        <span class="token comment">// must return $this</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// must implement Run</span>
    <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//....</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To use the tasks you define in a RoboFile, use its <code>Tasks</code> trait as explained in the section <a href="#including-additional-tasks">Including Additional Tasks</a>, above.</p><h3 id="taskio" tabindex="-1"><a class="header-anchor" href="#taskio"><span>TaskIO</span></a></h3><p>To allow tasks access IO, use the <code>Robo\\Common\\TaskIO</code> trait, or inherit your task class from <code>Robo\\Task\\BaseTask</code> (recommended).</p><p>Inside tasks you should print process details with <code>printTaskInfo</code>, <code>printTaskSuccess</code>, and <code>printTaskError</code>.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$this-&gt;printTaskInfo(&#39;Processing...&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The Task IO methods send all output through a PSR-3 logger. Tasks should use task IO exclusively; methods such as &#39;say&#39; and &#39;ask&#39; should reside in the command method. This allows tasks to be usable in any context that has a PSR-3 logger, including background or server processes where it is not possible to directly query the user.</p><h3 id="tasks-that-use-tasks" tabindex="-1"><a class="header-anchor" href="#tasks-that-use-tasks"><span>Tasks That Use Tasks</span></a></h3>`,9),w=s("code",null,"CollectionBuilder",-1),R=a(`<p>To obtain access to a <code>CollectionBuilder</code>, a task should implement <code>BuilderAwareInterface</code> and use <code>BuilderAwareTrait</code>. It will then have access to a collection builder via the <code>$this-&gt;collectionBuilder()</code> method.</p><h3 id="testing-extensions" tabindex="-1"><a class="header-anchor" href="#testing-extensions"><span>Testing Extensions</span></a></h3><p>If you wish to use the <code>task()</code> methods from your <code>Tasks</code> trait in your unit tests, it is necessary to also use the Robo <code>TaskAccessor</code> trait, and define a <code>collectionBuilder()</code> method to provide a builder. Collection builders are used to initialize all Robo tasks. The easiest way to get a usable collection builder in your tests is to initialize Robo&#39;s default dependency injection container, and use it to request a new builder.</p><p>An example of how to do this in a PHPUnit test is shown below.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>use League\\Container\\ContainerAwareInterface;
use League\\Container\\ContainerAwareTrait;
use Symfony\\Component\\Console\\Output\\NullOutput;
use Robo\\TaskAccessor;
use Robo\\Robo;
use Robo\\Collection\\CollectionBuilder;

class DrushStackTest extends \\PHPUnit_Framework_TestCase implements ContainerAwareInterface
{
    use \\Boedah\\Robo\\Task\\Drush\\Tasks;
    use TaskAccessor;
    use ContainerAwareTrait;

    // Set up the Robo container so that we can create tasks in our tests.
    function setup()
    {
        $container = Robo::createDefaultContainer(null, new NullOutput());
        $this-&gt;setContainer($container);
    }

    // Scaffold the collection builder
    public function collectionBuilder()
    {
        $emptyRobofile = new \\Robo\\Tasks;
        return CollectionBuilder::create($this-&gt;getContainer(), $emptyRobofile);
    }

    public function testYesIsAssumed()
    {
        $command = $this-&gt;taskDrushStack()
            -&gt;drush(&#39;command&#39;)
            -&gt;getCommand();
        $this-&gt;assertEquals(&#39;drush command -y&#39;, $command);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To assert that the output of a command contains some value, use a <code>Symfony\\Component\\Console\\Output\\BufferedOutput</code> in place of null output when calling Robo::createDefaultContainer().</p>`,6);function C(_,q){const t=i("ExternalLinkIcon"),o=i("RouteLink");return d(),p("div",null,[u,s("p",null,[n("Robo tasks can be added to your Robo application by using Composer to suppliment the set of built-in tasks that Robo provides by default. To find existing Robo task extensions, search in Packagist for projects of type "),s("a",m,[n("robo-tasks"),e(t)]),n(".")]),v,s("p",null,[n("Note that at the moment, it is not possible to extend Robo when using the robo.phar. This capability may be added in the future via "),s("a",k,[n("embedded composer"),e(t)]),n(".")]),h,s("p",null,[n("A Robo tasks extension is created by advertising a Composer package of type "),b,n(" on "),s("a",g,[n("Packagist"),e(t)]),n(". For an overview on how this is done, see the article "),s("a",f,[n("Creating your very own Composer Package"),e(t)]),n(". Specific instructions for creating Robo task extensions are provided below.")]),y,s("p",null,[n("The implementation of each task class should extend \\Robo\\Task\\BaseTask, or some class that extends the same, and should used chained initializer methods and defer all operations that alter the state of the system until its "),x,n(" method. If you follow these patterns, then your task extensions will be usable via Robo collection builders, as explained in the "),e(o,{to:"/docs/collections.html"},{default:l(()=>[n("collections")]),_:1}),n(" documentation.")]),T,s("p",null,[n("If one task implementation needs to use other tasks while it is running, it should do so via a "),w,n(" object, as explained in the "),e(o,{to:"/docs/collections.html"},{default:l(()=>[n("Collections")]),_:1}),n(" documentation.")]),R])}const I=c(r,[["render",C],["__file","extending.html.vue"]]),j=JSON.parse('{"path":"/docs/extending.html","title":"Extending","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Including Additional Tasks","slug":"including-additional-tasks","link":"#including-additional-tasks","children":[]},{"level":2,"title":"Register command files via PSR-4 autoloading","slug":"register-command-files-via-psr-4-autoloading","link":"#register-command-files-via-psr-4-autoloading","children":[]},{"level":2,"title":"Creating a Robo Extension","slug":"creating-a-robo-extension","link":"#creating-a-robo-extension","children":[{"level":3,"title":"Create your composer.json File","slug":"create-your-composer-json-file","link":"#create-your-composer-json-file","children":[]},{"level":3,"title":"Create the Tasks.php Trait","slug":"create-the-tasks-php-trait","link":"#create-the-tasks-php-trait","children":[]},{"level":3,"title":"Task implementation","slug":"task-implementation","link":"#task-implementation","children":[]},{"level":3,"title":"TaskIO","slug":"taskio","link":"#taskio","children":[]},{"level":3,"title":"Tasks That Use Tasks","slug":"tasks-that-use-tasks","link":"#tasks-that-use-tasks","children":[]},{"level":3,"title":"Testing Extensions","slug":"testing-extensions","link":"#testing-extensions","children":[]}]}],"git":{"updatedTime":1709072981000},"filePathRelative":"docs/extending.md"}');export{I as comp,j as data};
