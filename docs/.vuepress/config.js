import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
//import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig ({
  /*lang: 'zh-CN',
  title: 'XYR的笔记本',
  description: '这是我的第一个 VuePress 站点',*/
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'XYR的笔记本',
      description: '笔记本',
    },
  },
  plugins: [
    searchPlugin({
      //配置项
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
  theme: defaultTheme({
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      // SidebarItem
      {
        text: 'BOOK',
        link: '/',
        children: [
          // SidebarItem
          /*{
            text: 'github',
            link: 'https://github.com',
            children: [],
          },*/
          {
            text: 'CPP',
            link: '/book/cpp/lineList.md',
            children: ['/book/cpp/lineList.md'],
          },
        
           {
            text: 'java',
             link: '/book/java/SET/set.md',
             children: [
               {
                 text: '集合',
                 link: '/book/java/SET/set.md',
                 children: ['/book/java/SET/ArrayList.md',
                   '/book/java/SET/LinkedList.md', '/book/java/SET/equals.md', 
                   '/book/java/SET/HashSet.md', '/book/java/SET/HashMap.md', 
                   '/book/java/SET/Queue.md', '/book/java/SET/Deque.md',
                   '/book/java/SET/Stack.md',
                   '/book/java/SET/Iterator.md', '/book/java/SET/Collections.md',],
               },
               '/book/java/Object.md',
            ],
          }
        ],
      },
   
    ],
  }),
})
