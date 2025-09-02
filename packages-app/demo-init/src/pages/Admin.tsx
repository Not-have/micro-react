import React from "react";

import {
 HeartTwoTone, SmileTwoTone
} from "@ant-design/icons";
import {
 PageContainer
} from "@ant-design/pro-components";
import {
 useIntl
} from "@umijs/max";
import {
 Alert, Card, Typography
} from "antd";

function Admin(): React.ReactElement {
  const intl = useIntl();

  return (
    <PageContainer
      content={intl.formatMessage({
        id: "pages.admin.subPage.title",
        defaultMessage: "This page can only be viewed by admin"
      })}>
      <Card>
        <Alert
          banner
          message={intl.formatMessage({
            id: "pages.welcome.alertMessage",
            defaultMessage:
              "Faster and stronger heavy-duty components have been released."
          })}
          showIcon
          style={{
            margin: -12,
            marginBottom: 48
          }}
          type="success"/>

        <Typography.Title level={2}
          style={{
            textAlign: "center"
          }}>
          <SmileTwoTone />
          {" "}
          Ant Design Pro
          {" "}
          <HeartTwoTone twoToneColor="#eb2f96" />
          {" "}
          You
        </Typography.Title>
      </Card>

      <p style={{
        textAlign: "center",
        marginTop: 24
      }}>
        Want to add more pages? Please refer to
        {" "}

        <a
          href="https://pro.ant.design/docs/block-cn"
          rel="noopener noreferrer"
          target="_blank">
          use block
        </a>
      </p>
    </PageContainer>
  );
}

export default Admin;
