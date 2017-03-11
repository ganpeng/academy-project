import React, { Component, PropTypes } from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';

import { api_root } from '../../../constants/';


class CarouselTable extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.columns = [
      {
        title: '编号',
        // dataIndex: '_id',
        width: '20%',
        key: '_id',
        render: (text, record, index) => {
          return <span>{index + 1}</span>
        }
      },
      {
        title: '图片',
        // dataIndex: 'image',
        width: '20%',
        key: 'image',
        render: (text, record, index) => {
          return <img src={`${api_root}/${record.image}`} alt="轮播图" style={{width:"50px", height:"50px"}}/>
        }
      },
      {
        title: '创建时间',
        dataIndex: 'createdAt',
      },{
        title: '操作',
        key: 'action',
        render: (text, record, index) => {
          return <span>
                  <Button type="danger" onClick={this.handleDelete.bind(this, record, index)}>删除</Button>
                  &nbsp;&nbsp;
                  {
                    record.show
                      ? <Button type="default" onClick={this.handleHide.bind(this, record, index)}>停用</Button>
                      : <Button type="primary" onClick={this.handleShow.bind(this, record, index)}>启用</Button>
                  }
                </span>
        }
      }
    ];
  }

  handleShow(record, index) {
    const { _id: id } = record;
    this.props.updateCarouselRequest(id, { show: true })
      .then((data) => {
        if (data.success === 'ok') {
          this.props.updateCarousel(index);
        }
      })
  }

  handleHide(record, index) {
    const { _id: id } = record;
    this.props.updateCarouselRequest(id, { show: false })
      .then((data) => {
        if (data.success === 'ok') {
          this.props.updateCarousel(index);
        }
      })
  }

  handleDelete(record, index) {
    const { _id: id } = record;
    this.props.deleteCarouselRequest(id)
      .then((data) => {
        if (data.success === 'ok') {
          this.props.deleteCarousel(index);
        }
      })
  }


  render() {
    const { dataSource } = this.props;
    return (
      <div className="admin-leader-table">
        <Table rowKey={record => record._id }  bordered  columns={this.columns} dataSource={dataSource} pagination={false} />
      </div>
    );
  }
}

export default CarouselTable;
