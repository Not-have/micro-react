/* eslint-disable react/jsx-max-depth */
import React, {
  useCallback,
  useState
} from "react";

import {
  UserOutlined,
  LockOutlined,
  LoginOutlined
} from "@ant-design/icons";
import {
  dataLogin
} from "@micro-umi/api";
import {
  Button,
  Card,
  Form,
  Input,
  Typography,
  Space,
  message
} from "antd";

const {
  Title
} = Typography;

export default function Login(): React.ReactElement {
  const [
    loading,
    setLoading
  ] = useState(false);

  const [
    form
  ] = Form.useForm();

  const handleLogin = useCallback(async (values: { username: string; password: string }) => {
    setLoading(true);

    try {
      const result = await dataLogin({
        username: values.username,
        password: values.password
      });

      message.success("登录成功！");

      // 保存 token
      localStorage.setItem("token", result.token);

      // 跳转页面
      const urlParams = new URL(window.location.href).searchParams;

      window.location.href = urlParams.get("redirect") || "/";

    } catch (error) {
      console.error("登录失败:", error);
      message.error("登录失败，请检查用户名和密码");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px"
    }}>
      <Card
        bodyStyle={{
          padding: "40px 32px"
        }}
        style={{
          width: "100%",
          maxWidth: 400,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          border: "none"
        }}>
        <Space direction="vertical"
          size="large"
          style={{
            width: "100%"
          }}>
          {/* 标题区域 */}
          <div style={{
            textAlign: "center"
          }}>
            <LoginOutlined style={{
              fontSize: "48px",
              color: "#1890ff",
              marginBottom: "16px"
            }} />

            <Title level={2}
              style={{
                margin: 0,
                color: "#262626"
              }}>
              欢迎登录
            </Title>
          </div>

          {/* 登录表单 */}
          <Form
            autoComplete="off"
            form={form}
            layout="vertical"
            name="login"
            onFinish={handleLogin}
            size="large">
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                {
                  required: true,
                  message: "请输入用户名!"
                },
                {
                  min: 3,
                  message: "用户名至少3个字符!"
                }
              ]}>
              <Input
                placeholder="请输入用户名"
                prefix={<UserOutlined style={{
                  color: "#bfbfbf"
                }} />}
                style={{
                  borderRadius: "8px"
                }}/>
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: "请输入密码!"
                },
                {
                  min: 6,
                  message: "密码至少6个字符!"
                }
              ]}>
              <Input.Password
                placeholder="请输入密码"
                prefix={<LockOutlined style={{
                  color: "#bfbfbf"
                }} />}
                style={{
                  borderRadius: "8px"
                }}/>
            </Form.Item>

            <Form.Item style={{
              marginBottom: "16px"
            }}>
              <Button
                block
                htmlType="submit"
                loading={loading}
                style={{
                  height: "48px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "500"
                }}
                type="primary">
                {loading ? "登录中..." : "登录"}
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </Card>
    </div>
  );
}
