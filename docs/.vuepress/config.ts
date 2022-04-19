import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // site config
    base: '/website/',

    // site-level locales config
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Robo',
            description: 'Modern and simple PHP task runner',

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

        logo: '/images/logotype.png',

        navbar: [
            {
                text: 'Robo Documentation',
                children: [
                    '/docs/getting-started.md',
                    '/docs/collections.md',
                    '/docs/extending.md',
                    '/docs/framework.md',
                ],
            },
            {
                text: 'Tasks',
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
        sidebar: {
            '/docs/': [
                {
                    text: 'Robo Documentation',
                    collapsible: false,
                    children: [
                        '/docs/getting-started.md',
                        '/docs/collections.md',
                        '/docs/extending.md',
                        '/docs/framework.md',
                    ],
                },
                {
                    text: 'Tasks',
                    collapsible: false,
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