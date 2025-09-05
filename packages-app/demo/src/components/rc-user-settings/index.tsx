import {
  useHistory
} from "@mt-kit/react-hooks";
import {
  useCallback,
  useMemo
} from "react";

import {
  LogoutOutlined
} from "@ant-design/icons";
import {
  LocalToken,
  Router
} from "@micro-umi/enum";
import {
  localStorageHelper
} from "@mt-kit/utils";
import {
  Dropdown,
  MenuProps
} from "antd";

interface IProps {
  children: React.ReactNode;
  items?: MenuProps["items"];
}

export default function RcUserSettings({
  children,
  items
}: IProps):React.ReactElement {
  const {
    replace
  } = useHistory();

  const handleClick = useCallback(() => {
    localStorageHelper.delete(LocalToken.TOKEN);
    localStorageHelper.delete(LocalToken.REFRESH_TOKEN);
    replace(Router.LOGIN);
  }, [
    replace
  ]);

  const _item = useMemo(() => items || [
    {
      key: "logout",
      label: "退出登录",
      icon: <LogoutOutlined />,
      onClick: handleClick
    }
  ], [
    handleClick,
    items
  ]);

  return <Dropdown menu={{
    items: _item
  }}>
    {children}
  </Dropdown>;
}
