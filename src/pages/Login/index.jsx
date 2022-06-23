import { Card, Button, Checkbox, Form, Input } from 'antd'
// import logo from '../../assets/logo-black.svg'
import logo from '../../assets/logo.png'
import './index.scss'

export default function Login() {
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = (values) => {
    console.log('Success:', values)
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form
          name="basic"
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          validateTrigger={['onChange', 'onBlur']}
        >
          <Form.Item
            label="用户"
            name="username"
            rules={[
                {
                    pattern: /^[a-zA-Z0-9_]{4,16}$/,
                    message: '用户名必须为4-16位字母、数字、下划线',
                    validateTrigger: 'onBlur',
                },
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input size="large" placeholder="请输入账号" />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
                {
                    pattern: /^[a-zA-Z0-9_]{4,16}$/,
                    message: '密码长度必须为8-16位字母、数字、下划线',
                    validateTrigger: 'onBlur',
                },
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password size="large" placeholder="请输入密码" minLength={8} />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className="login-checkbox-label">
              我已阅读并同意 「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
