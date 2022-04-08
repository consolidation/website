import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'


const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
    // site config
    base: '/',

    // site-level locales config
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Robo',
            description: 'Vue-powered Static Site Generator',

        },

    },

    bundler:
    // specify bundler via environment variable
        process.env.DOCS_BUNDLER ??
        // use vite by default
        '@vuepress/vite',

    themeConfig: {

        repo: 'consolidation/robo',

        docsDir: 'docs',

        logo: 'https://vuejs.org/images/logo.png',

        themePlugins: {
            // only enable git plugin in production mode
            git: isProd,
            // use shiki plugin in production mode instead
            prismjs: !isProd,
        },
        navbar: [
            // nested group - max depth is 2
            {
                text: 'Group',
                children: [
                    {
                        text: 'SubGroup',
                        children: ['/group/sub/foo.md', '/group/sub/bar.md'],
                    },
                ],
            },
            // control when should the item be active
            {
                text: 'Group 2',
                children: [
                    {
                        text: 'Always active',
                        link: '/',
                        // this item will always be active
                        activeMatch: '/',
                    },
                    {
                        text: 'Active on /foo/',
                        link: '/not-foo/',
                        // this item will be active when current route path starts with /foo/
                        // regular expression is supported
                        activeMatch: '^/foo/',
                    },
                ],
            },
        ],
        sidebar: {
            '/docs/': [
                {
                    text: 'Robo Documentation',
                    collapsible: true,
                    children: [
                        '/docs/getting-started.md',
                        '/docs/collections.md',
                        '/docs/extending.md',
                        '/docs/framework.md',
                        '/docs/getting-started.md',
                    ],
                },
                {
                    text: 'Tasks',
                    collapsible: true,
                    children: [
                        '/docs/tasks/ApiGen.md',
                        '/docs/tasks/Archive.md',
                        '/docs/tasks/Assets.md',
                        '/docs/tasks/Base.md',
                        '/docs/tasks/Bower.md',
                        '/docs/tasks/Composer.md',
                        '/docs/tasks/Development.md',
                        '/docs/tasks/Docker.md',
                        '/docs/tasks/File.md',
                        '/docs/tasks/Filesystem.md',
                        '/docs/tasks/Gulp.md',
                        '/docs/tasks/Logfile.md',
                        '/docs/tasks/Npm.md',
                        '/docs/tasks/Remote.md',
                        '/docs/tasks/Testing.md',
                        '/docs/tasks/Vcs.md',
                    ],
                },
            ],
        },

    },
})