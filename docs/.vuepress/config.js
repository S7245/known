const { defaultTheme } = require('vuepress')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')

module.exports = {
    lang: 'zh-CN',
    title: '知识图谱',
    port: '8087',
    base: "/known/",
    description: "知识图谱",

    plugins: [
        backToTopPlugin(),
        mediumZoomPlugin(),
        nprogressPlugin(),
    ],

    markdown: {
        lineNumbers: true,
    },

    theme: defaultTheme({
        logo: '/favicon.png',
        navbar: navbarFun(),
        sidebar: sidebarFun(),
    }),
}

/* 顶部导航栏 */
function navbarFun() {
    return [
        { text: '首页', link: '/' },
        { text: '营销学', link: '/marketing/' },
        { text: '商业学', link: '/bp/' },
        { text: '技能树', link: '/tree/' },
    ];
}

/* 侧边菜单栏 */
function sidebarFun() {
    return {
        '/tree/': [
            '/tree/swim.md'
        ]
    };
}