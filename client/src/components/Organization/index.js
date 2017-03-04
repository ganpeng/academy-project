import React, { Component, PropTypes } from 'react';

class Organization extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="content-wrapper organization">
        <img src={require('../../../images/organization.png')} alt="消化内镜研究院组织机构" />
      </div>
    );
  }
}

export default Organization;
