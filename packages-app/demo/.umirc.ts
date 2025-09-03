import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'demo',
  },
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      name: '首页',
      path: '/index',
      component: './index',
    },
    {
      name: '演示',
      path: '/docs',
      component: './docs',
    }
  ],
  npmClient: 'pnpm',
});
