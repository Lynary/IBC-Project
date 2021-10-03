import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { Container, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'

const Login = () => {

    const router = useRouter()

    const [isLogged, setIsLogged] = useState(false)
    const userData = [
        {
            username: 'admin',
            password: 'admin'
        },
        {
            username: 'test123',
            password: 'test123'
        },
        {
            username: 'testusername',
            password: 'testpassword'
        },
    ]

    const onFinish = (values) => {
        if (userData.find(user => user.username == values.username) != null &&
            userData.find(user => user.password == values.password) != null) {
            setIsLogged(!isLogged)
            console.log('Success:', values);
            router.push('/Dashboard')

        } else {
            alert('username atau password salah')
            router.push('/Dashboard/Login')
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const style = {
        padding: "40px"
    }

    return (
        <div style={style}>
            <Container>
                <Row>
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
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
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
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Row>
            </Container>
        </div>

    )
}

export default Login
