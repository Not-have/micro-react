import request from "@micro-umi/axios";

import {
  IDataRefreshToken
} from "../types";

export default function dataRefreshToken(refreshToken: string): Promise<IDataRefreshToken> {
  return request.post("/api/refresh-token", {
    refresh_token: refreshToken
  });
}
