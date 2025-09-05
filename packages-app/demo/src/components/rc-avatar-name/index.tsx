import {
  useModel
} from "@umijs/max";
import styled from "styled-components";

const ScSpan = styled.span`
  margin-left: 8px;
  cursor: pointer;
  transition: color 0.32s;
`;

export default function RcAvatarName():React.ReactElement {
  const {
    initialState
  } = useModel("@@initialState");

  const {
    name
  } = initialState || {};

  return <ScSpan>
    {name}
  </ScSpan>;
}
