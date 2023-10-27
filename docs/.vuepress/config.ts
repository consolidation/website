import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

module.exports = {

    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' }],
        ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/favicons/site.webmanifest' }],
        ['link', { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#ffffff' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['meta', { name: 'msapplication-config', content: '/favicons/browserconfig.xml' }],
    ],

    // site config
    base: '/',

    // site-level locales config
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Robo',
            description: 'Modern and simple PHP task runner',

        },

    },

    theme: defaultTheme({
        // default theme config
        repo: 'consolidation/robo',

        docsBranch: '4.x',

        docsDir: '',

        logo: '/images/robo-logo.svg',

        contributors: false,

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
            {
                text: 'Changelog',
                link: 'https://github.com/consolidation/robo/blob/4.x/CHANGELOG.md',
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
    }),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search',
                },
            },
        }),
    ],
}
