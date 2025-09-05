import request from "@micro-umi/axios";

import {
  IDataUserInfo
} from "../types";

/**
 * 获取用户信息
 */
export default function dataUserInfo(): Promise<IDataUserInfo> {
  return request.get<IDataUserInfo>("/api/data-user-info");
}
