import React, { Component, PropTypes } from 'react';
import { Pagination } from 'antd';

const PAGESIZE = 10;

class MyPagination extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { currentPage, total, gotoPage } = this.props;
    return (
      <div className="admin-pagination">
        <Pagination current={currentPage} defaultCurrent={1} total={total} pageSize={PAGESIZE} defaultPageSize={PAGESIZE} onChange={(page) => gotoPage(page)} />
      </div>
    );
  }
}

export default MyPagination;
