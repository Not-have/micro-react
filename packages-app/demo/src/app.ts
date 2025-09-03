// 运行时配置
import "./app.css";

// 抑制 findDOMNode 弃用警告（临时解决方案）
if (process.env.NODE_ENV === "development") {
  const originalError = console.error;

  console.error = (...args) => {
    if (typeof args[0] === "string" && args[0].includes("findDOMNode is deprecated")) {
      return;
    }

    originalError.call(console, ...args);
  };
}

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return {
    name: "demo"
  };
}

export const layout = () => ({
  logo: "https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg",
  menu: {
    locale: false
  }
});
