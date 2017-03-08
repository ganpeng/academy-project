import React, { Component, PropTypes } from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';



class ExpertTable extends Component {
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
        title: '委员会职务',
        dataIndex: 'post',
        width: '20%'
      },
      {
        title: '工作单位',
        dataIndex: 'workplace',
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
                    <Link to={`/admin/expert/update/${record._id}`}>修改</Link>
                  </Button>
                </span>
        }
      }
    ];
  }


  handleDelete(record, index) {
    const { _id: id } = record;
    this.props.deleteExpertRequest(id)
      .then((data) => {
        if (data.success === 'ok') {
          this.props.deleteExpert(index);
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

export default ExpertTable;
