const { defaultTheme } = require('vuepress')

module.exports = {

    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/website/favicons/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/website/favicons/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/website/favicons/favicon-16x16.png' }],
        ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/website/favicons/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/website/favicons/site.webmanifest' }],
        ['link', { rel: 'mask-icon', href: '/website/favicons/safari-pinned-tab.svg', color: '#ffffff' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['meta', { name: 'msapplication-config', content: '/website/favicons/browserconfig.xml' }],
    ],

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

    theme: defaultTheme({
        // default theme config
        repo: 'consolidation/robo',

        docsBranch: '3.x',

        docsDir: '',

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
    }),
}
