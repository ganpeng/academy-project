import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ExpertList from '../../components/ExpertList/';
import { getExperts } from '../../actions/expert';

class ExpertListPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    const { experts, expertPagination, getExperts } = this.props;
    return (
      <div className="expert-list-container">
        <ExpertList experts={experts} expertPagination={expertPagination} getExperts={getExperts} />
      </div>
    );
  }
}


function mapStatesToProps(state) {
  return {
    experts: state.experts,
    expertPagination: state.pagination.expertPagination
  }
}


export default connect(mapStatesToProps, { getExperts })(ExpertListPage);
