import { defineConfig } from 'vitepress'
import { getPosts } from './theme/serverUtils'


//每页的文章数量
const pageSize = 10

export default defineConfig({
    title: 'Today',
    base: '/',
    outDir: 'dist',
    cacheDir: './node_modules/vitepress_cache',
    description: 'vitepress,blog,blog-theme',
    ignoreDeadLinks: true,
    head: [
        ['link', { rel: 'icon', type: 'image/*', href: '/favicon.svg' }],
        [
            'script',
            { defer: '', src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "5d1014e67a9c4a1a82bdb180c4f8f008"}' }
        ],

    ],
    sitemap: {
        hostname: 'https://blog.wflixu.cn',
        lastmodDateOnly: false
    },
    themeConfig: {
        posts: await getPosts(pageSize),
        website: 'https://github.com/wflixu/nblog', //copyright link
        // 评论的仓库地址
        comment: {
            repo: 'wflixu/nblog',
            themes: 'github-light',
            issueTerm: 'pathname'
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Category', link: '/pages/category' },
            { text: 'Archives', link: '/pages/archives' },
            { text: 'Tags', link: '/pages/tags' },
            { text: 'About', link: '/pages/about' }
        ],
        search: {
            provider: 'local',
        },
        //outline:[2,3],
        outline: {
            label: '文章摘要'
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/wflixu/nblog' }]
    } as any,
    srcExclude: ['README.md'], // exclude the README.md , needn't to compiler
    vite: {
        //build: { minify: false }
        server: { port: 5000 },
    }
    /*
      optimizeDeps: {
          keepNames: true
      }
      */
})
