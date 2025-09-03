import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '1111',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './index',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './docs',
    }
  ],
  npmClient: 'pnpm',
});
