import React, { Component, PropTypes } from 'react';

class AdminPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div>
        Admin
      </div>
    );
  }
}

export default AdminPage;
