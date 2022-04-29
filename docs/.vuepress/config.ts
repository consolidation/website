const { defaultTheme } = require('vuepress')

module.exports = {

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
