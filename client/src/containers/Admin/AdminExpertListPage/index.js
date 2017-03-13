import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getExperts, deleteExpertRequest, deleteExpert } from '../../../actions/expert';
import ExpertTable from '../../../components/Admin/ExpertTable/';
import MyPagination from '../../../components/Admin/MyPagination/';

class AdminExpertListPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  componentDidMount() {
    this.props.getExperts(1);
  }


  render() {
    const { experts, getExperts, pagination, deleteExpertRequest, deleteExpert } = this.props;
    const { currentPage, total } = pagination.expertPagination;
    return (
      <div className="leader-list" style={{minHeight: "460px"}}>
        <ExpertTable dataSource={experts} deleteExpertRequest={deleteExpertRequest} deleteExpert={deleteExpert} />
        <MyPagination gotoPage={getExperts} currentPage={currentPage} total={total} />
      </div>
    );
  }
}


function mapStatesToProps(state) {
  return {
    experts: state.experts,
    pagination: state.pagination
  }
}




export default connect(mapStatesToProps, { getExperts, deleteExpertRequest, deleteExpert })(AdminExpertListPage);
