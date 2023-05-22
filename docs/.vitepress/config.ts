import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kawaii UI Component",
  description: "Kawaii UI Component Library.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/button' }
    ],

    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Card', link: '/components/card' },
          { text: 'Trasition', link: '/components/Transition' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/keiko233/kawaii-ui' }
    ]
  }
})
