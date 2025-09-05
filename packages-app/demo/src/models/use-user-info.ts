import {
  useState
} from "react";

import {
  DataUserInfo
} from "@micro-umi/api";

const useUserInfo = () => {
  const [
    userInfo,
    setUserInfo
  ] = useState<DataUserInfo>();

  return {
    userInfo,
    setUserInfo
  };
};

export default useUserInfo;
