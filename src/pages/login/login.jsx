import React, { Component } from 'react'
import './login.less'
import { Form, Input, Button, Checkbox } from 'antd';

export default class Login extends Component {
  render() {
    const onFinish = values => {
    console.log('Received values of form: ', values);
  }
    return (
      <div className="login">
        <div className="login-header">
          <h1>后台管理系统</h1>
        </div>
        <div className="login-container">
          <div className="form">
            <div className="title">
              <h1>用户登录</h1>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                   </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
