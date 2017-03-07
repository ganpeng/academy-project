import React, { Component, PropTypes } from 'react';
import { Table, Button } from 'antd';


// const dataSource = [
//   {
//     key: 1,
//     name: '东东',
//     desc: '这是东东的简介',
//     createdAt: '2015-06-11'
//   },
//   {
//     key: 2,
//     name: '嘻嘻',
//     desc: '这是嘻嘻的简介',
//     createdAt: '2015-06-11'
//   },
//   {
//     key: 3,
//     name: '小丸子',
//     desc: '这是小丸子的简介',
//     createdAt: '2015-06-11'
//   }
// ]


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
                  <Button type="primary" onClick={this.handleUpdate.bind(this, record, index)}>修改</Button>
                </span>
        }
      }
    ];
  }


  handleDelete(record, index) {
    const { _id: id } = record;
    this.props.deleteLeaderRequest(id);
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
