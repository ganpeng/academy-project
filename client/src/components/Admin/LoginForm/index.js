import React, { Component, PropTypes } from 'react';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;


const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 }
}



class LoginForm extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Form className="admin-login-form"onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="用户名"
          >
            {
              getFieldDecorator('username', {
                rules: [{required: true, message: '用户名不能为空'}]
              })(
                <Input placeholder="请输入用户名" />
              )
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="密码"
          >
            {
              getFieldDecorator('desc', {
                rules: [{required: true, message: '密码不能为空'}]
              })(
                <Input placeholder="请输入密码" />
              )
            }
          </FormItem>
          <FormItem
            wrapperCol={{
              xs: {span: 12, offset: 0},
              sm: {span: 12, offset: 6}
            }}
          >
            <Button type="primary" htmlType="submit" >提交</Button>
          </FormItem>
        </Form>
    );
  }
}

export default Form.create()(LoginForm);
