import React, { Component } from 'react'
import './login.less'
import { Form, Input, Button, Checkbox } from 'antd';

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-header">
          <h1>后台管理系统</h1>
        </div>
        <div className="login-container">
          <div className="form">
            <div className="title">
              <h1>用户登录</h1>
              <Form></Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
