import React, {
  useCallback
} from "react";

import {
  Button
} from "antd";

export default function Login(): React.ReactElement {
  const handleClick = useCallback(() => {
    const urlParams = new URL(window.location.href).searchParams;

    window.location.href = urlParams.get("redirect") || "/";
  }, []);

  return <div>
    <Button onClick={handleClick}
      type="primary">
      登录
    </Button>
  </div>;
}
