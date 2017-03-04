import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ExpertList from '../../components/ExpertList/';

class ExpertListPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="expert-list-container">
        <ExpertList experts={this.props.experts} />
      </div>
    );
  }
}


function mapStatesToProps(state) {
  return {
    experts: state.experts
  }
}


export default connect(mapStatesToProps, {})(ExpertListPage);
