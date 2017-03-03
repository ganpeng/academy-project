import React, { Component, PropTypes } from 'react';

class OrganizationPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    return (
      <div className="organization-container">
        OrganizationPage
      </div>
    );
  }
}

export default OrganizationPage;
