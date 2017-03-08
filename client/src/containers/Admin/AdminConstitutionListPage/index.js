import React, { Component, PropTypes } from 'react';

class AdminConstitutionListPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="admin-constitution-list">
        Constitution List
      </div>
    );
  }
}

export default AdminConstitutionListPage;
