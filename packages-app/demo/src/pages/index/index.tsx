import {
  open
} from "@mt-kit/react-ant-design-extra";
import {
  useCallback
} from "react";

import {
  useModel
} from "@umijs/max";
import {
  Button
} from "antd";

export default function HomePage(): React.ReactElement {

  const {
    initialState
  } = useModel("@@initialState");

  const handleOpen = useCallback(() => {
    open({
      title: "修改密码",
      content: "11"
    });
  }, []);

  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>

      <p>
        {initialState?.name}
      </p>

      <Button onClick={handleOpen}>
        打开弹窗
      </Button>
    </div>
  );
}
