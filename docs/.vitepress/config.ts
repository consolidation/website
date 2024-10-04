export default ({
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

    lang: 'en-US',

    title: 'Robo',

    description: 'Modern and simple PHP task runner',

    themeConfig: {

        logo: 'images/robo-logo.svg',

        socialLinks: [
            { icon: 'github', link: 'https://github.com/consolidation/robo' },
        ],

        search: {
            provider: 'local',
            options: {
                miniSearch: {
                    /**
                     * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
                     */
                    options: {
                        /* ... */
                    },
                    /**
                     * @type {import('minisearch').SearchOptions}
                     * @default
                     * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
                     */
                    searchOptions: {
                        /* ... */
                    }
                }
            }
        },

        nav: [
            {
                text: 'Robo Documentation',
                items: [
                    { text: "Getting Started", link: "/getting-started.md" },
                    { text: "Collection", link: "/collections.md" },
                    { text: "Extending", link: "/extending.md" },
                    { text: "Robo as a Framework", link: "/framework.md" },
                ],
            },
            {
                text: 'Tasks',
                items: [
                    { text: "ApiGen", link: "/tasks/ApiGen.md" },
                    { text: "Archive", link: "/tasks/Archive.md" },
                    { text: "Assets", link: "/tasks/Assets.md" },
                    { text: "Base", link: "/tasks/Base.md" },
                    { text: "Bower", link: "/tasks/Bower.md" },
                    { text: "Composer", link: "/tasks/Composer.md" },
                    { text: "Development", link: "/tasks/Development.md" },
                    { text: "Docker", link: "/tasks/Docker.md" },
                    { text: "File", link: "/tasks/File.md" },
                    { text: "Filesystem", link: "/tasks/Filesystem.md" },
                    { text: "Gulp", link: "/tasks/Gulp.md" },
                    { text: "Logfile", link: "/tasks/Logfile.md" },
                    { text: "Npm", link: "/tasks/Npm.md" },
                    { text: "Remote", link: "/tasks/Remote.md" },
                    { text: "Testing", link: "/tasks/Testing.md" },
                    { text: "Vcs", link: "/tasks/Vcs.md" },
                ],
            },
            {
                text: 'Changelog',
                link: 'https://github.com/consolidation/robo/blob/4.x/CHANGELOG.md',
            },
        ],
        sidebar: [
            {
                text: 'Robo Documentation',
                items: [
                    { text: "Getting Started", link: "/getting-started.md" },
                    { text: "Collection", link: "/collections.md" },
                    { text: "Extending", link: "/extending.md" },
                    { text: "Robo as a Framework", link: "/framework.md" },
                ],
            },
            {
                text: 'Tasks',
                items: [
                    { text: "ApiGen", link: "/tasks/ApiGen.md" },
                    { text: "Archive", link: "/tasks/Archive.md" },
                    { text: "Assets", link: "/tasks/Assets.md" },
                    { text: "Base", link: "/tasks/Base.md" },
                    { text: "Bower", link: "/tasks/Bower.md" },
                    { text: "Composer", link: "/tasks/Composer.md" },
                    { text: "Development", link: "/tasks/Development.md" },
                    { text: "Docker", link: "/tasks/Docker.md" },
                    { text: "File", link: "/tasks/File.md" },
                    { text: "Filesystem", link: "/tasks/Filesystem.md" },
                    { text: "Gulp", link: "/tasks/Gulp.md" },
                    { text: "Logfile", link: "/tasks/Logfile.md" },
                    { text: "Npm", link: "/tasks/Npm.md" },
                    { text: "Remote", link: "/tasks/Remote.md" },
                    { text: "Testing", link: "/tasks/Testing.md" },
                    { text: "Vcs", link: "/tasks/Vcs.md" },
                ],
            },
        ],
        footer: {
            copyright: 'Brought to you by <a href="https://github.com/orgs/consolidation/people">Consolidation Team</a> and our <a href="https://github.com/consolidation/Robo/graphs/contributors">awesome contributors</a> <p>Robo is on <a href="https://twitter.com/robo_php">Twitter</a> and on <a href="https://github.com/consolidation/robo">GitHub</a></p> Projects Using It<span>:</span> <a href="http://codeception.com">Codeception</a> | <a href="http://www.drush.org">Drush</a> | <a href="https://github.com/Codeception/AspectMock">AspectMock</a> | <a href="https://github.com/pantheon-systems/terminus">Pantheon Terminus</a> | <a href="https://github.com/Codeception/CodeceptJS">CodeceptJS</a>'
        },
    },
})
