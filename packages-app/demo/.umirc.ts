import {
  defineConfig
} from "@umijs/max";

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: "demo"
  },
  proxy: {
    "/api": {
      target: "http://localhost:3000",
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    }
  },
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
