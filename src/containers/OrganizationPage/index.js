import React, { Component, PropTypes } from 'react';

import Organization from '../../components/Organization/';

class OrganizationPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    return (
      <div className="organization-container">
        <Organization />
      </div>
    );
  }
}

export default OrganizationPage;
