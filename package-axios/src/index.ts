import RequestClient, {
  authenticateResponseInterceptor,
  defaultResponseInterceptor,
  errorMessageResponseInterceptor,
  formatToken,
  RequestClientOptions
} from "@mt-kit/request-axios";
import {
  message as Message
} from "antd";

/**
 * 接口地址
 *
 * 需要启动 mock 服务
 */

function createRequestClient(
    baseUrl: string = "",
    options?: RequestClientOptions
): RequestClient {
  const client = new RequestClient({
    ...options,
    baseURL: baseUrl
  });

  /**
   * 重新认证逻辑
   *
   * 退出登陆
   */
  async function doReAuthenticate(): Promise<void> {
    console.warn("Access token or refresh token is invalid or expired. ");
  }

  /**
   * 刷新token逻辑
   */
  async function doRefreshToken(): Promise<string> {
    console.warn("刷新 token 逻辑");

    return "";
  }

  // 请求头处理
  client.addRequestInterceptor({
    fulfilled: async config => {

      config.headers.Authorization = formatToken("");

      return config;
    }
  });

  client.addResponseInterceptor(defaultResponseInterceptor());

  // token过期的处理
  client.addResponseInterceptor(authenticateResponseInterceptor({
    client,
    doReAuthenticate,
    doRefreshToken,
    enableRefreshToken: true,
    formatToken
  }));

  // 通用的错误处理,如果没有进入上面的错误处理逻辑，就会进入这里
  client.addResponseInterceptor(errorMessageResponseInterceptor({
    errorFn: (message, error) => {
      console.error(message, error);

      if(message) {
        Message.error(message);
      }
    }
  }));

  return client;
}

const requestClient = createRequestClient();

export default requestClient;

export const baseRequestClient = new RequestClient();
