import {
  dataUserInfo,
  DataUserInfo
} from "@micro-umi/api";
import {
  LocalToken
} from "@micro-umi/enum";

import {
  Router
} from "./enum";

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
// 获取
export async function getInitialState(): Promise<DataUserInfo | undefined> {

  // 修复：History 类型上不存在 location 属性，且移除不允许的 console.log
  // 如果需要 location，可以通过 window.location 获取
  const {
    pathname
  } = location;

  const token = localStorage.getItem(LocalToken.TOKEN);

  if(!token && pathname !== Router.LOGIN) {
    window.location.href = `${Router.LOGIN}?redirect=${pathname}`;

    return;
  }

  if(token && pathname === Router.LOGIN) {
    window.location.href = Router.ROOT;
  }

  if(!token) {
    return;
  }

  const userInfo = await dataUserInfo();

  return userInfo;
}

export const layout = () => ({
  logo: "https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg",
  menu: {
    locale: false
  },
  layout: "mix"
});
