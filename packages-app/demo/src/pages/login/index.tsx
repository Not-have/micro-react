import React, {
  useCallback
} from "react";

import {
  dataLogin
} from "@micro-umi/api";
import {
  Button
} from "antd";

export default function Login(): React.ReactElement {
  const handleClick = useCallback(() => {
    dataLogin({
      username: "admin",
      password: "123456"
    }).catch(error => {
      console.log(error);
    });

    // const urlParams = new URL(window.location.href).searchParams;

    // window.location.href = urlParams.get("redirect") || "/";

    // localStorage.setItem("token", "123456");
  }, []);

  return <div>
    <Button onClick={handleClick}
      type="primary">
      登录
    </Button>
  </div>;
}
