import React, { Component, PropTypes } from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';



class LeaderTable extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        width: '20%'
      },
      {
        title: '简介',
        dataIndex: 'desc',
        width: '20%'
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
                  <Button type="primary">
                    <Link to={`/admin/leader/update/${record._id}`}>修改</Link>
                  </Button>
                </span>
        }
      }
    ];
  }


  handleDelete(record, index) {
    const { _id: id } = record;
    this.props.deleteLeaderRequest(id)
      .then((data) => {
        if (data.success === 'ok') {
          this.props.deleteLeader(index);
        }
      })
  }

  handleUpdate(record, index) {
    console.log(record);
    console.log(index);
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

export default LeaderTable;
