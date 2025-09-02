import React from "react";

import {
  history, useIntl
} from "@umijs/max";
import {
  Button, Card, Result
} from "antd";

function NoFoundPage() {
  return <Card variant="borderless">
    <Result
      extra={
        <Button onClick={() => history.push("/")}
          type="primary">
          {useIntl().formatMessage({
            id: "pages.404.buttonText"
          })}
        </Button>
      }
      status="404"
      subTitle={useIntl().formatMessage({
        id: "pages.404.subTitle"
      })}
      title="404"/>
  </Card>;
}

export default NoFoundPage;
