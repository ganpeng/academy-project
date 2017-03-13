import React, { Component, PropTypes } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button, Upload, Icon } from 'antd';


import { createCarousel } from '../../../actions/carousel';
import { api_root } from '../../../constants';


const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 }
}


class AdminCarouselCreatePage extends Component {
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
  }


  handleCreate(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (!values.image.error) {
          const carousel = {
            image: values.image[0].response.image
          }

          this.props.createCarousel(carousel)
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
    return (
      <div className="admin-carousel">
        {
          redirect
            ? <Redirect to="/admin/carousel/list" />
            : <Form className="leader-form" onSubmit={this.handleCreate}>
                <FormItem
                  {...formItemLayout}
                  label="轮播图"
                >
                  {
                    getFieldDecorator('image', {
                      valuePropName: 'fileList',
                      getValueFromEvent: this.normFile,
                      rules: [{required: true, message: '请上传图片'}]
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

export default connect(null, { createCarousel })(Form.create()(AdminCarouselCreatePage));
