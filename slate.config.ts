/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'zh-CN',
  site: 'https://jichangtuijian.bid/',
  avatar: '/avatar.png',
  title: '机场推荐',
  description: '2025便宜稳定好用性价比机场推荐',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2025 机场推荐',
  },
  socialLinks: [
    {
      icon: 'telegram',
      link: 'https://t.me/jichang360'
    },
]
});