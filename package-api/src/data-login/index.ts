import request from "@micro-umi/axios";

import {
  IParamsDataLogin,
  IDataLogin
} from "../types";

export default function dataLogin(params: IParamsDataLogin): Promise<IDataLogin> {
  return request.post("/api/data-login", params);
}
