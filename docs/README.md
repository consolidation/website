---
home: true
title: Home
actions:
- text: Get Started
  link: /docs/index.html

heroImage: /images/robo-logo.svg
footerHtml: true
footer: Brought to you by <a href="https://github.com/orgs/consolidation/people">Consolidation Team</a> and our <a href="https://github.com/consolidation/Robo/graphs/contributors">awesome contributors</a> <p>Robo is on <a href="https://twitter.com/robo_php">Twitter</a> and on <a href="https://github.com/consolidation/robo">GitHub</a></p> Projects Using It<span>:</span> <a href="http://codeception.com">Codeception</a> | <a href="http://www.drush.org">Drush</a> | <a href="https://github.com/Codeception/AspectMock">AspectMock</a> | <a href="https://github.com/pantheon-systems/terminus">Pantheon Terminus</a> | <a href="https://github.com/Codeception/CodeceptJS">CodeceptJS</a>
---

## Inspired by Gulp and Rake aimed to automate common tasks:

* writing cross-platform scripts
* processing assets (less, sass, minification)
* running tests
* executing daemons (and workers)
* watching filesystem changes
* deployment with sftp/ssh/docker

## Installing

### Phar

[Download robo.phar >](https://robo.li/robo.phar)

```
wget https://robo.li/robo.phar
```

To install globally put `robo.phar` in `/usr/bin`. (`/usr/local/bin/` in OSX 10.11+)

```
chmod +x robo.phar && sudo mv robo.phar /usr/bin/robo
```

OSX 10.11+
```
chmod +x robo.phar && sudo mv robo.phar /usr/local/bin/robo
```

Now you can use it simply via `robo`.

### Composer

* Run `composer require consolidation/robo:^3`
* Use `vendor/bin/robo` to execute Robo tasks.

## Usage

All tasks are defined as **public methods** in `RoboFile.php`. It can be created by running `robo init`.
All protected methods in traits that start with `task` prefix are tasks and can be configured and executed in your tasks.

## Examples

The best way to learn Robo by example is to take a look into [its own RoboFile](https://github.com/consolidation/Robo/blob/2.x/RoboFile.php)
or [RoboFile of Codeception project](https://github.com/Codeception/Codeception/blob/2.4/RoboFile.php). There are also some basic example commands in `examples/RoboFile.php`.

Here are some snippets from them:

---

Run acceptance test with local server and selenium server started.


``` php
<?php

use Robo\Symfony\ConsoleIO;

class RoboFile extends \Robo\Tasks
{

    function testAcceptance(ConsoleIO $io, $seleniumPath = '~/selenium-server-standalone-2.39.0.jar')
    {
       // launches PHP server on port 8000 for web dir
       // server will be executed in background and stopped in the end
       $this->collectionBuilder($io)->taskServer(8000)
            ->background()
            ->dir('web')
            ->run();

       // running Selenium server in background
       $this->collectionBuilder($io)->taskExec('java -jar ' . $seleniumPath)
            ->background()
            ->run();

       // loading Symfony Command and running with passed argument
       $this->collectionBuilder($io)->taskSymfonyCommand(new \Codeception\Command\Run('run'))
            ->arg('suite','acceptance')
            ->run();
    }
}
```

If you execute `robo` you will see this task added to list of available task with name: `test:acceptance`.
To execute it you should run `robo test:acceptance`. You may change path to selenium server by passing new path as a argument:

```
robo test:acceptance "C:\Downloads\selenium.jar"
```

Using `watch` task so you can use it for running tests or building assets.

``` php
<?php
class RoboFile extends \Robo\Tasks {

    function watchComposer(ConsoleIO $io)
    {
        // when composer.json changes `composer update` will be executed
        $this->collectionBuilder($io)->taskWatch()->monitor('composer.json', function() {
            $this->collectionBuilder($io)->taskComposerUpdate()->run();
        })->run();
    }
}
```

---

Cleaning logs and cache

``` php
<?php
class RoboFile extends \Robo\Tasks
{
    public function clean(ConsoleIO $io)
    {
        $this->collectionBuilder($io)->taskCleanDir([
            'app/cache',
            'app/logs'
        ])->run();

        $this->collectionBuilder($io)->taskDeleteDir([
            'web/assets/tmp_uploads',
        ])->run();
    }
}
```

This task cleans `app/cache` and `app/logs` dirs (ignoring .gitignore and .gitkeep files)
Can be executed by running:

```
robo clean
```

----

Creating Phar archive

``` php
function buildPhar(collectionBuilder $io)
{
    $files = Finder::create()->ignoreVCS(true)->files()->name('*.php')->in(__DIR__);
    $packer = $this->collectionBuilder($io)->taskPackPhar('robo.phar');
    foreach ($files as $file) {
        $packer->addFile($file->getRelativePathname(), $file->getRealPath());
    }
    $packer->addFile('robo','robo')
        ->executable('robo')
        ->run();
}
```

---

## We need more tasks!

Create your own tasks and send them as Pull Requests or create packages [with `"type": "robo-tasks"` in `composer.json` on Packagist](https://packagist.org/?type=robo-tasks).

## Credits

Follow [@robo_php](https://twitter.com/robo_php) for updates.

Brought to you by [Consolidation Team](https://github.com/orgs/consolidation/people) and our [awesome contributors](https://github.com/consolidation/Robo/graphs/contributors).
