import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Register.module.css";
import { Form, Input, Button } from "antd";
import { Container, Row } from "react-bootstrap";

function Register() {
  const router = useRouter();
  const users = useSelector((state) => state.UserReducer.user);

  const onFinish = (values) => {
    console.log("Success:", values);
    users.push(values);
    router.push("/Login");
    console.log(users);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.divStyle}>
      <Container>
        <Row>
          <h1 className={styles.h1Style}>REGISTER</h1>
          <Form
            name="basic"
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
              //   onChange={handleChange}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              //   onChange={handleChange}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
