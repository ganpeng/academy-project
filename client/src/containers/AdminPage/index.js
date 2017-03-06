import React, { Component, PropTypes } from 'react';

class AdminPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="admin">
        AdminPage
      </div>
    );
  }
}

export default AdminPage;
