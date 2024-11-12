import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'React Notes',
  tagline: 'React 技术栈学习笔记 📒 React 18/16 相关的方方面面',
  // favicon: 'img/favicon.ico',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://yincw.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/share/',
  // baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yincw', // Usually your GitHub org/user name.
  projectName: 'yincw.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  // trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
    // locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/yincw/share/',
          // routeBasePath: '/', // 文档模式下，本地搜索无法使用
        },
        // blog: false, // 文档模式
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/yincw/share/',
          blogSidebarTitle: '最近的帖子',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    '@docusaurus/theme-live-codeblock',
    ['@easyops-cn/docusaurus-search-local', ({
      hashed: true,
      language: ["zh", "en"],
    })],
  ],
  themeConfig: {
    navbar: {
      hideOnScroll: true, // 导航栏：向下滚动隐藏导航栏，向上滚动显示
      logo: {
        alt: 'logo',
        src: 'img/logo.svg',
      },
      title: 'React Notes',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          // to: '/guide', 
          label: '教程', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'componentsSidebar',
          // to: '/components', 
          label: '组件库', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          // to: '/api', 
          label: 'API', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'faqSidebar',
          // to: '/faq', 
          label: '场景问题', position: 'left'},
        { to: '/blog', label: '博客', position: 'left'},
        
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          to: '/tutorial',
          label: 'Docusaurus',
          position: 'right',
        },
        // {
        //   type: 'dropdown',
        //   label: 'Community',
        //   items: [
        //     {
        //       label: 'Facebook',
        //       href: 'https://www.facebook.com',
        //     },
        //     {
        //       label: 'Facebook',
        //       href: 'https://www.facebook.com',
        //     },
        //     {
        //       label: 'Facebook',
        //       href: 'https://www.facebook.com',
        //     },
        //   ],
        //   position: 'right',
        // },
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'right',
        // },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
        {
          href: 'https://github.com/yincw/share/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true, // 侧边栏：是否显示 隐藏侧边栏菜单按钮
        // autoCollapseCategories: true, // 侧边栏：是否 自动折叠菜单栏
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '教程',
          items: [
            {
              label: 'React 教程',
              to: '/share/docs/guide/intro/',
            },
            {
              label: 'Vue 教程',
              href: 'https://yincw.github.io/vue-notes/guide/00-intro/',
            },
            {
              label: 'JavaScript 教程',
              href: 'https://vikexia.com/JavaScript/Data_Structures?type=Object',
            },
          ],
        },
        {
          title: 'API',
          items: [
            {
              label: 'React',
              to: '/share/docs/api/web/react/',
            },
            {
              label: 'Taro',
              to: '/share/docs/api/miniprogram/',
            },
            {
              label: 'React Native',
              to: '/share/docs/api/app/',
            },
            {
              label: 'Electron',
              to: '/share/docs/api/desktop/',
            },
          ],
        },
        {
          title: '开源库',
          items: [
            {
              label: 'Dora',
              href: 'https://yincw.github.io/dora/',
            },
            {
              label: 'Rework',
              href: 'https://yincw.github.io/rework/',
            },
            {
              label: 'Anole UI',
              href: 'https://yincw.github.io/anole-ui/',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '前后端交互规范',
              href: 'https://yincw.github.io/api/',
            },
            {
              label: 'Docusaurus',
              href: 'https://yincw.github.io/rework/',
            },
            {
              label: 'Dumi',
              href: 'https://yincw.github.io/anole-ui/',
            },
            {
              label: 'VitePress',
              href: 'https://yincw.github.io/',
            },
            {
              label: 'TypeDoc',
              href: 'https://github.com/yincw/dora/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/yincw',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} @yincw, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      // magicComments: [
      //   {
      //     className: 'theme-code-block-highlighted-line',
      //     line: 'highlight-next-line',
      //     block: {start: 'highlight-start', end: 'highlight-end'},
      //   },
      //   {
      //     className: 'code-block-error-line',
      //     line: 'This will error',
      //   },
      // ]
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
