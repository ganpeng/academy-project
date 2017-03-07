import React, { Component, PropTypes } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Input, Button, Upload, Icon } from 'antd';
const FormItem = Form.Item;


import { createLeader } from '../../../actions/leader';
import { api_root } from '../../../constants';


class LeaderForm extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (!values.image.error) {
          const leader = {
            name: values.name,
            desc: values.desc,
            image: values.image[0].response.image
          }

          this.props.createLeader(leader)
            .then((data) => {
              if (data.success === 'ok') {
                this.setState({
                  redirect: true
                })
              }
            })
        }
      }
    })
  }


  normFile(e) {
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  }



  render() {
    const { getFieldDecorator } = this.props.form;
    const { redirect } = this.state;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 12 }
    }

    return (
      <div>
        {
          redirect ? <Redirect to="/admin/leader/list" /> :
          <Form className="leader-form" onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label="领导姓名"
            >
              {
                getFieldDecorator('name', {
                  rules: [{required: true, message: '请填写领导名称'}]
                })(
                  <Input placeholder="请输入领导姓名" />
                )
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="领导简介"
            >
              {
                getFieldDecorator('desc', {
                  rules: [{required: true, message: '请填写领导简介'}]
                })(
                  <Input type="textarea" rows={6} placeholder="请填写领导简介" />
                )
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="领导照片"
            >
              {
                getFieldDecorator('image', {
                  valuePropName: 'fileList',
                  getValueFromEvent: this.normFile,
                  rules: [{required: true, message: '请上传领导照片'}]
                })(
                  <Upload action={`${api_root}/imageupload`} listType="picture" onChange={this.handleUpload}>
                    <Button>
                      <Icon type="upload" /> 上传照片
                    </Button>
                  </Upload>
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
        }
      </div>
    );
  }
}

export default connect(null, { createLeader })(Form.create()(LeaderForm));
