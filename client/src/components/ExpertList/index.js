import React, { Component, PropTypes } from 'react';

import ExpertTable from '../ExpertTable/';
import Pagination from '../Pagination/';

class ExpertList extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  componentDidMount() {
    this.props.getExperts(1);
  }

  render() {
    const { experts, expertPagination, getExperts } = this.props;
    const { currentPage, pages } = expertPagination;
    const len = experts.length;

    return (
      <div className="content-wrapper expert-list">
        <h2 className="title">
          <span>专家委员会名单</span>
        </h2>
        <ExpertTable experts={this.props.experts} />
        {
          len > 0 ? <Pagination  currentPage={currentPage}  pages={pages} gotoPage={getExperts} /> : null
        }
      </div>
    );
  }
}

export default ExpertList;
