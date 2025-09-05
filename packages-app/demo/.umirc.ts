import {
  defineConfig
} from "@umijs/max";

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  mock: {}, // 启用 mock 功能
  layout: {
    title: "demo"
  },
  esbuildMinifyIIFE: true, // 修复 esbuild 辅助函数冲突

  // 移除代理配置，使用 UmiJS 内置的 mock 功能
  // proxy: {
  //   "/api": {
  //     target: "http://localhost:3000",
  //     changeOrigin: true,
  //     pathRewrite: {
  //       "^/api": ""
  //     }
  //   }
  // },
  routes: [
    {
      path: "/login",
      name: "登录",
      component: "./login",
      layout: false
    },
    {
      path: "/",
      redirect: "/index"
    },
    {
      name: "首页",
      path: "/index",
      component: "./index"
    },
    {
      name: "演示",
      path: "/docs",
      component: "./docs"
    }
  ],
  npmClient: "pnpm"
});
