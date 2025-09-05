import {
  useModel
} from "@umijs/max";

export default function AvatarName():React.ReactElement {
  const {
    initialState
  } = useModel("@@initialState");

  const {
    name
  } = initialState || {};

  return <span className="anticon">
    {name}
  </span>;
}
