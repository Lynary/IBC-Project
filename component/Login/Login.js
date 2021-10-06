
import React from 'react'
import { Form, Input, Button } from 'antd'
import { Container, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { LoginUser } from '../../redux/store/actions/UserActions'
import styles from './Login.module.css'

const Login = () => {

    const router = useRouter()
    const dispatch = useDispatch()

    //memakai useSelector untuk mengambil state dari redux
    const users = useSelector(state => state.UserReducer.user)
    //fungsi submit button login
    const onFinish = (values) => {
        const { username, password } = values
        if (users.find(user => user.username == username && user.password == password) != null) {
            dispatch(LoginUser({
                username,
            }))
            console.log('Success:', values);
            router.push('/Dashboard')
        } else {
            alert('username atau password salah')
            router.push('/Login')
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className={styles.divStyle}>
            <Container>
                <Row>
                    <h1 className={styles.h1Style}>LOGIN</h1>
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