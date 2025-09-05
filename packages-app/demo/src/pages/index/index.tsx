import {
  useModel
} from "@umijs/max";

export default function HomePage(): React.ReactElement {

  const {
    initialState
  } = useModel("@@initialState");

  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>

      <p>
        To get started, edit
        {initialState?.username}
        <code>pages/index.tsx</code>
        {initialState?.email}
        {initialState?.avatar}
        {initialState?.phone}
        and save to reload.
      </p>
    </div>
  );
}
