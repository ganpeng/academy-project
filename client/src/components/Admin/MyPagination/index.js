import React, { Component, PropTypes } from 'react';
import { Pagination } from 'antd';

class MyPagination extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { currentPage, total, getLeaders } = this.props;
    return (
      <div className="admin-pagination">
        <Pagination current={currentPage} defaultCurrent={1} total={total} pageSize={2} defaultPageSize={2} onChange={(page) => getLeaders(page)} />
      </div>
    );
  }
}

export default MyPagination;
