import React, { Component, PropTypes } from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
const FormItem = Form.Item;

import { createExpertRequest, updateExpertRequest } from '../../../actions/expert';



class AdminExpertCreatePage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }


  componentDidMount() {
    const { setFieldsValue } = this.props.form;
    const { params: {id} } = this.props.match;
    const { experts } = this.props;
    const expert = experts.filter((expert) => expert._id === id)[0];

    if (id && expert) {
      setFieldsValue({
        name: expert.name,
        post: expert.post,
        workplace: expert.workplace
      })
    }

  }


  handleCreate(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.createExpertRequest(values)
          .then((data) => {
            if (data.success === 'ok') {
              this.setState({
                redirect: true
              })
            }
          })
      }
    })
  }

  handleUpdate(e) {
    e.preventDefault();
    const { params: {id} } = this.props.match;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.updateExpertRequest(id, values)
          .then((data) => {
            if (data.success === 'ok') {
              this.setState({
                redirect: true
              })
            }
          })

      }
    })
  }



  render() {
    const { getFieldDecorator } = this.props.form;
    const { redirect } = this.state;
    const { params: {id} } = this.props.match;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 12 }
    }

    const createForm = (
        <Form className="leader-form" onSubmit={this.handleCreate}>
          <FormItem
            {...formItemLayout}
            label="专家姓名"
          >
            {
              getFieldDecorator('name', {
                rules: [{required: true, message: '请填写领导名称'}]
              })(
                <Input placeholder="请输入专家姓名" />
              )
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="委员会职务"
          >
            {
              getFieldDecorator('post', {
                rules: [{required: true, message: '请填写领导简介'}]
              })(
                <Input placeholder="请输入委员会职务" />
              )
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="工作单位及名称"
          >
            {
              getFieldDecorator('workplace', {
                rules: [{required: true, message: '请上传领导照片'}]
              })(
                <Input placeholder="请输入工作单位" />
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


    const updateForm = (
        <Form className="leader-form" onSubmit={this.handleUpdate}>
          <FormItem
            {...formItemLayout}
            label="专家姓名"
          >
            {
              getFieldDecorator('name', {
                rules: [{required: true, message: '请填写专家姓名'}]
              })(
                <Input placeholder="请输入专家姓名" />
              )
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="委员会职务"
          >
            {
              getFieldDecorator('post', {
                rules: [{required: true, message: '请填写委员会职务'}]
              })(
                <Input placeholder="请输入委员会职务" />
              )
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="工作单位及名称"
          >
            {
              getFieldDecorator('workplace', {
                rules: [{required: true, message: '请填写工作单位'}]
              })(
                <Input placeholder="请输入工作单位" />
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


    return (
      <div className="admin-expert-create">
        { redirect ? <Redirect to="/admin/expert/list" /> : (id ? updateForm : createForm) }
      </div>
    );
  }
}


function mapStatesToProps(state) {
  return {
    experts: state.experts
  }
}



export default connect(mapStatesToProps, { createExpertRequest, updateExpertRequest })(Form.create()(AdminExpertCreatePage));
